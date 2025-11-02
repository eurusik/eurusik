import { motion } from 'framer-motion'
import { GraduationCap, Award, ExternalLink, Server, Code2, Smartphone, Palette, Zap, Database, Monitor, Globe } from 'lucide-react'
import { useTranslation } from '../../contexts/LanguageContext'

const Education = () => {
  const { t } = useTranslation()
  
  // Icon mapping helper
  const getIcon = (iconName) => {
    const icons = {
      Server, Code2, Smartphone, Palette, Zap, Database, Monitor, Globe
    }
    const Icon = icons[iconName]
    return Icon ? <Icon size={32} className="text-white" /> : null
  }
  
  const education = {
    institution: t('education.institution'),
    degree: t('education.degree'),
    period: t('education.period'),
    description: t('education.description')
  }

  const certifications = [
    {
      title: "Node.js - Fundamentals and Application Architecture",
      provider: "Udemy",
      year: "2022",
      icon: "Server",
      iconColor: "from-green-500 to-green-600",
      credentialId: "UC-7502d10e-cf1a-46d4-8334-deba93d039c7",
      link: "#"
    },
    {
      title: "Angular Crash Course",
      provider: "Udemy",
      year: "2022",
      icon: "Code2",
      iconColor: "from-red-500 to-red-600",
      credentialId: "UC-1091efec-17b7-4ef1-8edd-0402bf73a27d",
      link: "#"
    },
    {
      title: "React Native - The Practical Guide",
      provider: "Udemy",
      year: "2022",
      icon: "Smartphone",
      iconColor: "from-blue-500 to-blue-600",
      credentialId: "UC-4967d1c2-dd03-439d-aad0-46667270a8c5",
      link: "#"
    },
    {
      title: "HTML, CSS",
      provider: "TestProvider",
      year: "2018",
      icon: "Palette",
      iconColor: "from-pink-500 to-pink-600",
      credentialId: "TP02474800",
      link: "#"
    },
    {
      title: "JavaScript Essential",
      provider: "TestProvider",
      year: "2018",
      icon: "Zap",
      iconColor: "from-yellow-500 to-yellow-600",
      credentialId: "TP36139870",
      link: "#"
    },
    {
      title: "PHP Starter",
      provider: "TestProvider",
      year: "2018",
      icon: "Database",
      iconColor: "from-purple-500 to-purple-600",
      credentialId: "TP99236876",
      link: "#"
    },
    {
      title: "JavaScript in WEB develop",
      provider: "World ORT",
      year: "2017",
      icon: "Monitor",
      iconColor: "from-indigo-500 to-indigo-600",
      credentialId: "SCHDP4IT9 №164588",
      link: "#"
    },
    {
      title: "Fundamentals of WEB-programming. WEB-technology and the basis of WEB-design",
      provider: "World ORT",
      year: "2016",
      icon: "Globe",
      iconColor: "from-cyan-500 to-cyan-600",
      credentialId: "SCHDP4IT2 №163311",
      link: "#"
    }
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-8 font-heading">
            {t('education.title')}
          </h2>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="glass-card rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl">
                <GraduationCap size={32} />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                  {education.degree}
                </h3>
                <p className="text-lg text-gray-600 font-medium">
                  {education.institution}
                </p>
                <p className="text-blue-600 font-semibold">
                  {education.period}
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {education.description}
            </p>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <Award className="text-purple-600" size={32} />
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
              {t('education.certifications')}
            </h3>
          </div>

          {/* Mobile: Horizontal scroll, Desktop: Grid */}
          <div className="lg:hidden overflow-x-auto pb-4">
            <div className="flex gap-4 px-4" style={{ width: 'max-content' }}>
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ 
                    duration: 0.3,
                    delay: index * 0.05 
                  }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl p-6 cursor-pointer group flex-shrink-0"
                  style={{ width: '280px' }}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${cert.iconColor} flex items-center justify-center transition-transform duration-300 shadow-lg`}>
                      {getIcon(cert.icon)}
                    </div>
                    
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">
                      {cert.title}
                    </h4>
                    
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-blue-600 font-semibold">
                        {cert.provider}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">
                        {cert.year}
                      </span>
                    </div>

                    {cert.credentialId && (
                      <div className="text-xs text-gray-500 mb-3 font-mono">
                        ID: {cert.credentialId}
                      </div>
                    )}

                    <div className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors duration-300">
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">{t('education.viewCertificate')}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ 
                  duration: 0.3,
                  delay: index * 0.05 
                }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-6 cursor-pointer group"
              >
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${cert.iconColor} flex items-center justify-center transition-transform duration-300 shadow-lg`}>
                    {getIcon(cert.icon)}
                  </div>
                  
                  <h4 className="font-bold text-gray-800 mb-2 text-lg">
                    {cert.title}
                  </h4>
                  
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-blue-600 font-semibold">
                      {cert.provider}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600">
                      {cert.year}
                    </span>
                  </div>

                  {cert.credentialId && (
                    <div className="text-xs text-gray-500 mb-3 font-mono">
                      ID: {cert.credentialId}
                    </div>
                  )}

                  <div className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors duration-300">
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">{t('education.viewCertificate')}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
