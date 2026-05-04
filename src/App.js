import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import About from './Components/About.jsx'
import Projects from './Components/Projects.jsx'
import Skills from './Components/Skills.jsx'
import Certifications from './Components/Certifications.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero name="Mahender Rathod"/>
      <About />
      <Projects  project1="Project 1" project2="Project 2" project3="Project 3"/>
      <Skills skill1="Ethical Hacking" skill2="Vulnerability Assessment" skill3="Web and Network Penetration testing" skill4="SOC Operations" skill5="Bug bounty Hunting"/>
      <Certifications />
      <Contact />
      <Footer /> 
    </div>
  )
}
