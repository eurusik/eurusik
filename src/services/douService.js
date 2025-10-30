import { DOU_CONFIG } from '../config'

const parseRSSFeed = (xmlText) => {
  const parser = new DOMParser()
  const xmlDoc = parser.parseFromString(xmlText, 'text/xml')
  
  const parseError = xmlDoc.querySelector('parsererror')
  if (parseError) {
    throw new Error('XML parsing failed')
  }
  
  const items = xmlDoc.querySelectorAll('item')
  
  if (items.length === 0) {
    console.warn('No items found in DOU RSS')
    return []
  }
  
  return Array.from(items)
    .slice(0, DOU_CONFIG.articlesLimit)
    .map(item => {
      const title = item.querySelector('title')?.textContent || ''
      const link = item.querySelector('link')?.textContent || ''
      const pubDate = item.querySelector('pubDate')?.textContent || ''
      const description = item.querySelector('description')?.textContent || ''
      
      let thumbnail = null
      
      const enclosure = item.querySelector('enclosure[type^="image"]')
      if (enclosure) {
        thumbnail = enclosure.getAttribute('url')
      }
      
      if (!thumbnail) {
        const mediaContent = item.querySelector('content[medium="image"], thumbnail')
        if (mediaContent) {
          thumbnail = mediaContent.getAttribute('url')
        }
      }
      
      if (!thumbnail && description) {
        const imgMatch = description.match(/<img[^>]+src="([^"]+)"/)
        if (imgMatch && imgMatch[1]) {
          const imgUrl = imgMatch[1]
          if (imgUrl.includes('dou.ua') || imgUrl.includes('ain.ua')) {
            thumbnail = imgUrl
          }
        }
      }
      
      return {
        title,
        link,
        pubDate: pubDate ? new Date(pubDate).toLocaleDateString('uk-UA', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }) : '',
        description: description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
        categories: [],
        thumbnail: thumbnail || 'DOU_LOGO',
        source: 'DOU'
      }
    })
}

export const fetchDOUArticles = async () => {
  try {
    const proxyUrl = `/api/rss-proxy?url=${encodeURIComponent(DOU_CONFIG.rssUrl)}`
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000)
    
    const response = await fetch(proxyUrl, {
      signal: controller.signal
    })
    clearTimeout(timeoutId)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const xmlText = await response.text()
    return parseRSSFeed(xmlText)
  } catch (error) {
    console.error('Error fetching DOU articles:', error)
    return []
  }
}
