import { motion } from 'framer-motion'
import { Github, GitBranch, GitCommit, GitPullRequest, Star, GitFork, Code } from 'lucide-react'
import { useGitHubActivity } from '../../hooks'
import { GITHUB_CONFIG } from '../../config'
import { useTranslation } from '../../contexts/LanguageContext'
import SectionLabel from '../layout/SectionLabel'

const GitHubActivity = () => {
  const { t, locale } = useTranslation()
  const { events, contributions, stats, contribStats, loading } = useGitHubActivity()

  const getEventIcon = (type) => {
    const icons = {
      'PushEvent': <GitCommit size={16} className="text-emerald-500" />,
      'PullRequestEvent': <GitPullRequest size={16} className="text-purple-400" />,
      'CreateEvent': <GitBranch size={16} className="text-blue-400" />,
      'WatchEvent': <Star size={16} className="text-yellow-400" />,
      'ForkEvent': <GitFork size={16} className="text-orange-400" />,
    }
    return icons[type] || <Code size={16} className="text-[#6B6B73]" />
  }

  const getEventDescription = (event) => {
    switch (event.type) {
      case 'PushEvent': {
        const commits = event.payload.commits?.length || 0
        if (commits === 0) return null
        return `${t('github.events.pushed')} ${commits} ${commits === 1 ? t('github.events.commit') : t('github.events.commits')}`
      }
      case 'PullRequestEvent': {
        const a = event.payload.action
        const text = a === 'opened' ? t('github.events.opened') : a === 'closed' ? t('github.events.closed') : a === 'merged' ? t('github.events.merged') : a?.charAt(0).toUpperCase() + a?.slice(1)
        return `${text} ${t('github.events.pullRequest')}`
      }
      case 'CreateEvent': {
        const r = event.payload.ref_type
        const text = r === 'branch' ? t('github.events.branch') : r === 'tag' ? t('github.events.tag') : r === 'repository' ? t('github.events.repository') : r
        return `${t('github.events.created')} ${text}`
      }
      case 'WatchEvent': return t('github.events.starred')
      case 'ForkEvent': return t('github.events.forked')
      case 'IssuesEvent': {
        const a = event.payload.action
        const text = a === 'opened' ? t('github.events.opened') : a === 'closed' ? t('github.events.closed') : a?.charAt(0).toUpperCase() + a?.slice(1)
        return `${text} ${t('github.events.issue')}`
      }
      default: return event.type.replace('Event', '')
    }
  }

  const formatDate = (date) => {
    const diff = Date.now() - date
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(hours / 24)
    if (hours < 1) return t('github.timeAgo.justNow')
    if (hours < 24) return `${hours}${t('github.timeAgo.hoursAgo')}`
    if (days < 7) return `${days}${t('github.timeAgo.daysAgo')}`
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  const getColor = (count) => {
    if (count === 0) return '#232326'
    if (count === 1) return 'rgba(16,185,129,0.2)'
    if (count <= 3) return 'rgba(16,185,129,0.4)'
    if (count <= 5) return 'rgba(16,185,129,0.65)'
    return '#10B981'
  }

  const groupByWeeks = (contribs) => {
    const weeks = []; let week = []
    contribs.forEach((day, i) => {
      const dow = new Date(day.date).getDay()
      if (i === 0 && dow !== 0) for (let j = 0; j < dow; j++) week.push(null)
      week.push(day)
      if (dow === 6 || i === contribs.length - 1) { weeks.push([...week]); week = [] }
    })
    return weeks
  }

  const weeks = groupByWeeks(contributions)
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

  return (
    <section id="github-activity" className="py-24 px-6 bg-[#111113] border-t border-[#2A2A2E]" aria-labelledby="github-heading">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true }} className="mb-12">
          <SectionLabel number="06" label="OPEN SOURCE" />
          <h2 id="github-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#EDEDEF]">{t('github.title')}</h2>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-8 h-8 rounded-full animate-spin border-2 border-[#2A2A2E] border-t-emerald-500" />
          </div>
        ) : (
          <>
            {/* Stats */}
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} viewport={{ once: true }} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0 mb-14">
              <div className="flex-1 sm:text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[#EDEDEF]">{stats.repos}</p>
                <p className="font-mono text-xs mt-1 text-[#6B6B73]">{t('github.stats.repos')}</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-[#2A2A2E]" />
              <div className="flex-1 sm:text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[#EDEDEF]">{contribStats.total}</p>
                <p className="font-mono text-xs mt-1 text-[#6B6B73]">{t('github.stats.yearContributions')}</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-[#2A2A2E]" />
              <div className="flex-1 sm:text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[#EDEDEF]">{contribStats.streak} <span className="text-lg font-normal text-[#6B6B73]">{t('github.stats.days')}</span></p>
                <p className="font-mono text-xs mt-1 text-[#6B6B73]">{t('github.stats.currentStreak')}</p>
              </div>
            </motion.div>

            {/* Activity */}
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }} className="mb-14">
              <h3 className="text-lg font-semibold mb-4 text-[#EDEDEF]">{t('github.recentActivity')}</h3>
              <div className="border-t border-[#2A2A2E]">
                {events.map((event) => {
                  const desc = getEventDescription(event)
                  if (!desc) return null
                  return (
                    <div key={event.id} className="flex items-center gap-3 py-3 text-sm border-b border-[#2A2A2E]">
                      <span className="flex-shrink-0">{getEventIcon(event.type)}</span>
                      <span className="text-[#EDEDEF]">{desc}</span>
                      <span className="font-mono text-xs text-[#6B6B73]">&mdash;</span>
                      <a href={`https://github.com/${event.repo}`} target="_blank" rel="noopener noreferrer" className="font-mono text-xs truncate text-emerald-500 hover:text-emerald-400 transition-colors">{event.repo}</a>
                      <span className="ml-auto font-mono text-xs flex-shrink-0 text-[#6B6B73]">{formatDate(event.createdAt)}</span>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            {/* Contribution Graph */}
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }} viewport={{ once: true }} className="mb-12">
              <h3 className="text-lg font-semibold mb-4 text-[#EDEDEF]">{t('github.contributionGraph')}</h3>
              <div className="card-surface p-4 md:p-6 overflow-hidden">
                <div className="w-full overflow-x-auto scrollbar-thin">
                  <div className="min-w-max md:min-w-0 md:w-full">
                    <div className="flex gap-1 mb-2 ml-7 md:ml-8">
                      {months.map((m, i) => <div key={m} className="text-[10px] md:text-xs font-mono w-9 md:flex-1 md:min-w-0 text-[#6B6B73]">{i % 2 === 0 ? m : ''}</div>)}
                    </div>
                    <div className="flex gap-1">
                      <div className="flex flex-col gap-1 text-[10px] md:text-xs font-mono mr-1 md:mr-2 text-[#6B6B73]">
                        <div className="h-2.5 md:h-3" /><div className="h-2.5 md:h-3">Mon</div><div className="h-2.5 md:h-3" /><div className="h-2.5 md:h-3">Wed</div><div className="h-2.5 md:h-3" /><div className="h-2.5 md:h-3">Fri</div><div className="h-2.5 md:h-3" />
                      </div>
                      <div className="flex gap-1 md:flex-1">
                        {weeks.map((week, wi) => (
                          <div key={wi} className="flex flex-col gap-1 md:flex-1">
                            {week.map((day, di) => (
                              <div key={`${wi}-${di}`}>
                                {day ? (
                                  <div className="w-2.5 h-2.5 md:w-full md:aspect-square rounded-sm hover:ring-1 hover:ring-emerald-400 cursor-pointer transition-all" style={{ backgroundColor: getColor(day.count) }} title={`${day.count} contribution${day.count !== 1 ? 's' : ''} on ${new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`} />
                                ) : <div className="w-2.5 h-2.5 md:w-full md:aspect-square" />}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-4 text-[10px] md:text-xs font-mono text-[#6B6B73]">
                      <span>{t('github.less')}</span>
                      <div className="flex gap-1">
                        {[0,1,2,4,6].map(c => <div key={c} className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-sm" style={{ backgroundColor: getColor(c) }} />)}
                      </div>
                      <span>{t('github.more')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="text-center">
              <a href={`https://github.com/${GITHUB_CONFIG.username}`} target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex items-center gap-2 text-sm">
                <Github size={18} />{t('github.viewProfile')}
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default GitHubActivity
