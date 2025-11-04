import { createApp } from 'vike-react/createApp'

// Hydrate immediately for better FCP/LCP
const app = createApp()
app.hydrate()

// Defer non-critical operations
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    // Initialize analytics, tracking, or other non-critical features here
  })
} else {
  setTimeout(() => {
    // Fallback for browsers without requestIdleCallback
  }, 1)
}
