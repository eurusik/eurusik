import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, GitBranch, GitCommit, GitPullRequest, Star, GitFork, Code, BookMarked } from 'lucide-react'

const GitHubActivity = () => {
  const [events, setEvents] = useState([])
  const [stats, setStats] = useState({ repos: 0, totalCommits: 0, followers: 0 })
  const [loading, setLoading] = useState(true)
  const username = 'eurusik'

  useEffect(() => {
    fetchGitHubData()
  }, [])

  const fetchGitHubData = async () => {
    try {
      // Fetch events
      const eventsResponse = await fetch(
        `https://api.github.com/users/${username}/events/public?per_page=100`
      )
      
      if (!eventsResponse.ok) throw new Error('Failed to fetch GitHub activity')
      
      const eventsData = await eventsResponse.json()
      
      // Фільтруємо та беремо події з контентом
      const validEvents = eventsData.filter(event => {
        // Skip empty push events
        if (event.type === 'PushEvent' && (!event.payload.commits || event.payload.commits.length === 0)) {
          return false
        }
        return true
      })
      
      // Беремо останні 4 події
      const formattedEvents = validEvents.slice(0, 4).map(event => ({
        id: event.id,
        type: event.type,
        repo: event.repo.name,
        createdAt: new Date(event.created_at),
        payload: event.payload
      }))
      
      setEvents(formattedEvents)

      // Fetch user stats
      const userResponse = await fetch(`https://api.github.com/users/${username}`)
      if (userResponse.ok) {
        const userData = await userResponse.json()
        
        // Calculate commits from push events
        const pushEvents = eventsData.filter(e => e.type === 'PushEvent')
        const totalCommits = pushEvents.reduce((sum, event) => 
          sum + (event.payload.commits?.length || 0), 0
        )
        
        // Count different event types for activity metric
        const activityCount = eventsData.slice(0, 30).length
        
        setStats({
          repos: userData.public_repos,
          totalCommits: totalCommits > 0 ? totalCommits : activityCount,
          followers: userData.followers
        })
      }
    } catch (err) {
      console.error('Error fetching GitHub data:', err)
    } finally {
      setLoading(false)
    }
  }

  const getEventIcon = (type) => {
    switch (type) {
      case 'PushEvent':
        return <GitCommit size={20} className="text-green-500" />
      case 'PullRequestEvent':
        return <GitPullRequest size={20} className="text-purple-500" />
      case 'CreateEvent':
        return <GitBranch size={20} className="text-blue-500" />
      case 'WatchEvent':
        return <Star size={20} className="text-yellow-500" />
      case 'ForkEvent':
        return <GitFork size={20} className="text-orange-500" />
      default:
        return <Code size={20} className="text-gray-500" />
    }
  }

  const getEventDescription = (event) => {
    switch (event.type) {
      case 'PushEvent':
        const commits = event.payload.commits?.length || 0
        if (commits === 0) return null // Skip empty pushes
        return `Pushed ${commits} commit${commits !== 1 ? 's' : ''}`
      case 'PullRequestEvent':
        return `${event.payload.action?.charAt(0).toUpperCase() + event.payload.action?.slice(1) || 'Updated'} pull request`
      case 'CreateEvent':
        return `Created ${event.payload.ref_type}`
      case 'WatchEvent':
        return 'Starred repository'
      case 'ForkEvent':
        return 'Forked repository'
      case 'IssuesEvent':
        return `${event.payload.action?.charAt(0).toUpperCase() + event.payload.action?.slice(1) || 'Updated'} issue`
      case 'IssueCommentEvent':
        return 'Commented on issue'
      case 'PullRequestReviewEvent':
        return 'Reviewed pull request'
      default:
        return event.type.replace('Event', '')
    }
  }

  const formatDate = (date) => {
    const now = new Date()
    const diff = now - date
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const days = Math.floor(hours / 24)

    if (hours < 1) return 'Just now'
    if (hours < 24) return `${hours}h ago`
    if (days < 7) return `${days}d ago`
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  return (
    <section id="github-activity" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30" aria-labelledby="github-heading">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="github-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4 font-poppins">
            GitHub Activity
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recent contributions and open source activity
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium mb-1">Public Repos</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {stats.repos}
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                    <BookMarked className="text-white" size={24} />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 bg-gradient-to-br from-green-50 to-green-100 border border-green-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium mb-1">Recent Commits</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      {stats.totalCommits}
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
                    <GitCommit className="text-white" size={24} />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium mb-1">Followers</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {stats.followers}
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                    <Star className="text-white" size={24} />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Recent Activity</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4" role="list" aria-label="GitHub recent activities">
                {events.map((event, index) => {
                  const description = getEventDescription(event)
                  if (!description) return null // Skip events without description
                  
                  return (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="glass-card rounded-xl p-5 hover:shadow-lg transition-shadow duration-300 border border-gray-200"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200">
                          {getEventIcon(event.type)}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <p className="text-gray-800 font-semibold">
                              {description}
                            </p>
                            <span className="text-gray-500 text-xs whitespace-nowrap">
                              {formatDate(event.createdAt)}
                            </span>
                          </div>
                          <a
                            href={`https://github.com/${event.repo}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 text-sm font-mono truncate block transition-colors"
                          >
                            {event.repo}
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* GitHub Profile Link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-shadow duration-300"
              >
                <Github size={20} />
                <span>View Full GitHub Profile</span>
              </a>
            </motion.div>
          </>
        )}
      </div>
    </section>
  )
}

export default GitHubActivity
