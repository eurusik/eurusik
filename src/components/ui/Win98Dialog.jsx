import { useState, useEffect, useRef, useCallback } from 'react'

const Win98Dialog = () => {
  const [visible, setVisible] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const dragging = useRef(false)
  const offset = useRef({ x: 0, y: 0 })
  const idleTimer = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (sessionStorage.getItem('win98-dismissed')) return

    const resetIdle = () => {
      if (idleTimer.current) clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => setVisible(true), 60000)
    }

    // Center on show
    setPos({
      x: Math.max(0, (window.innerWidth - 340) / 2),
      y: Math.max(0, (window.innerHeight - 200) / 2),
    })

    resetIdle()
    window.addEventListener('mousemove', resetIdle, { passive: true })
    window.addEventListener('keydown', resetIdle, { passive: true })
    window.addEventListener('scroll', resetIdle, { passive: true })

    return () => {
      if (idleTimer.current) clearTimeout(idleTimer.current)
      window.removeEventListener('mousemove', resetIdle)
      window.removeEventListener('keydown', resetIdle)
      window.removeEventListener('scroll', resetIdle)
    }
  }, [])

  const hire = useCallback(() => {
    setVisible(false)
    sessionStorage.setItem('win98-dismissed', '1')
    const el = document.getElementById('contact')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 56
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [])

  const handleMouseDown = useCallback((e) => {
    dragging.current = true
    offset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y }
  }, [pos])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!dragging.current) return
      setPos({ x: e.clientX - offset.current.x, y: e.clientY - offset.current.y })
    }
    const handleMouseUp = () => { dragging.current = false }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  if (!visible) return null

  const btnStyle = {
    background: '#C0C0C0',
    border: '2px outset #DFDFDF',
    cursor: 'pointer',
    padding: '2px 16px',
    fontSize: '12px',
    fontFamily: '"MS Sans Serif", Tahoma, sans-serif',
    minWidth: '70px',
    color: '#000',
  }

  return (
    <div
      className="fixed z-[60]"
      style={{
        left: pos.x,
        top: pos.y,
        fontFamily: '"MS Sans Serif", "Microsoft Sans Serif", Tahoma, sans-serif',
      }}
    >
      <div
        style={{
          width: 340,
          background: '#C0C0C0',
          border: '2px outset #DFDFDF',
          boxShadow: '4px 4px 0 rgba(0,0,0,0.4)',
        }}
      >
        {/* Title bar */}
        <div
          onMouseDown={handleMouseDown}
          className="flex items-center justify-between px-1 py-0.5 cursor-move select-none"
          style={{ background: 'linear-gradient(90deg, #000080, #1084D0)', color: '#fff' }}
        >
          <span className="text-[12px] font-bold px-1">{'\u26A0'} eurusik.exe</span>
          <button
            onClick={hire}
            className="px-1 text-[11px] leading-none"
            style={{ background: '#C0C0C0', border: '1px outset #DFDFDF', color: '#000', minWidth: '16px' }}
          >
            X
          </button>
        </div>

        {/* Body */}
        <div className="p-4 flex gap-3 items-start">
          <span className="text-[32px] leading-none select-none">{'\u26A0'}</span>
          <p className="text-[13px] leading-[1.4]" style={{ color: '#000' }}>
            Are you sure you want to leave without hiring this developer?
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-2 pb-4 px-4">
          <button
            style={btnStyle}
            onClick={hire}
            onMouseDown={(e) => e.currentTarget.style.borderStyle = 'inset'}
            onMouseUp={(e) => e.currentTarget.style.borderStyle = 'outset'}
          >
            No
          </button>
          <button
            style={btnStyle}
            onClick={hire}
            onMouseDown={(e) => e.currentTarget.style.borderStyle = 'inset'}
            onMouseUp={(e) => e.currentTarget.style.borderStyle = 'outset'}
          >
            No
          </button>
          <button
            style={{ ...btnStyle, fontWeight: 'bold' }}
            onClick={hire}
            onMouseDown={(e) => e.currentTarget.style.borderStyle = 'inset'}
            onMouseUp={(e) => e.currentTarget.style.borderStyle = 'outset'}
          >
            Hire
          </button>
        </div>
      </div>
    </div>
  )
}

export default Win98Dialog
