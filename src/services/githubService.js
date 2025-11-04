import { GITHUB_CONFIG } from '../config'

/**
 * Fetch GitHub user events
 * @param {number} perPage - Number of events to fetch
 * @returns {Promise<Array>} Array of GitHub events
 */
export const fetchGitHubEvents = async (perPage = 100) => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_CONFIG.username}/events/public?per_page=${perPage}`
    )
    
    if (!response.ok) {
      console.warn(`GitHub API returned ${response.status}. Using fallback data.`)
      return []
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching GitHub events:', error)
    return []
  }
}

/**
 * Fetch GitHub user profile
 * @returns {Promise<Object>} User profile data
 */
export const fetchGitHubUser = async () => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_CONFIG.username}`
    )
    
    if (!response.ok) {
      console.warn(`GitHub API returned ${response.status}. Using fallback data.`)
      // Return minimal fallback data
      return {
        public_repos: 50,
        followers: 100,
        login: GITHUB_CONFIG.username
      }
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching GitHub user:', error)
    // Return fallback data instead of throwing
    return {
      public_repos: 50,
      followers: 100,
      login: GITHUB_CONFIG.username
    }
  }
}

/**
 * Process events into formatted activity
 * @param {Array} events - Raw GitHub events
 * @param {number} limit - Number of activities to return
 * @returns {Array} Formatted activities
 */
export const processGitHubEvents = (events, limit = 4) => {
  const validEvents = events.filter(event => {
    if (event.type === 'PushEvent' && (!event.payload.commits || event.payload.commits.length === 0)) {
      return false
    }
    return true
  })
  
  return validEvents.slice(0, limit).map(event => ({
    id: event.id,
    type: event.type,
    repo: event.repo.name,
    createdAt: new Date(event.created_at),
    payload: event.payload
  }))
}

/**
 * Process events into contribution data
 * @param {Array} events - Raw GitHub events
 * @returns {Object} Contribution data with array and stats
 */
export const processContributions = (events) => {
  const contributionMap = new Map()
  const today = new Date()
  const startOfYear = new Date(today.getFullYear(), 0, 1)
  
  // Initialize all days from start of year to today
  for (let d = new Date(startOfYear); d <= today; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split('T')[0]
    contributionMap.set(dateStr, 0)
  }
  
  events.forEach(event => {
    const date = new Date(event.created_at).toISOString().split('T')[0]
    if (contributionMap.has(date)) {
      contributionMap.set(date, contributionMap.get(date) + 1)
    }
  })
  
  const contributionsArray = Array.from(contributionMap, ([date, count]) => ({
    date,
    count
  })).sort((a, b) => new Date(a.date) - new Date(b.date))
  
  const total = contributionsArray.reduce((sum, day) => sum + day.count, 0)
  const max = Math.max(...contributionsArray.map(day => day.count))
  const streak = calculateStreak(contributionsArray)
  
  return {
    contributions: contributionsArray,
    stats: { total, max, streak }
  }
}

/**
 * Calculate current contribution streak
 * @param {Array} contribs - Array of contribution objects
 * @returns {number} Current streak in days
 */
const calculateStreak = (contribs) => {
  let currentStreak = 0
  const reversed = [...contribs].reverse()
  
  for (const day of reversed) {
    if (day.count > 0) {
      currentStreak++
    } else if (currentStreak > 0) {
      break
    }
  }
  
  return currentStreak
}

/**
 * Calculate user stats from events
 * @param {Object} userData - GitHub user data
 * @param {Array} events - GitHub events
 * @returns {Object} User stats
 */
export const calculateUserStats = (userData, events) => {
  const pushEvents = events.filter(e => e.type === 'PushEvent')
  const totalCommits = pushEvents.reduce((sum, event) => 
    sum + (event.payload.commits?.length || 0), 0
  )
  
  return {
    repos: userData.public_repos,
    totalCommits: totalCommits > 0 ? totalCommits : events.slice(0, 30).length,
    followers: userData.followers
  }
}
