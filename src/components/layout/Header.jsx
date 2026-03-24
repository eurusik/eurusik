import SocialIcon from '../ui/SocialIcon'
import LanguageSwitcher from '../ui/LanguageSwitcher'
import { SOCIAL_LINKS } from '../../config'
import { useScrolled } from '../../hooks'
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
  const { t } = useTranslation()

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 56
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md shadow-lg bg-[#0A0A0B]/85 border-b border-[#2A2A2E]' : 'border-b border-transparent'
      }`}
    >
      <nav className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex-1 min-w-0 mr-2">
            <a href="#" className="font-mono text-base sm:text-lg font-medium text-[#EDEDEF] transition-colors duration-200">
              eugene.
            </a>
          </div>

          <div className="hidden md:flex items-center gap-5 lg:gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-medium text-[#6B6B73] hover:text-[#EDEDEF] transition-colors"
              >
                {t(link.labelKey)}
              </a>
            ))}
          </div>

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
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
