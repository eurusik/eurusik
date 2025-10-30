import { motion } from 'framer-motion'
import { Github, GitBranch, GitCommit, GitPullRequest, Star, GitFork, Code, BookMarked, Activity } from 'lucide-react'
import { useGitHubActivity } from '../../hooks'
import { GITHUB_CONFIG } from '../../config'

const GitHubActivity = () => {
  const { events, contributions, stats, contribStats, loading } = useGitHubActivity()

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
      case 'PushEvent': {
        const commits = event.payload.commits?.length || 0
        if (commits === 0) return null
        return `Pushed ${commits} commit${commits !== 1 ? 's' : ''}`
      }
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

  const getColorIntensity = (count) => {
    if (count === 0) return 'bg-gray-200'
    if (count === 1) return 'bg-green-200'
    if (count <= 3) return 'bg-green-400'
    if (count <= 5) return 'bg-green-600'
    return 'bg-green-700'
  }

  const getTooltipText = (date, count) => {
    const dateObj = new Date(date)
    const formattedDate = dateObj.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    })
    return `${count} contribution${count !== 1 ? 's' : ''} on ${formattedDate}`
  }

  const groupByWeeks = (contribs) => {
    const weeks = []
    let week = []
    
    contribs.forEach((day, index) => {
      const dayOfWeek = new Date(day.date).getDay()
      
      if (index === 0 && dayOfWeek !== 0) {
        for (let i = 0; i < dayOfWeek; i++) {
          week.push(null)
        }
      }
      
      week.push(day)
      
      if (dayOfWeek === 6 || index === contribs.length - 1) {
        weeks.push([...week])
        week = []
      }
    })
    
    return weeks
  }

  const weeks = groupByWeeks(contributions)
  const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

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
                    <p className="text-gray-600 text-sm font-medium mb-1">Year Contributions</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      {contribStats.total}
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
                    <Activity className="text-white" size={24} />
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
                    <p className="text-gray-600 text-sm font-medium mb-1">Current Streak</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {contribStats.streak} days
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                    <Github className="text-white" size={24} />
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
                  if (!description) return null
                  
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

            {/* Contribution Graph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Contribution Graph</h3>
              <div className="glass-card rounded-2xl p-4 md:p-6 bg-gradient-to-br from-white/80 to-gray-50/80 border border-gray-200 overflow-hidden">
                {/* Custom scrollbar styling */}
                <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
                  <div className="min-w-max md:min-w-0 md:w-full">
                    {/* Month labels */}
                    <div className="flex gap-1 md:gap-1 mb-2 md:mb-2 ml-7 md:ml-8">
                      {monthLabels.map((month, i) => (
                        <div key={month} className="text-[10px] md:text-xs text-gray-500 font-medium w-9 md:flex-1 md:min-w-0">
                          {i % 2 === 0 ? month : ''}
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-1 md:gap-1">
                      {/* Day labels */}
                      <div className="flex flex-col gap-1 md:gap-1 text-[10px] md:text-xs text-gray-500 font-medium mr-1 md:mr-2">
                        <div className="h-2.5 md:h-3"></div>
                        <div className="h-2.5 md:h-3">Mon</div>
                        <div className="h-2.5 md:h-3"></div>
                        <div className="h-2.5 md:h-3">Wed</div>
                        <div className="h-2.5 md:h-3"></div>
                        <div className="h-2.5 md:h-3">Fri</div>
                        <div className="h-2.5 md:h-3"></div>
                      </div>

                      {/* Contribution squares */}
                      <div className="flex gap-1 md:gap-1 md:flex-1">
                        {weeks.map((week, weekIndex) => (
                          <div key={weekIndex} className="flex flex-col gap-1 md:gap-1 md:flex-1">
                            {week.map((day, dayIndex) => (
                              <div
                                key={`${weekIndex}-${dayIndex}`}
                                className="group relative"
                              >
                                {day ? (
                                  <>
                                    <div
                                      className={`w-2.5 h-2.5 md:w-full md:aspect-square rounded-sm ${getColorIntensity(day.count)} transition-all duration-200 hover:ring-1 md:hover:ring-2 hover:ring-blue-500 cursor-pointer shadow-sm`}
                                      title={getTooltipText(day.date, day.count)}
                                    />
                                    {/* Tooltip - hidden on mobile */}
                                    <div className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10 shadow-lg">
                                      {getTooltipText(day.date, day.count)}
                                    </div>
                                  </>
                                ) : (
                                  <div className="w-2.5 h-2.5 md:w-full md:aspect-square" />
                                )}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Legend */}
                    <div className="flex items-center gap-2 md:gap-2 mt-4 md:mt-4 text-[10px] md:text-xs text-gray-600 font-medium">
                      <span>Less</span>
                      <div className="flex gap-1 md:gap-1">
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-sm bg-gray-200 shadow-sm"></div>
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-sm bg-green-200 shadow-sm"></div>
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-sm bg-green-400 shadow-sm"></div>
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-sm bg-green-600 shadow-sm"></div>
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-sm bg-green-700 shadow-sm"></div>
                      </div>
                      <span>More</span>
                    </div>
                  </div>
                </div>
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
                href={`https://github.com/${GITHUB_CONFIG.username}`}
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
