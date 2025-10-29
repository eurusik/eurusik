import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, Calendar } from 'lucide-react'

const Blog = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [imageErrors, setImageErrors] = useState({})

  useEffect(() => {
    fetchMediumArticles()
  }, [])

  const fetchMediumArticles = async () => {
    try {
      const RSS_URL = 'https://medium.com/feed/@eurusik'
      const response = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`
      )
      
      const data = await response.json()
      
      if (data.status === 'ok') {
        const formattedArticles = data.items.slice(0, 3).map(item => ({
          title: item.title,
          link: item.link,
          pubDate: new Date(item.pubDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          }),
          description: item.description
            .replace(/<[^>]+>/g, '')
            .substring(0, 120) + '...',
          thumbnail: item.thumbnail || extractImageFromContent(item.content),
          categories: item.categories?.slice(0, 2) || []
        }))
        
        setArticles(formattedArticles)
      }
    } catch (err) {
      console.error('Error fetching Medium articles:', err)
    } finally {
      setLoading(false)
    }
  }

  const extractImageFromContent = (content) => {
    const imgMatch = content?.match(/<img[^>]+src="([^"'>]+)"/);
    const imgUrl = imgMatch ? imgMatch[1] : null;
    if (imgUrl && !imgUrl.includes('stat?event') && !imgUrl.includes('&amp;')) {
      return imgUrl;
    }
    return null;
  }

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
          <h2 id="blog-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4 font-poppins">
            Latest Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughts and insights on frontend development
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
                    {article.thumbnail && !imageErrors[index] ? (
                      <>
                        <img
                          src={article.thumbnail}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-300"
                          onError={() => handleImageError(index)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center transition-transform duration-300">
                        <BookOpen size={48} className="text-white/80" />
                      </div>
                    )}
                  </div>

                  <div className="p-6">
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
                      <span>Read more</span>
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
              href="https://medium.com/@eurusik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <BookOpen size={20} />
              <span>View All Articles on Medium</span>
              <ExternalLink size={16} />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Blog
