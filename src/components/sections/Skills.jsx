import { motion } from 'framer-motion'
import { useTranslation } from '../../contexts/LanguageContext'
import SectionLabel from '../layout/SectionLabel'

const Skills = () => {
  const { t, locale } = useTranslation()

  const skillGroups = [
    {
      label: locale === 'uk' ? 'Фреймворки' : 'Frameworks',
      skills: [
        { name: 'Angular', primary: true },
        { name: 'React', primary: true },

        { name: 'RxJS', primary: true },
        { name: 'Signals' },
      ]
    },
    {
      label: locale === 'uk' ? 'Мови' : 'Languages',
      skills: [
        { name: 'TypeScript', primary: true },
        { name: 'JavaScript', primary: true },
      ]
    },
    {
      label: locale === 'uk' ? 'Інфраструктура' : 'Infrastructure',
      skills: [
        { name: 'Node.js' },
        { name: 'Docker' },
        { name: 'Kubernetes' },
        { name: 'Git', primary: true },
        { name: 'REST / GraphQL' },
      ]
    },
    {
      label: locale === 'uk' ? 'Архітектура' : 'Architecture',
      skills: [
        { name: 'Micro Frontends' },
        { name: 'System Design' },
        { name: 'Monorepo / Nx' },
      ]
    },
    {
      label: 'Web',
      skills: [
        { name: 'HTML5' },
        { name: 'CSS3 / SCSS' },
        { name: 'Performance' },
        { name: 'Testing' },
      ]
    }
  ]

  return (
    <section id="skills" className="py-24 px-6 bg-[#0A0A0B] border-t border-[#2A2A2E]" aria-labelledby="skills-heading">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <SectionLabel number="03" label={locale === 'uk' ? 'НАВИЧКИ' : 'SKILLS'} />
          <h2 id="skills-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#EDEDEF]">
            {t('skills.title')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10"
        >
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="font-mono text-xs uppercase tracking-wider mb-4 text-[#6B6B73]">
                {group.label}
              </h3>
              <ul className="space-y-2.5">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full flex-shrink-0 bg-emerald-500" />
                    <span className="text-sm text-[#EDEDEF]">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
