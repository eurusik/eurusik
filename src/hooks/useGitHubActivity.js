import { useState, useEffect } from 'react'
import {
  fetchGitHubEvents,
  fetchGitHubUser,
  processGitHubEvents,
  processContributions,
  calculateUserStats
} from '../services'

export const useGitHubActivity = () => {
  const [events, setEvents] = useState([])
  const [contributions, setContributions] = useState([])
  const [stats, setStats] = useState({ repos: 0, totalCommits: 0, followers: 0 })
  const [contribStats, setContribStats] = useState({ total: 0, max: 0, streak: 0 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const loadGitHubData = async () => {
    try {
      // Fetch events
      const eventsData = await fetchGitHubEvents(100)
      
      // Process recent activity
      const formattedEvents = processGitHubEvents(eventsData, 4)
      setEvents(formattedEvents)

      // Process contributions
      const { contributions: contribArray, stats: contribStatsData } = processContributions(eventsData)
      setContributions(contribArray)
      setContribStats(contribStatsData)

      // Fetch user stats
      const userData = await fetchGitHubUser()
      const userStats = calculateUserStats(userData, eventsData)
      setStats(userStats)
      
      setError(null)
    } catch (err) {
      console.error('Error loading GitHub data:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadGitHubData()
  }, [])

  return { 
    events, 
    contributions, 
    stats, 
    contribStats, 
    loading, 
    error 
  }
}
