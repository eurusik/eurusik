import { useEffect, useRef, useState } from 'react'

const CustomCursor = () => {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const mouse = useRef({ x: -100, y: -100 })
  const ring = useRef({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)
  const animRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if ('ontouchstart' in window) return

    const handleMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    const handleOver = (e) => {
      const target = e.target.closest('a, button, [role="button"], input, textarea, select')
      setHovering(!!target)
    }

    const animate = () => {
      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px)`
      }

      // Ring follows with delay (lerp)
      ring.current.x += (mouse.current.x - ring.current.x) * 0.15
      ring.current.y += (mouse.current.y - ring.current.y) * 0.15

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) scale(${hovering ? 1.8 : 1})`
      }

      animRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    window.addEventListener('mouseover', handleOver, { passive: true })
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleOver)
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [hovering])

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden lg:block"
        style={{
          width: 6,
          height: 6,
          marginLeft: -3,
          marginTop: -3,
          borderRadius: '50%',
          backgroundColor: '#10B981',
          transition: 'width 0.2s, height 0.2s, margin 0.2s',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none hidden lg:block"
        style={{
          width: 36,
          height: 36,
          marginLeft: -18,
          marginTop: -18,
          borderRadius: '50%',
          border: '1.5px solid rgba(16, 185, 129, 0.4)',
          transition: 'transform 0.15s ease-out, border-color 0.2s',
          borderColor: hovering ? 'rgba(16, 185, 129, 0.8)' : 'rgba(16, 185, 129, 0.3)',
        }}
      />
      {/* Hide default cursor on desktop */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 1024px) {
          *, *::before, *::after { cursor: none !important; }
        }
      `}} />
    </>
  )
}

export default CustomCursor
