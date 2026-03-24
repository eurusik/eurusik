import { useState, useCallback } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import SocialIcon from '../ui/SocialIcon'
import LanguageSwitcher from '../ui/LanguageSwitcher'
import { SOCIAL_LINKS } from '../../config'
import { useScrolled, useActiveSection } from '../../hooks'
import { useTranslation } from '../../contexts/LanguageContext'

const NAV_LINKS = [
  { labelKey: 'nav.about', href: '#about' },
  { labelKey: 'nav.experience', href: '#experience' },
  { labelKey: 'nav.skills', href: '#skills' },
  { labelKey: 'nav.blog', href: '#blog' },
  { labelKey: 'nav.contact', href: '#contact' },
]

const Header = () => {
  const scrolled = useScrolled(50)
  const activeSection = useActiveSection()
  const { t } = useTranslation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 56
    window.scrollTo({ top, behavior: 'smooth' })
    setMobileOpen(false)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'backdrop-blur-md shadow-lg bg-[#0A0A0B]/85 border-b border-[#2A2A2E]' : 'border-b border-transparent'
        }`}
      >
        <nav className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex-1 min-w-0 mr-2">
              <a href="#" className="font-mono text-base sm:text-lg font-medium text-[#EDEDEF] transition-colors duration-200">
                eugene.
              </a>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-5 lg:gap-6">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace('#', '')
                const isActive = activeSection === sectionId
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-xs font-medium transition-colors duration-200 ${
                      isActive ? 'text-emerald-500' : 'text-[#6B6B73] hover:text-[#EDEDEF]'
                    }`}
                  >
                    {t(link.labelKey)}
                  </a>
                )
              })}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-4 flex-shrink-0 ml-6">
              <LanguageSwitcher />
              <div className="hidden md:flex items-center gap-4 lg:gap-5 ml-2">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B6B73] hover:text-emerald-500 transition-colors duration-200"
                    aria-label={link.name}
                    title={link.name}
                  >
                    <SocialIcon name={link.icon} />
                  </a>
                ))}
              </div>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 text-[#A0A0A8] hover:text-[#EDEDEF] transition-colors"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[#0A0A0B]/90 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu */}
            <m.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="relative pt-20 px-8 pb-8"
            >
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const sectionId = link.href.replace('#', '')
                  const isActive = activeSection === sectionId
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`py-3 text-lg font-medium transition-colors duration-200 border-b border-[#2A2A2E] ${
                        isActive ? 'text-emerald-500' : 'text-[#A0A0A8]'
                      }`}
                    >
                      {t(link.labelKey)}
                    </a>
                  )
                })}
              </div>

              {/* Social links */}
              <div className="flex items-center gap-5 mt-8">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B6B73] hover:text-emerald-500 transition-colors duration-200"
                    aria-label={link.name}
                  >
                    <SocialIcon name={link.icon} />
                  </a>
                ))}
              </div>
            </m.nav>
          </m.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
