import { motion } from 'framer-motion'
import { useTranslation } from '../../contexts/LanguageContext'
import { companiesData } from '../../locales/companiesData'

const Companies = () => {
  const { locale } = useTranslation()
  const data = companiesData[locale]
  
  const companies = [
    {
      name: "Сільпо",
      logo: "/logos/silpo.svg",
      description: "Ukraine's leading retail chain",
      url: "https://silpo.ua"
    },
    {
      name: "Rozetka",
      logo: "/logos/rozetka.png", 
      description: "Ukraine's largest e-commerce platform",
      url: "https://rozetka.ua"
    },
    {
      name: "Mastercard",
      logo: "/logos/mastercard.svg",
      description: "Global financial services leader",
      url: "https://mastercard.ua"
    },
    {
      name: "Electronic Arts",
      logo: "/logos/ea.svg",
      description: "Global gaming industry leader",
      url: "https://ea.com"
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4 font-heading">
            {data.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </motion.div>

        {/* Mobile: Horizontal scroll, Desktop: Grid */}
        <div className="md:hidden overflow-x-auto pb-4">
          <div className="flex gap-6 px-4" style={{ width: 'max-content' }}>
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1 
                }}
                viewport={{ once: true }}
                className="group flex-shrink-0"
                style={{ width: '280px' }}
              >
                <a 
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="glass-card rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full">
                    <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-white rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
                      <img 
                        src={company.logo} 
                        alt={`${company.name} logo`}
                        className="w-14 h-14 object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 font-heading group-hover:text-blue-600 transition-colors duration-300">
                      {company.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {data.companies[index]?.description || company.description}
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1 
              }}
              viewport={{ once: true }}
              className="group"
            >
              <a 
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="glass-card rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-white rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 font-heading group-hover:text-blue-600 transition-colors duration-300">
                    {company.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {data.companies[index]?.description || company.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Companies
