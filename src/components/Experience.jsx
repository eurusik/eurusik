import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Briefcase, ChevronDown, ChevronUp } from 'lucide-react'

const Experience = () => {
  const [showAll, setShowAll] = useState(false)
  const experiences = [
    {
      company: "Angular Primitives",
      position: "Maintainer",
      period: "July 2025 - Present",
      location: "Remote",
      description: "Maintaining Angular Primitives - style agnostic, accessible primitives for Angular. Open source project focused on providing reusable UI components.",
      technologies: ["Angular", "TypeScript", "Open Source"],
      logo: "🅰️"
    },
    {
      company: "Сільпо",
      position: "Front End Lead",
      period: "Oct 2024 - Present",
      location: "Kyiv, Ukraine",
      description: "Leading the development of the shopping cart and order payment processes on silpo.ua. Managing frontend team and architectural decisions for e-commerce platform.",
      technologies: ["Angular", "TypeScript", "E-commerce", "Team Leadership"],
      logo: "/logos/silpo.svg"
    },
    {
      company: "Сільпо",
      position: "Tech Lead Frontend",
      period: "Aug 2023 - Oct 2024",
      location: "Kyiv, Ukraine",
      description: "Responsible for leading the design and implementation of architectural solutions, microservices, and optimization strategies to enhance the product's user experience.",
      technologies: ["Angular", "Microservices", "Architecture", "Performance"],
      logo: "/logos/silpo.svg"
    },
    {
      company: "Сільпо",
      position: "Senior Frontend Developer",
      period: "Aug 2022 - Aug 2023",
      location: "Kyiv, Ukraine",
      description: "Development of the main page, catalog, filters, search, and product card on silpo.ua. Building core e-commerce functionality for major Ukrainian retailer.",
      technologies: ["Angular", "TypeScript", "E-commerce", "Search"],
      logo: "/logos/silpo.svg"
    },
    {
      company: "Rozetka.ua",
      position: "Front End Lead",
      period: "July 2021 - Aug 2022",
      location: "Kyiv, Ukraine",
      description: "Implementation of architectural solutions, development of UI Kit, performance optimization, and server-side rendering for Ukraine's largest e-commerce platform.",
      technologies: ["Angular", "SSR", "UI Kit", "Performance"],
      logo: "/logos/rozetka.png"
    },
    {
      company: "Rozetka.ua",
      position: "Senior Frontend Developer",
      period: "July 2020 - June 2021",
      location: "Kyiv, Ukraine",
      description: "Development of key platform elements, including product pages, main page, filters, content blocks, comments, reviews, media galleries, and profile pages.",
      technologies: ["Angular", "TypeScript", "Media", "Reviews"],
      logo: "/logos/rozetka.png"
    },
    {
      company: "Tradelize",
      position: "Front End Lead",
      period: "July 2019 - June 2020",
      location: "Kyiv, Ukraine",
      description: "Developing an investment portal within a fintech startup. Leading frontend development for trading and investment platform.",
      technologies: ["Angular", "FinTech", "Trading", "Startup"],
      logo: "📈"
    },
    {
      company: "Mastercard",
      position: "Frontend Engineer",
      period: "May 2018 - July 2019",
      location: "Kyiv, Ukraine",
      description: "Developing Priceless Specials, a single-page application for MasterCard Hungary loyalty program, in collaboration with HBO, Samsung, Microsoft, Bank K&H.",
      technologies: ["Angular", "SPA", "Loyalty", "Enterprise"],
      logo: "/logos/mastercard.svg"
    },
    {
      company: "MGNY Consulting Corp",
      position: "Frontend Engineer",
      period: "June 2017 - May 2018",
      location: "Ukraine",
      description: "Developing front-end components including Dashboard, Analytics, Forms, Tables, and Charts for property tax reduction services portal.",
      technologies: ["JavaScript", "Dashboard", "Analytics", "Charts"],
      logo: "🏢"
    },
    {
      company: "Giraffe Software",
      position: "Full Stack Engineer",
      period: "Jan 2017 - June 2017",
      location: "Ukraine",
      description: "Developing both back-end and front-end components of web applications. Full-stack development experience with modern web technologies.",
      technologies: ["JavaScript", "Full Stack", "Web Apps"],
      logo: "/logos/gf.svg"
    },
    {
      company: "Electronic Arts",
      position: "Community Development Battlelog",
      period: "2013 - 2014",
      location: "Remote",
      logo: "/logos/ea.svg",
      description: [
        "Developed and maintained community features for Battlefield game series",
        "Implemented real-time statistics tracking and leaderboards",
        "Created responsive web interfaces for gaming community"
      ],
      technologies: ["Web Platform", "Gaming", "Community", "Social"]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-8 font-poppins">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full z-0"></div>

          {/* Show top 3 experiences or all if expanded */}
          {(showAll ? experiences : experiences.slice(0, 3)).map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>

              <div className={`glass-card rounded-2xl p-6 sm:p-8 relative z-10 bg-white/80 backdrop-blur-sm ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                <div className="flex items-center gap-2 mb-3 text-blue-600">
                  <Briefcase size={20} />
                  <span className="font-semibold text-sm uppercase tracking-wide">
                    {exp.period}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 flex items-center justify-center">
                    {exp.logo.startsWith('/logos/') ? (
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        className="w-10 h-10 object-contain rounded-lg"
                      />
                    ) : (
                      <div className="text-3xl">{exp.logo}</div>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                    {exp.position}
                  </h3>
                </div>

                <div className="flex items-center gap-2 mb-4 text-gray-600">
                  <MapPin size={16} />
                  <span className="font-medium">{exp.company}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Show More/Less Button */}
          {experiences.length > 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12 relative z-20"
            >
              <motion.button
                onClick={() => setShowAll(!showAll)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg relative z-20"
              >
                {showAll ? (
                  <>
                    <ChevronUp size={20} />
                    Show Less Experience
                  </>
                ) : (
                  <>
                    <ChevronDown size={20} />
                    Show All Experience ({experiences.length - 3} more)
                  </>
                )}
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Experience
