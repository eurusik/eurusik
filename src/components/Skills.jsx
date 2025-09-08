import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const technologies = [
    { name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
    { name: "TypeScript", color: "from-blue-500 to-blue-700" },
    { name: "React", color: "from-cyan-400 to-cyan-600" },
    { name: "Angular", color: "from-red-500 to-red-700" },
    { name: "Vue.js", color: "from-green-400 to-green-600" },
    { name: "HTML5/CSS3", color: "from-pink-500 to-pink-700" },
    { name: "Node.js", color: "from-green-500 to-green-700" },
    { name: "RxJS", color: "from-purple-500 to-purple-700" },
    { name: "NgRx", color: "from-indigo-500 to-indigo-700" },
    { name: "Git", color: "from-orange-500 to-orange-700" },
    { name: "Docker", color: "from-blue-400 to-blue-600" },
    { name: "Kubernetes", color: "from-blue-600 to-blue-800" },
    { name: "Microservices", color: "from-teal-500 to-teal-700" },
    { name: "REST APIs", color: "from-emerald-500 to-emerald-700" },
    { name: "GraphQL", color: "from-rose-500 to-rose-700" },
    { name: "System Design", color: "from-violet-500 to-violet-700" },
    { name: "Performance", color: "from-amber-500 to-amber-700" },
    { name: "Testing", color: "from-lime-500 to-lime-700" }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-8 font-poppins">
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Technology Chips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ 
                  duration: 0.3,
                  delay: index * 0.03
                }}
                viewport={{ once: true }}
                className={`px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r ${tech.color} text-white font-semibold rounded-full shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-xl`}
              >
                <span className="text-sm sm:text-base">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
