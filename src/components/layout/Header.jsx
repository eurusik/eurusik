import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'
import { MediumIcon, ThreadsIcon, DOUIcon } from '../ui/icons'
import LanguageSwitcher from '../ui/LanguageSwitcher'
import { SOCIAL_LINKS, SITE_CONFIG } from '../../config'
import { useScrolled } from '../../hooks'

const Header = () => {
  const scrolled = useScrolled(50)
  
  const getIcon = (iconName, size = 20) => {
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
    <motion.header
      initial={false}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled 
          ? 'bg-white/80 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 min-w-0 mr-2"
          >
            <a 
              href="#" 
              className={`text-lg sm:text-xl md:text-2xl font-bold font-heading transition-colors duration-300 whitespace-nowrap overflow-hidden text-ellipsis block ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              {SITE_CONFIG.name}
            </a>
          </motion.div>

          {/* Social Links & Language Switcher */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-1 sm:gap-1.5 md:gap-4 flex-shrink-0"
          >
            {/* Language Switcher */}
            <div className="flex-shrink-0">
              <LanguageSwitcher scrolled={scrolled} />
            </div>
            
            {/* Social Links - Hidden on mobile, visible on tablet+ */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              {SOCIAL_LINKS.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 hover:scale-110 ${
                    scrolled ? 'text-gray-600' : 'text-white/90'
                  } ${link.color}`}
                  aria-label={link.name}
                  title={link.name}
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  )
}

export default Header
