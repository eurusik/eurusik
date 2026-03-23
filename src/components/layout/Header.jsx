import { Github, Linkedin } from 'lucide-react'
import { MediumIcon, ThreadsIcon, DOUIcon } from '../ui/icons'
import LanguageSwitcher from '../ui/LanguageSwitcher'
import { SOCIAL_LINKS } from '../../config'
import { useScrolled } from '../../hooks'

const Header = () => {
  const scrolled = useScrolled(50)

  const getIcon = (iconName, size = 18) => {
    const iconMap = {
      github: <Github size={size} />,
      linkedin: <Linkedin size={size} />,
      medium: <MediumIcon size={size} />,
      threads: <ThreadsIcon size={size} />,
      dou: <DOUIcon size={size} />
    }
    return iconMap[iconName]
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

          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-4 flex-shrink-0">
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
                  {getIcon(link.icon)}
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
