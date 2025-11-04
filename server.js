import express from 'express'
import cors from 'cors'
import compression from 'compression'
import expressStaticGzip from 'express-static-gzip'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())

// Enable compression (gzip/deflate)
app.use(compression({
  threshold: 1024, // Only compress files larger than 1KB
  level: 6, // Compression level (0-9, 6 is balanced)
  filter: (req, res) => {
    if (req.headers['x-no-compression']) {
      return false
    }
    // Compress all text-based responses
    return compression.filter(req, res)
  }
}))

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

// Serve static files from dist/client with optimized caching
// Use pre-compressed .gz and .br files when available
app.use(expressStaticGzip(path.join(__dirname, 'dist/client'), {
  enableBrotli: true, // Serve .br files if available
  orderPreference: ['br', 'gz'], // Prefer brotli over gzip
  serveStatic: {
    maxAge: '1y', // Cache static assets for 1 year
    immutable: true, // Assets with hash in filename won't change
    etag: true, // Enable ETag for validation
    lastModified: true // Enable Last-Modified header
  }
}))

// Handle client-side routing - return index.html for all routes
app.get('*', (req, res) => {
  // Set shorter cache for HTML files (1 hour) for fresh content updates
  res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate')
  res.setHeader('ETag', 'W/"' + Date.now() + '"')
  res.sendFile(path.join(__dirname, 'dist/client/index.html'))
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`)
  console.log(`📡 API available at http://0.0.0.0:${PORT}/api`)
  console.log(`🌐 Static files served from dist/client`)
})
