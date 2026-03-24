import { useState } from 'react'
import { m } from 'framer-motion'
import { ChevronDown, ChevronUp, Mail } from 'lucide-react'
import { useTranslation } from '../../contexts/LanguageContext'
import { experienceData } from '../../locales/experienceData'
import SectionLabel from '../layout/SectionLabel'

const Experience = () => {
  const [showAll, setShowAll] = useState(false)
  const { t, locale } = useTranslation()
  const data = experienceData[locale]

  const experiences = [
    {
      company: "Angular Primitives", position: "Maintainer", period: "July 2025 - Present",
      location: "Remote", description: "Maintaining Angular Primitives - style agnostic, accessible primitives for Angular. Open source project focused on providing reusable UI components.",
      technologies: ["Angular", "TypeScript", "Open Source"], logo: null, isCurrent: true
    },
    {
      company: "Silpo", position: "Front End Lead", period: "Oct 2024 - Present",
      location: "Kyiv, Ukraine", description: "Leading the development of the shopping cart and order payment processes on silpo.ua. Managing frontend team and architectural decisions for e-commerce platform.",
      technologies: ["Angular", "TypeScript", "E-commerce", "Team Leadership"], logo: "/logos/silpo.svg", isCurrent: true
    },
    {
      company: "Silpo", position: "Tech Lead Frontend", period: "Aug 2023 - Oct 2024",
      location: "Kyiv, Ukraine", description: "Responsible for leading the design and implementation of architectural solutions, microservices, and optimization strategies.",
      technologies: ["Angular", "Microservices", "Architecture", "Performance"], logo: "/logos/silpo.svg"
    },
    {
      company: "Silpo", position: "Senior Frontend Developer", period: "Aug 2022 - Aug 2023",
      location: "Kyiv, Ukraine", description: "Development of the main page, catalog, filters, search, and product card on silpo.ua.",
      technologies: ["Angular", "TypeScript", "E-commerce", "Search"], logo: "/logos/silpo.svg"
    },
    {
      company: "Rozetka.ua", position: "Front End Lead", period: "July 2021 - Aug 2022",
      location: "Kyiv, Ukraine", description: "Implementation of architectural solutions, development of UI Kit, performance optimization, and server-side rendering.",
      technologies: ["Angular", "SSR", "UI Kit", "Performance"], logo: "/logos/rozetka.png"
    },
    {
      company: "Rozetka.ua", position: "Senior Frontend Developer", period: "July 2020 - June 2021",
      location: "Kyiv, Ukraine", description: "Development of key platform elements, including product pages, main page, filters, content blocks, comments, reviews.",
      technologies: ["Angular", "TypeScript", "Media", "Reviews"], logo: "/logos/rozetka.png"
    },
    {
      company: "Tradelize", position: "Front End Lead", period: "July 2019 - June 2020",
      location: "Kyiv, Ukraine", description: "Developing an investment portal within a fintech startup.",
      technologies: ["Angular", "FinTech", "Trading", "Startup"], logo: null
    },
    {
      company: "Mastercard", position: "Frontend Engineer", period: "May 2018 - July 2019",
      location: "Kyiv, Ukraine", description: "Developing Priceless Specials, a single-page application for MasterCard Hungary loyalty program.",
      technologies: ["Angular", "SPA", "Loyalty", "Enterprise"], logo: "/logos/mastercard.svg"
    },
    {
      company: "MGNY Consulting Corp", position: "Frontend Engineer", period: "June 2017 - May 2018",
      location: "Ukraine", description: "Developing front-end components including Dashboard, Analytics, Forms, Tables, and Charts.",
      technologies: ["JavaScript", "Dashboard", "Analytics", "Charts"], logo: null
    },
    {
      company: "Giraffe Software", position: "Full Stack Engineer", period: "Jan 2017 - June 2017",
      location: "Ukraine", description: "Developing both back-end and front-end components of web applications.",
      technologies: ["JavaScript", "Full Stack", "Web Apps"], logo: "/logos/gf.svg"
    },
    {
      company: "Electronic Arts", position: "Community Development Battlelog", period: "2013 - 2014",
      location: "Remote", description: "Developed and maintained community features for Battlefield game series.",
      technologies: ["Web Platform", "Gaming", "Community", "Social"], logo: "/logos/ea.svg"
    }
  ]

  const visibleExperiences = showAll ? experiences : experiences.slice(0, 4)

  return (
    <section id="experience" className="py-24 px-6 bg-[#111113] border-t border-[#2A2A2E]" aria-labelledby="experience-heading">
      <div className="max-w-4xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <SectionLabel number="02" label={locale === 'uk' ? 'ДОСВІД' : 'EXPERIENCE'} />
          <h2 id="experience-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#EDEDEF]">
            {data.title}
          </h2>
        </m.div>

        <div className="relative">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-[#2A2A2E]" />

          {visibleExperiences.map((exp, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="relative pl-10 pb-10 last:pb-0"
            >
              <div
                className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full border-2"
                style={{
                  borderColor: exp.isCurrent ? '#10B981' : '#3A3A3F',
                  backgroundColor: exp.isCurrent ? '#10B981' : 'transparent'
                }}
              />

              <div className="font-mono text-xs mb-2 text-[#6B6B73]">{exp.period}</div>

              <div className="flex items-center gap-2 mb-1">
                {exp.logo && (
                  <img src={exp.logo} alt={`${exp.company} logo`} className="w-5 h-5 object-contain" loading="lazy" />
                )}
                <span className="text-sm text-[#A0A0A8]">
                  {exp.company} {exp.location && `\u00b7 ${exp.location}`}
                </span>
                {exp.isCurrent && <span className="tag-status text-[10px]">{locale === 'uk' ? 'Зараз' : 'Current'}</span>}
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-[#EDEDEF]">
                {data.experiences[index]?.position || exp.position}
              </h3>

              <p className="text-sm mb-3 leading-relaxed text-[#A0A0A8]">
                {data.experiences[index]?.description || exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tag-default">{tech}</span>
                ))}
              </div>
            </m.div>
          ))}
        </div>

        {experiences.length > 4 && (
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 pl-10"
          >
            <button onClick={() => setShowAll(!showAll)} className="btn-text inline-flex items-center gap-1 text-sm">
              {showAll ? <><ChevronUp size={16} />{data.showLess}</> : <><ChevronDown size={16} />{data.showMore} ({experiences.length - 4})</>}
            </button>
          </m.div>
        )}

        {/* Mid-page CTA */}
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-[#2A2A2E] text-center"
        >
          <p className="text-lg sm:text-xl text-[#A0A0A8] mb-6">
            {t('experience.interested')}
          </p>
          <a
            href="mailto:john.rusakov@gmail.com?subject=Let's Work Together"
            className="btn-accent inline-flex items-center gap-2 text-base"
          >
            <Mail size={18} />
            {t('experience.getInTouch')}
          </a>
        </m.div>
      </div>
    </section>
  )
}

export default Experience
