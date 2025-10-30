import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, Calendar } from 'lucide-react'
import { MediumIcon, DOUIcon } from '../ui/icons'
import { MEDIUM_CONFIG } from '../../config'
import { useMediumArticles, useDOUArticles } from '../../hooks'
import { useTranslation } from '../../contexts/LanguageContext'

const Blog = () => {
  const { t } = useTranslation()
  const { articles: mediumArticles, loading: mediumLoading } = useMediumArticles()
  const { articles: douArticles, loading: douLoading } = useDOUArticles()
  const [imageErrors, setImageErrors] = useState({})

  const loading = mediumLoading || douLoading
  // Combine articles from both sources (DOU first, then Medium)
  const articles = [...douArticles, ...mediumArticles]

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }))
  }

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30" aria-labelledby="blog-heading">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="blog-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4 font-heading">
            {t('blog.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Blog articles">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
              >
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative h-48 overflow-hidden">
                    {article.thumbnail && article.thumbnail !== 'DOU_LOGO' && !imageErrors[index] ? (
                      <>
                        <img
                          src={article.thumbnail}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-300"
                          onError={() => handleImageError(index)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </>
                    ) : article.thumbnail === 'DOU_LOGO' ? (
                      <div className="w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center transition-transform duration-300">
                        <DOUIcon size={64} className="text-white" />
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center transition-transform duration-300">
                        <BookOpen size={48} className="text-white/80" />
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    {/* Source badge */}
                    {article.source && (
                      <div className="mb-3">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full ${
                          article.source === 'DOU' 
                            ? 'bg-orange-100 text-orange-600' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {article.source === 'DOU' ? '📰' : '✍️'} {article.source}
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar size={16} />
                      <span>{article.pubDate}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.description}
                    </p>

                    {article.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.categories.map((cat, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-2 text-blue-600 font-semibold transition-all">
                      <span>{t('blog.readMore')}</span>
                      <ExternalLink size={16} className="transition-transform" />
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        )}

        {!loading && articles.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href={MEDIUM_CONFIG.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <MediumIcon size={20} />
              <span>{t('blog.viewAll')}</span>
              <ExternalLink size={16} />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Blog
