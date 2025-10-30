import { motion } from 'framer-motion'
import { GraduationCap, Award, ExternalLink } from 'lucide-react'

const Education = () => {
  const education = {
    institution: "Kharkiv Social and Economic Institute",
    degree: "Bachelor's Degree in Computer Science",
    period: "2013 - 2017",
    description: "Focused on software engineering, algorithms, and web development fundamentals."
  }

  const certifications = [
    {
      title: "Node.js - Fundamentals and Application Architecture",
      provider: "Udemy",
      year: "2022",
      logo: "🚀",
      credentialId: "UC-7502d10e-cf1a-46d4-8334-deba93d039c7",
      link: "#"
    },
    {
      title: "Angular Crash Course",
      provider: "Udemy",
      year: "2022",
      logo: "🅰️",
      credentialId: "UC-1091efec-17b7-4ef1-8edd-0402bf73a27d",
      link: "#"
    },
    {
      title: "React Native - The Practical Guide",
      provider: "Udemy",
      year: "2022",
      logo: "📱",
      credentialId: "UC-4967d1c2-dd03-439d-aad0-46667270a8c5",
      link: "#"
    },
    {
      title: "HTML, CSS",
      provider: "TestProvider",
      year: "2018",
      logo: "🎨",
      credentialId: "TP02474800",
      link: "#"
    },
    {
      title: "JavaScript Essential",
      provider: "TestProvider",
      year: "2018",
      logo: "⚡",
      credentialId: "TP36139870",
      link: "#"
    },
    {
      title: "PHP Starter",
      provider: "TestProvider",
      year: "2018",
      logo: "🐘",
      credentialId: "TP99236876",
      link: "#"
    },
    {
      title: "JavaScript in WEB develop",
      provider: "World ORT",
      year: "2017",
      logo: "💻",
      credentialId: "SCHDP4IT9 №164588",
      link: "#"
    },
    {
      title: "Fundamentals of WEB-programming. WEB-technology and the basis of WEB-design",
      provider: "World ORT",
      year: "2016",
      logo: "🌐",
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
            Education & Certifications
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
              Professional Certifications
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
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {cert.logo}
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

                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">View Certificate</span>
                    </motion.div>
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
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {cert.logo}
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

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">View Certificate</span>
                  </motion.div>
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
