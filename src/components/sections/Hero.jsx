import { m, useScroll, useTransform } from 'framer-motion'
import { Mail } from 'lucide-react'
import { useTranslation } from '../../contexts/LanguageContext'
import CodeBlock from '../ui/CodeBlock'
import HomelabBadge from '../ui/HomelabBadge'

const Hero = () => {
  const { t } = useTranslation()

  const { scrollY } = useScroll()
  const gridY = useTransform(scrollY, [0, 600], [0, 80])

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 56
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 sm:px-6 lg:px-8 relative overflow-hidden bg-[#0A0A0B]"
      aria-label="Hero Section"
    >
      {/* Parallax grid */}
      <m.div className="absolute inset-0 hero-grid" style={{ y: gridY }} />

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
