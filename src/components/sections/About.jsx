import { m } from 'framer-motion'
import { useTranslation } from '../../contexts/LanguageContext'
import SectionLabel from '../layout/SectionLabel'

const About = () => {
  const { t, locale } = useTranslation()

  const stats = [
    { value: '11+', label: locale === 'uk' ? 'років досвіду' : 'years experience' },
    { value: '5+', label: locale === 'uk' ? 'компаній' : 'companies' },
    { value: '20+', label: locale === 'uk' ? 'проєктів' : 'projects shipped' },
  ]

  return (
    <section id="about" className="py-24 px-6 bg-[#111113] border-t border-[#2A2A2E]">
      <div className="max-w-4xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <SectionLabel number="01" label="ABOUT" />

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <p className="text-lg sm:text-xl lg:text-2xl font-light leading-[1.7] text-[#A0A0A8]">
                <span className="text-[#EDEDEF] font-medium">{t('about.experience')}</span>{' '}
                {t('about.description1')}{' '}
                <span className="text-[#EDEDEF] font-medium">{t('about.angularPrimitives')}</span>{' '}
                {t('about.description2')}{' '}
                <span className="text-[#EDEDEF] font-medium">{t('about.company')}</span>.{' '}
                {t('about.description3')}{' '}
                <span className="text-[#EDEDEF] font-medium">{t('about.angular')}</span>,{' '}
                <span className="text-[#EDEDEF] font-medium">{t('about.typescript')}</span>,{' '}
                <span className="text-[#EDEDEF] font-medium">{t('about.react')}</span>,{' '}
                {t('about.and')}{' '}
                <span className="text-[#EDEDEF] font-medium">{t('about.microfrontends')}</span>,{' '}
                {t('about.description4')}
              </p>
            </div>

            <div className="flex-shrink-0 mx-auto lg:mx-0">
              <div className="w-40 h-48 rounded-xl overflow-hidden relative border border-[#2A2A2E]">
                <picture>
                  <source type="image/webp" srcSet="/avatar-160.webp 160w, /avatar-320.webp 320w" sizes="160px" />
                  <img src="/avatar-160.jpg" srcSet="/avatar-160.jpg 160w, /avatar-320.jpg 320w" sizes="160px" alt="Eugene Rusakov" className="w-full h-full object-cover" width="160" height="192" loading="lazy" decoding="async" />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent" />
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0 mt-14 pt-10 border-t border-[#2A2A2E]">
            {stats.map((stat, i) => (
              <div key={i} className="flex-1 sm:text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[#EDEDEF] tracking-tight">{stat.value}</p>
                <p className="font-mono text-xs mt-1 text-[#6B6B73]">{stat.label}</p>
              </div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  )
}

export default About
