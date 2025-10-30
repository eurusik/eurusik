import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())

// API endpoint for RSS proxy
app.get('/api/rss-proxy', async (req, res) => {
  try {
    const { url } = req.query

    if (!url) {
      return res.status(400).json({ error: 'URL parameter is required' })
    }

    console.log('Proxying RSS feed:', url)

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
    
    res.setHeader('Content-Type', 'application/xml')
    res.send(xmlText)
  } catch (error) {
    console.error('RSS proxy error:', error)
    res.status(500).json({ error: error.message })
  }
})

// Serve static files from dist/client
app.use(express.static(path.join(__dirname, 'dist/client')))

// Handle client-side routing - return index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/client/index.html'))
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`)
  console.log(`📡 API available at http://0.0.0.0:${PORT}/api`)
  console.log(`🌐 Static files served from dist/client`)
})
