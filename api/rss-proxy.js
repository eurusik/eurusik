export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  try {
    const { url } = req.query

    if (!url) {
      return res.status(400).json({ error: 'URL parameter is required' })
    }

    // Fetch the RSS feed
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/rss+xml, application/xml, text/xml'
      }
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const xmlText = await response.text()
    
    // Return raw XML
    res.setHeader('Content-Type', 'application/xml')
    res.status(200).send(xmlText)
  } catch (error) {
    console.error('RSS proxy error:', error)
    res.status(500).json({ error: error.message })
  }
}
