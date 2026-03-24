import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion'
import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Companies from './components/sections/Companies'
import Experience from './components/sections/Experience'
import Skills from './components/sections/Skills'
import Education from './components/sections/Education'
import Blog from './components/features/Blog'
import GitHubActivity from './components/features/GitHubActivity'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import BackToTop from './components/ui/BackToTop'
import Clippy from './components/ui/Clippy'
import Win98Dialog from './components/ui/Win98Dialog'
import { useEasterEgg } from './hooks'

function App({ locale = 'uk' }) {
  useEasterEgg()

  return (
    <LanguageProvider locale={locale}>
      <LazyMotion features={domAnimation}>
        <div className="min-h-screen bg-[#0A0A0B]">
          <Header />
          <AnimatePresence mode="wait">
            <m.main
              key={locale}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Hero />
              <About />
              <Companies />
              <Experience />
              <Skills />
              <Education />
              <Blog />
              <GitHubActivity />
              <Testimonials />
              <Contact />
            </m.main>
          </AnimatePresence>
          <Footer />
          <BackToTop />
          <Clippy />
          <Win98Dialog />
        </div>
      </LazyMotion>
    </LanguageProvider>
  )
}

export default App
