import { m } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import { useTranslation } from '../../contexts/LanguageContext'
import SectionLabel from '../layout/SectionLabel'

const Education = () => {
  const { t, locale } = useTranslation()

  return (
    <section id="education" className="py-24 px-6 bg-[#111113] border-t border-[#2A2A2E]" aria-labelledby="education-heading">
      <div className="max-w-4xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <SectionLabel number="04" label={locale === 'uk' ? 'ОСВІТА' : 'EDUCATION'} />
          <h2 id="education-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#EDEDEF] mb-10">
            {t('education.title')}
          </h2>

          {/* Degree + Certs in one flow */}
          <div className="space-y-6">
            {/* Degree */}
            <div className="flex items-start gap-3">
              <GraduationCap size={18} className="flex-shrink-0 mt-1 text-emerald-500" />
              <div>
                <p className="text-base font-medium text-[#EDEDEF]">{t('education.degree')}</p>
                <p className="text-sm text-[#A0A0A8]">
                  {t('education.institution')} <span className="font-mono text-xs text-[#6B6B73]">{t('education.period')}</span>
                </p>
              </div>
            </div>

            {/* Certs */}
            {[
              { title: "Node.js - Fundamentals and Application Architecture", meta: "Udemy, 2022" },
              { title: "Angular Crash Course", meta: "Udemy, 2022" },
              { title: "React Native - The Practical Guide", meta: "Udemy, 2022" },
            ].map((cert, i) => (
              <div key={i} className="flex items-start gap-3">
                <Award size={18} className="flex-shrink-0 mt-1 text-[#6B6B73]" />
                <div>
                  <p className="text-sm font-medium text-[#EDEDEF]">{cert.title}</p>
                  <p className="text-xs text-[#6B6B73]">{cert.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  )
}

export default Education
