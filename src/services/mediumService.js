import { MEDIUM_CONFIG } from '../config'

/**
 * Fetch articles from Medium RSS feed
 * @param {number} limit - Number of articles to fetch
 * @returns {Promise<Array>} Array of formatted articles
 */
export const fetchMediumArticles = async (limit = MEDIUM_CONFIG.articlesLimit) => {
  try {
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(MEDIUM_CONFIG.rssUrl)}`
    )
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    
    if (data.status !== 'ok') {
      throw new Error('Failed to fetch Medium articles')
    }
    
    const formattedArticles = data.items.slice(0, limit).map(item => ({
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
    
    return formattedArticles
  } catch (error) {
    console.error('Error fetching Medium articles:', error)
    throw error
  }
}

/**
 * Extract image URL from HTML content
 * @param {string} content - HTML content
 * @returns {string|null} Image URL or null
 */
const extractImageFromContent = (content) => {
  const imgMatch = content?.match(/<img[^>]+src="([^"'>]+)"/);
  const imgUrl = imgMatch ? imgMatch[1] : null;
  if (imgUrl && !imgUrl.includes('stat?event') && !imgUrl.includes('&amp;')) {
    return imgUrl;
  }
  return null;
}
