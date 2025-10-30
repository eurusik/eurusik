import { motion } from 'framer-motion'
import { useTranslation } from '../../contexts/LanguageContext'

const About = () => {
  const { t } = useTranslation()
  
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="about-heading">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-8 font-heading">
            {t('about.title')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6 sm:p-8 md:p-12 text-center"
        >
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-inter">
            <span className="font-semibold text-blue-600">{t('about.experience')}</span> {t('about.description1')}{' '}
            <span className="font-semibold text-purple-600">{t('about.angularPrimitives')}</span>{' '}
            {t('about.description2')} <span className="font-semibold text-indigo-600">{t('about.company')}</span>. 
            {t('about.description3')} <span className="font-semibold">{t('about.angular')}</span>,{' '}
            <span className="font-semibold">{t('about.typescript')}</span>,{' '}
            <span className="font-semibold">{t('about.react')}</span>, {t('about.and')}{' '}
            <span className="font-semibold">{t('about.microfrontends')}</span>,{' '}
            {t('about.description4')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
