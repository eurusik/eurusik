import { LanguageProvider } from '../../contexts/LanguageContext'
import Header from '../../components/layout/Header'
import Hero from '../../components/sections/Hero'
import About from '../../components/sections/About'
import Blog from '../../components/features/Blog'
import Companies from '../../components/sections/Companies'
import Experience from '../../components/sections/Experience'
import Skills from '../../components/sections/Skills'
import Education from '../../components/sections/Education'
import GitHubActivity from '../../components/features/GitHubActivity'
import Testimonials from '../../components/sections/Testimonials'
import Contact from '../../components/sections/Contact'
import BackToTop from '../../components/ui/BackToTop'

export default function Page() {
  return (
    <LanguageProvider locale="en">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <Header />
        <main>
          <Hero />
          <About />
          <Blog />
          <Companies />
          <Experience />
          <Skills />
          <Education />
          <GitHubActivity />
          <Testimonials />
          <Contact />
        </main>
        <BackToTop />
      </div>
    </LanguageProvider>
  )
}
