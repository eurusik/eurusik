import { motion } from 'framer-motion'
import { Download, Mail, ArrowDown } from 'lucide-react'
import { useTranslation } from '../../contexts/LanguageContext'

const Hero = () => {
  const { t } = useTranslation()
  
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 sm:px-6 lg:px-8 relative overflow-hidden" aria-label="Hero Section" style={{ minHeight: '100vh' }}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 animated-gradient opacity-90"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8 relative"
          >
            {/* Animated gradient border */}
            <motion.div 
              className="w-full h-full rounded-full p-1 shadow-2xl relative"
              animate={{
                background: [
                  'linear-gradient(0deg, #667eea, #764ba2)',
                  'linear-gradient(120deg, #764ba2, #f093fb)',
                  'linear-gradient(240deg, #f093fb, #4facfe)',
                  'linear-gradient(360deg, #4facfe, #667eea)',
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              <picture>
                <source 
                  type="image/webp"
                  srcSet="/avatar-160.webp 160w, /avatar-320.webp 320w"
                  sizes="(max-width: 640px) 128px, 160px"
                />
                <img 
                  src="/avatar-160.jpg" 
                  srcSet="/avatar-160.jpg 160w, /avatar-320.jpg 320w"
                  sizes="(max-width: 640px) 128px, 160px"
                  alt="Eugene Rusakov - Senior Frontend Developer"
                  className="w-full h-full rounded-full object-cover"
                  width="160"
                  height="160"
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                />
              </picture>
            </motion.div>
            {/* Animated glow */}
            <motion.div 
              className="absolute inset-0 rounded-full blur-xl"
              animate={{
                background: [
                  'radial-gradient(circle, rgba(102, 126, 234, 0.3), transparent)',
                  'radial-gradient(circle, rgba(118, 75, 162, 0.3), transparent)',
                  'radial-gradient(circle, rgba(240, 147, 251, 0.3), transparent)',
                  'radial-gradient(circle, rgba(79, 172, 254, 0.3), transparent)',
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          </motion.div>

          {/* Main Heading - H1 for SEO */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            {t('hero.name')}
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-4 font-light"
          >
            {t('hero.title')}
          </motion.p>

          {/* Subtitle with keywords */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl text-white/80 mb-12 font-light max-w-2xl mx-auto"
          >
            {t('hero.subtitle')}
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4"
          >
            <Mail size={20} />
            {t('hero.contactMe')}
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto btn-secondary flex items-center justify-center gap-2 text-lg px-8 py-4"
          >
            <Download size={20} />
            {t('hero.downloadCV')}
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/70 cursor-pointer"
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
