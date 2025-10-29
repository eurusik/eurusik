import React from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Companies from '../../components/Companies'
import Experience from '../../components/Experience'
import Skills from '../../components/Skills'
import Education from '../../components/Education'
import Contact from '../../components/Contact'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Companies />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
