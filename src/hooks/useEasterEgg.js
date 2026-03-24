import { useEffect } from 'react'

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']

const ASCII_ART = `
                           _  _
  ___ _   _ _ __ _   _ ___(_)| | __
 / _ \\ | | | '__| | | / __| || |/ /
|  __/| |_| | |  | |_| \\__ \\ ||   <
 \\___| \\__,_|_|   \\__,_|___/_||_|\\_\\
`

const matrixRain = () => {
  const canvas = document.createElement('canvas')
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:99999;pointer-events:none;'
  document.body.appendChild(canvas)

  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const chars = '\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u30BF\u30C1\u30C4\u30C6\u30C80123456789'
  const fontSize = 14
  const columns = Math.floor(canvas.width / fontSize)
  const drops = Array(columns).fill(0).map(() => Math.random() * -50 | 0)

  let frame = 0
  const maxFrames = 240 // ~4 seconds at 60fps

  const draw = () => {
    ctx.fillStyle = 'rgba(10, 10, 11, 0.06)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.random() * chars.length | 0]
      const x = i * fontSize
      const y = drops[i] * fontSize

      // Head character brighter
      ctx.fillStyle = '#34D399'
      ctx.font = `${fontSize}px monospace`
      ctx.fillText(char, x, y)

      // Trail character dimmer
      if (drops[i] > 1) {
        ctx.fillStyle = 'rgba(16, 185, 129, 0.4)'
        const trailChar = chars[Math.random() * chars.length | 0]
        ctx.fillText(trailChar, x, (drops[i] - 1) * fontSize)
      }

      if (y > canvas.height && Math.random() > 0.98) {
        drops[i] = 0
      }
      drops[i]++
    }

    frame++
    if (frame < maxFrames) {
      requestAnimationFrame(draw)
    } else {
      // Fade out
      canvas.style.transition = 'opacity 0.5s'
      canvas.style.opacity = '0'
      setTimeout(() => canvas.remove(), 500)
      console.log('%c\uD83C\uDFAE Achievement Unlocked!', 'color: #10B981; font-size: 14px; font-weight: bold;')
    }
  }

  // First frame: clear to black
  ctx.fillStyle = '#0A0A0B'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  draw()
}

export const useEasterEgg = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    let pos = 0

    // ASCII art greeting
    console.log('%c' + ASCII_ART, 'color: #10B981; font-family: monospace; font-size: 14px; line-height: 1.2;')
    console.log('%cSenior Frontend Engineer %c// github.com/eurusik', 'color: #EDEDEF; font-family: monospace; font-size: 12px;', 'color: #10B981; font-family: monospace; font-size: 12px;')
    console.log('%cTry \u2191\u2191\u2193\u2193\u2190\u2192\u2190\u2192BA', 'color: #6B6B73; font-family: monospace; font-size: 11px;')

    const handler = (e) => {
      if (e.key === KONAMI[pos]) {
        pos++
        if (pos === KONAMI.length) {
          pos = 0
          matrixRain()
        }
      } else {
        pos = 0
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])
}
