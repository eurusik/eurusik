import { m } from 'framer-motion'
import { useTranslation } from '../../contexts/LanguageContext'

const Companies = () => {
  const { t } = useTranslation()

  const companies = [
    { name: "Silpo", logo: "/logos/silpo.svg", url: "https://silpo.ua", size: "h-10 max-w-[140px]", filter: "opacity-60 grayscale brightness-[2] contrast-[0.7]" },
    { name: "Rozetka", logo: "/logos/rozetka.png", url: "https://rozetka.ua", size: "h-10 max-w-[140px]", filter: "opacity-60 grayscale brightness-[2] contrast-[0.7]" },
    { name: "Mastercard", logo: "/logos/mastercard.svg", url: "https://www.mastercard.com", size: "h-10 max-w-[100px]", filter: "opacity-60 grayscale brightness-[2] contrast-[0.7]" },
    { name: "Electronic Arts", logo: "/logos/ea.svg", url: "https://ea.com", size: "h-[72px] w-[72px]", filter: "opacity-60 brightness-0 invert" }
  ]

  return (
    <section className="py-16 px-6 border-t border-[#2A2A2E] bg-[#0A0A0B]">
      <div className="max-w-3xl mx-auto">
        <p className="text-center text-xs font-mono tracking-[0.2em] uppercase text-[#6B6B73] mb-10">
          {t('companies.workedWith')}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
          {companies.map((company) => (
            <m.a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="w-full h-16 flex items-center justify-center group"
            >
              <img
                src={company.logo}
                alt={company.name}
                className={`${company.size} w-auto object-contain ${company.filter} transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 group-hover:invert-0`}
                loading="lazy"
                decoding="async"
              />
            </m.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Companies
