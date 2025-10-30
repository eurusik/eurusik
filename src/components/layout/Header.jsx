import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'
import { MediumIcon, ThreadsIcon, DOUIcon } from '../ui/icons'
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a 
              href="#" 
              className={`text-xl sm:text-2xl font-bold font-poppins transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              {SITE_CONFIG.name}
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-4 sm:gap-6"
          >
            {SOCIAL_LINKS.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`transition-all duration-300 ${
                  scrolled ? 'text-gray-600' : 'text-white/90'
                } ${link.color}`}
                aria-label={link.name}
                title={link.name}
              >
                {getIcon(link.icon)}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </nav>
    </motion.header>
  )
}

export default Header
