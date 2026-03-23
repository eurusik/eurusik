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

function App({ locale = 'uk' }) {
  return (
    <LanguageProvider locale={locale}>
      <div className="min-h-screen bg-[#0A0A0B]">
        <Header />
        <main>
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
        </main>
        <Footer />
        <BackToTop />
      </div>
    </LanguageProvider>
  )
}

export default App
