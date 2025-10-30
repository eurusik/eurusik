import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="about-heading">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-8 font-heading">
            About Me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6 sm:p-8 md:p-12 text-center"
        >
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-inter">
            <span className="font-semibold text-blue-600">11+ years of experience</span> building scalable web applications 
            for Ukraine&apos;s leading tech companies. Maintaining <span className="font-semibold text-purple-600">Angular Primitives</span>{' '}
            and leading frontend development at <span className="font-semibold text-indigo-600">Сільпо</span>. 
            Expert in <span className="font-semibold">Angular</span>, <span className="font-semibold">TypeScript</span>,{' '}
            <span className="font-semibold">React</span>, and <span className="font-semibold">microservices architecture</span>,{' '}
            with experience in e-commerce, fintech, and enterprise solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
