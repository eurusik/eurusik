import { useState, useEffect } from 'react'
import { useTranslation } from '../../contexts/LanguageContext'

const Clippy = () => {
  const { locale } = useTranslation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (sessionStorage.getItem('clippy-dismissed')) return

    const timer = setTimeout(() => setVisible(true), 30000)
    return () => clearTimeout(timer)
  }, [])

  const dismiss = () => {
    setVisible(false)
    sessionStorage.setItem('clippy-dismissed', '1')
  }

  const hire = () => {
    dismiss()
    const el = document.getElementById('contact')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 56
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in" style={{ fontFamily: '"MS Sans Serif", "Microsoft Sans Serif", Tahoma, sans-serif' }}>
      {/* Speech bubble */}
      <div
        className="mb-2 p-3 max-w-[280px] text-[13px] leading-[1.4]"
        style={{
          background: '#FFFFCC',
          color: '#000',
          border: '1px solid #000',
          borderRadius: '8px 8px 8px 0',
          boxShadow: '2px 2px 0 rgba(0,0,0,0.3)',
        }}
      >
        <button
          onClick={dismiss}
          className="float-right ml-2 -mt-1 text-[16px] leading-none hover:text-red-600"
          style={{ color: '#666' }}
          aria-label="Close"
        >
          x
        </button>
        <p className="mb-2">
          {locale === 'uk'
            ? 'Схоже ви шукаєте Senior Frontend Developer. Потрібна допомога?'
            : 'It looks like you\'re looking for a Senior Frontend Developer. Need help?'}
        </p>
        <div className="flex gap-2">
          <button
            onClick={hire}
            className="px-3 py-1 text-[12px]"
            style={{
              background: '#C0C0C0',
              border: '2px outset #DFDFDF',
              cursor: 'pointer',
            }}
            onMouseDown={(e) => e.currentTarget.style.borderStyle = 'inset'}
            onMouseUp={(e) => e.currentTarget.style.borderStyle = 'outset'}
          >
            {locale === 'uk' ? 'Найняти' : 'Hire'}
          </button>
          <button
            onClick={dismiss}
            className="px-3 py-1 text-[12px]"
            style={{
              background: '#C0C0C0',
              border: '2px outset #DFDFDF',
              cursor: 'pointer',
            }}
            onMouseDown={(e) => e.currentTarget.style.borderStyle = 'inset'}
            onMouseUp={(e) => e.currentTarget.style.borderStyle = 'outset'}
          >
            {locale === 'uk' ? 'Ні, дякую' : 'No thanks'}
          </button>
        </div>
      </div>

      {/* Clippy */}
      <div className="text-[48px] leading-none select-none cursor-pointer" onClick={hire}>
        📎
      </div>
    </div>
  )
}

export default Clippy
