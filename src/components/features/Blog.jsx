import { useState } from 'react'
import { m } from 'framer-motion'
import { BookOpen, ExternalLink, Calendar } from 'lucide-react'
import { MediumIcon, DOUIcon } from '../ui/icons'
import { MEDIUM_CONFIG, DOU_CONFIG } from '../../config'
import { useMediumArticles, useDOUArticles } from '../../hooks'
import { useTranslation } from '../../contexts/LanguageContext'
import SectionLabel from '../layout/SectionLabel'

const Blog = () => {
  const { t, locale } = useTranslation()
  const { articles: mediumArticles, loading: mediumLoading } = useMediumArticles()
  const { articles: douArticles, loading: douLoading } = useDOUArticles()
  const [imageErrors, setImageErrors] = useState({})

  const loading = mediumLoading || douLoading

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }))
  }

  const renderArticle = (article, index) => (
    <m.article
      key={index}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="card-elevated overflow-hidden group cursor-pointer"
    >
      <a href={article.link} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative h-48 overflow-hidden -m-6 mb-0">
          {article.thumbnail && article.thumbnail !== 'DOU_LOGO' && !imageErrors[index] ? (
            <>
              <img
                src={article.thumbnail}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                width="400"
                height="192"
                loading="lazy"
                decoding="async"
                onError={() => handleImageError(index)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1D] to-transparent" />
            </>
          ) : article.thumbnail === 'DOU_LOGO' ? (
            <div className="w-full h-full flex items-center justify-center bg-[#232326]">
              <DOUIcon size={48} className="text-[#6B6B73] opacity-30" />
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#232326]">
              <BookOpen size={48} className="text-[#6B6B73] opacity-30" />
            </div>
          )}
          {article.source && (
            <div className="absolute top-3 left-3">
              <span className="tag-source inline-flex items-center gap-1">
                {article.source === 'DOU' ? <DOUIcon size={12} /> : <MediumIcon size={12} />}
                {article.source}
              </span>
            </div>
          )}
        </div>

        <div className="pt-5">
          <div className="flex items-center gap-2 text-xs font-mono mb-3 text-[#6B6B73]">
            <Calendar size={12} />
            <span>{article.pubDate}</span>
          </div>

          <h3 className="text-lg font-semibold mb-3 line-clamp-2 text-[#EDEDEF] group-hover:text-emerald-400 transition-colors duration-200">
            {article.title}
          </h3>

          <p className="text-sm mb-4 line-clamp-2 text-[#A0A0A8]">
            {article.description}
          </p>

          {article.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {article.categories.slice(0, 3).map((cat, idx) => (
                <span key={idx} className="tag-default">{cat}</span>
              ))}
            </div>
          )}

          <span className="btn-text text-sm inline-flex items-center gap-1">
            {t('blog.readMore')}
            <ExternalLink size={14} />
          </span>
        </div>
      </a>
    </m.article>
  )

  return (
    <section id="blog" className="py-24 px-6 min-h-section bg-[#0A0A0B] border-t border-[#2A2A2E]" aria-labelledby="blog-heading">
      <div className="max-w-6xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <SectionLabel number="05" label={locale === 'uk' ? 'СТАТТІ' : 'ARTICLES'} />
          <h2 id="blog-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#EDEDEF]">
            {t('blog.title')}
          </h2>
        </m.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-8 h-8 rounded-full animate-spin border-2 border-[#2A2A2E] border-t-emerald-500" />
          </div>
        ) : (
          <>
            {douArticles.length > 0 && (
              <div className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="DOU articles">
                  {douArticles.map((article, index) => renderArticle(article, `dou-${index}`))}
                </div>
                <div className="text-center mt-8">
                  <a
                    href={DOU_CONFIG.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost inline-flex items-center gap-2 text-sm"
                  >
                    <DOUIcon size={16} />
                    {t('blog.viewAllDOU')}
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            )}

            {mediumArticles.length > 0 && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Medium articles">
                  {mediumArticles.map((article, index) => renderArticle(article, `medium-${index}`))}
                </div>
                <div className="text-center mt-8">
                  <a
                    href={MEDIUM_CONFIG.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost inline-flex items-center gap-2 text-sm"
                  >
                    <MediumIcon size={16} />
                    {t('blog.viewAll')}
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default Blog
