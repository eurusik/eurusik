import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "john.rusakov@gmail.com",
      link: "mailto:john.rusakov@gmail.com"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "github.com/eurusik",
      link: "https://github.com/eurusik"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/eugene-rusakov-27606352",
      link: "https://www.linkedin.com/in/eugene-rusakov-27606352/"
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Kyiv, Ukraine",
      link: null
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 font-heading">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss your next project and create something amazing together.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
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
              className="glass-card bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6"
            >
              {contact.link ? (
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white hover:text-blue-300 transition-colors duration-300"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{contact.label}</p>
                    <p className="text-white/80">{contact.value}</p>
                  </div>
                </a>
              ) : (
                <div className="flex items-center gap-4 text-white">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{contact.label}</p>
                    <p className="text-white/80">{contact.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Hire Me Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="mailto:john.rusakov@gmail.com?subject=Let's Work Together&body=Hi Eugene, I'd like to discuss a project with you."
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:shadow-2xl text-lg"
          >
            <Send size={24} />
            Hire Me
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-white/20"
        >
          <p className="text-white/60 text-sm">
            © 2025 Eugene Rusakov. Built with React, Tailwind CSS & Framer Motion.
          </p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="text-white/50 text-xs">Hosted on</span>
            <div className="flex items-center gap-1">
              <img 
                src="/logos/pi.svg" 
                alt="Raspberry Pi"
                className="w-4 h-4 opacity-70"
              />
              <span className="text-white/50 text-xs">Raspberry Pi cluster with</span>
              <img 
                src="/logos/k3.svg" 
                alt="k3s"
                className="w-4 h-4 opacity-70"
              />
              <span className="text-white/50 text-xs">k3s</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
