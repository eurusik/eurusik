import { m } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import { useTranslation } from '../../contexts/LanguageContext'
import SectionLabel from '../layout/SectionLabel'

const Testimonials = () => {
  const { t, locale } = useTranslation()

  const testimonials = [
    {
      name: "Mykola Polovinkin",
      position: "EVA Product Manager | ex-Silpo Product Owner",
      text: "I wholeheartedly endorse Eugene Rusakov as an exceptional Frontend Engineer and Tech Lead. His pioneering work on our website not only enhanced our digital presence but also delivered significant economic advantages. Eugene's deep technical expertise in frontend development, combined with his strong leadership, has been a tremendous asset to our team.",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQGImY5kS-8nMg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1673355090252?e=1763596800&v=beta&t=gEE3zvCcZKaFkFT7p3b_xy-uoTacAHZTtIjCikiJcxs",
      linkedin: "https://www.linkedin.com/in/eugene-rusakov-27606352/"
    },
    {
      name: "Olena Kyrychenko",
      position: "Frontend Developer",
      text: "Great lead. Soft and hard skills on top. Always give practical advice, keep up to date with new technologies. Also a good conversationalist, it was nice to work together.",
      avatar: "https://media.licdn.com/dms/image/v2/C5603AQFatyLfqsSvRg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517056399515?e=1763596800&v=beta&t=Z7hunbTNlITEqu7ATFoura9djkDZVvhKj8w6hEDORmo",
      linkedin: "https://www.linkedin.com/in/eugene-rusakov-27606352/"
    },
    {
      name: "Yurii Kryventsov",
      position: "Crew Captain / Frontend Engineer",
      text: "I highly recommend Eugene Rusakov, a leading Frontend Engineer and Tech Lead. His innovative contributions significantly boosted our new website module, delivering substantial economic benefits. Eugene's technical expertise and leadership in frontend development have been invaluable.",
      avatar: "https://media.licdn.com/dms/image/v2/C4E03AQELxfqruugIgQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1594805429524?e=1763596800&v=beta&t=VQ1HqC3lQOLMIHKxozTObGLezRmuolmcNHR_3VRD5Uw",
      linkedin: "https://www.linkedin.com/in/eugene-rusakov-27606352/"
    }
  ]

  return (
    <section id="testimonials" className="py-24 px-6 bg-[#111113] border-t border-[#2A2A2E]" aria-labelledby="testimonials-heading">
      <div className="max-w-6xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <SectionLabel number="07" label={locale === 'uk' ? 'ВІДГУКИ' : 'TESTIMONIALS'} />
          <h2 id="testimonials-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#EDEDEF]">
            {t('testimonials.title')}
          </h2>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="card-testimonial relative border border-[#2A2A2E]"
            >
              <span className="absolute top-6 right-6 text-7xl font-serif leading-none select-none text-emerald-500/[0.08]">
                &ldquo;
              </span>

              <p className="text-[15px] italic leading-relaxed mb-6 relative z-10 text-[#A0A0A8]">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="w-8 h-px mb-4 bg-[#2A2A2E]" />

              <div className="flex items-center gap-3 relative z-10">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full border-2 border-emerald-500/20" loading="lazy" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm text-[#EDEDEF]">{testimonial.name}</h3>
                  <p className="text-xs text-[#6B6B73]">{testimonial.position}</p>
                </div>
                <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#6B6B73] hover:text-emerald-500 transition-colors duration-200 flex-shrink-0" aria-label="View recommendation on LinkedIn">
                  <Linkedin size={16} />
                </a>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
