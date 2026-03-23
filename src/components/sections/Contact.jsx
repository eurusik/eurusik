import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react'
import { useTranslation } from '../../contexts/LanguageContext'
import SectionLabel from '../layout/SectionLabel'

const Contact = () => {
  const { t, locale } = useTranslation()

  const contactInfo = [
    { icon: <Mail size={20} />, label: t('contact.email'), value: "john.rusakov@gmail.com", link: "mailto:john.rusakov@gmail.com" },
    { icon: <Github size={20} />, label: t('contact.github'), value: "github.com/eurusik", link: "https://github.com/eurusik" },
    { icon: <Linkedin size={20} />, label: t('contact.linkedin'), value: "linkedin.com/in/eugene-rusakov", link: "https://www.linkedin.com/in/eugene-rusakov-27606352/" },
    { icon: <MapPin size={20} />, label: t('contact.location'), value: t('contact.locationValue'), link: null }
  ]

  return (
    <section id="contact" className="py-24 px-6 bg-[#0A0A0B] border-t border-[#2A2A2E]" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <SectionLabel number="08" label={locale === 'uk' ? 'КОНТАКТИ' : 'CONTACT'} />
          <h2 id="contact-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-[#EDEDEF]">
            {t('contact.title')}
          </h2>
          <p className="text-base text-[#A0A0A8]">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
        >
          {contactInfo.map((contact, index) => {
            const content = (
              <div className="flex items-center gap-4 py-3 group">
                <span className="text-[#6B6B73] group-hover:text-emerald-500 transition-colors duration-200">{contact.icon}</span>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.15em] mb-0.5 text-[#6B6B73]">{contact.label}</p>
                  <p className="text-sm font-medium text-[#EDEDEF] group-hover:text-emerald-500 transition-colors duration-200">{contact.value}</p>
                </div>
              </div>
            )
            return contact.link ? (
              <a key={index} href={contact.link} target={contact.link.startsWith('mailto') ? undefined : '_blank'} rel={contact.link.startsWith('mailto') ? undefined : 'noopener noreferrer'} className="block">
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a href="mailto:john.rusakov@gmail.com?subject=Let's Work Together&body=Hi Eugene, I'd like to discuss a project with you." className="btn-accent inline-flex items-center gap-3 text-lg px-10 py-4">
            <Send size={20} />
            {t('contact.hireMe')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
