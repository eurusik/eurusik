import { useRef, useEffect, useState, useCallback } from 'react'
import { m, useScroll, useTransform } from 'framer-motion'
import { Mail } from 'lucide-react'
import { useTranslation } from '../../contexts/LanguageContext'
import CodeBlock from '../ui/CodeBlock'
import HomelabBadge from '../ui/HomelabBadge'

const Hero = () => {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const glowRef = useRef(null)
  const [showGlow, setShowGlow] = useState(false)

  // Parallax
  const { scrollY } = useScroll()
  const gridY = useTransform(scrollY, [0, 600], [0, 80])

  // Cursor glow
  const handleMouseMove = useCallback((e) => {
    if (!glowRef.current) return
    glowRef.current.style.left = e.clientX + 'px'
    glowRef.current.style.top = e.clientY + 'px'
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    setShowGlow(true)
  }, [])

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 56
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center justify-center px-6 sm:px-6 lg:px-8 relative overflow-hidden bg-[#0A0A0B]"
      aria-label="Hero Section"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => glowRef.current && (glowRef.current.style.opacity = '1')}
      onMouseLeave={() => glowRef.current && (glowRef.current.style.opacity = '0')}
    >
      {/* Parallax grid */}
      <m.div className="absolute inset-0 hero-grid" style={{ y: gridY }} />

      {/* Cursor glow */}
      {showGlow && (
        <div
          ref={glowRef}
          className="pointer-events-none fixed w-[300px] h-[300px] rounded-full opacity-0 transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2 z-0 hidden lg:block"
          style={{
            background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)',
          }}
        />
      )}

      <div className="relative z-10 w-full max-w-6xl mx-auto py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Availability status */}
            <div className="flex items-center gap-2 justify-center lg:justify-start mb-6">
              <span className="relative flex h-2 w-2">
                <span aria-hidden="true" className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-xs text-emerald-500">
                {t('hero.available')}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-[#EDEDEF] tracking-tight">
              {t('hero.name')}
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl font-light mb-5 text-[#A0A0A8] tracking-tight">
              {t('hero.title')}
            </p>

            <p className="text-base sm:text-lg mb-10 max-w-xl mx-auto lg:mx-0 text-[#6B6B73] leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <button
              onClick={scrollToContact}
              className="btn-accent flex items-center justify-center gap-2 text-base w-full sm:w-auto"
            >
              <Mail size={18} />
              {t('hero.contactMe')}
            </button>
          </m.div>

          {/* Right: Code Block */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[45%] flex-shrink-0"
          >
            <CodeBlock />
            <div className="flex justify-center lg:justify-start mt-4">
              <HomelabBadge />
            </div>
          </m.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
