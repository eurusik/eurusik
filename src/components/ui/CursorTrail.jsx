import { useEffect, useRef } from 'react'

const CursorTrail = () => {
  const canvasRef = useRef(null)
  const particles = useRef([])
  const mouse = useRef({ x: -100, y: -100 })
  const animRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    // Skip on touch devices
    if ('ontouchstart' in window) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const handleMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY

      // Spawn particles on movement
      for (let i = 0; i < 2; i++) {
        particles.current.push({
          x: e.clientX + (Math.random() - 0.5) * 4,
          y: e.clientY + (Math.random() - 0.5) * 4,
          size: Math.random() * 2 + 1,
          life: 1,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        })
      }

      // Cap particles
      if (particles.current.length > 80) {
        particles.current = particles.current.slice(-80)
      }
    }

    window.addEventListener('mousemove', handleMove, { passive: true })

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.current = particles.current.filter(p => {
        p.life -= 0.025
        p.x += p.vx
        p.y += p.vy
        p.size *= 0.98

        if (p.life <= 0) return false

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(16, 185, 129, ${p.life * 0.5})`
        ctx.fill()

        return true
      })

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMove)
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none hidden lg:block"
      aria-hidden="true"
    />
  )
}

export default CursorTrail
