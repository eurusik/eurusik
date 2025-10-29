import { motion } from 'framer-motion'
import { Quote, Linkedin } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mykola Polovinkin",
      position: "EVA Product Manager | ex-Silpo Product Owner",
      company: "Сільпо",
      text: "I wholeheartedly endorse Eugene Rusakov as an exceptional Frontend Engineer and Tech Lead. His pioneering work on our website not only enhanced our digital presence but also delivered significant economic advantages. Eugene's deep technical expertise in frontend development, combined with his strong leadership, has been a tremendous asset to our team. He consistently promotes a collaborative atmosphere, guiding our project to achieve remarkable success.",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQGImY5kS-8nMg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1673355090252?e=1763596800&v=beta&t=gEE3zvCcZKaFkFT7p3b_xy-uoTacAHZTtIjCikiJcxs",
      linkedin: "https://www.linkedin.com/in/eugene-rusakov-27606352/"
    },
    {
      name: "Олена Кириченко",
      position: "Frontend Developer",
      company: "Rozetka",
      text: "Great lead. Soft and hard skills on top. Always give practical advice, keep up to date with new technologies. Also a good conversationalist, it was nice to work together.",
      avatar: "https://media.licdn.com/dms/image/v2/C5603AQFatyLfqsSvRg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517056399515?e=1763596800&v=beta&t=Z7hunbTNlITEqu7ATFoura9djkDZVvhKj8w6hEDORmo",
      linkedin: "https://www.linkedin.com/in/eugene-rusakov-27606352/"
    },
    {
      name: "Yurii Kryventsov",
      position: "Crew Captain / Frontend Engineer",
      company: "Сільпо",
      text: "I highly recommend Eugene Rusakov, a leading Frontend Engineer and Tech Lead. His innovative contributions significantly boosted our new website module, delivering substantial economic benefits. Eugene's technical expertise and leadership in frontend development have been invaluable. He consistently fosters a collaborative team environment, driving our project to success.",
      avatar: "https://media.licdn.com/dms/image/v2/C4E03AQELxfqruugIgQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1594805429524?e=1763596800&v=beta&t=VQ1HqC3lQOLMIHKxozTObGLezRmuolmcNHR_3VRD5Uw",
      linkedin: "https://www.linkedin.com/in/eugene-rusakov-27606352/"
    }
  ]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4 font-poppins">
            Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What colleagues and partners say about working with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 relative group hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={48} className="text-blue-600" />
              </div>

              {/* Avatar & Info */}
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-blue-200"
                />
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}
                  </p>
                  <p className="text-xs text-blue-600 font-semibold">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-4 relative z-10">
                "{testimonial.text}"
              </p>

              {/* LinkedIn Link */}
              <a
                href={testimonial.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors text-sm font-semibold"
              >
                <Linkedin size={16} />
                <span>View on LinkedIn</span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* LinkedIn Recommendations Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.linkedin.com/in/eugene-rusakov-27606352/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Linkedin size={20} />
            <span>View All Recommendations on LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
