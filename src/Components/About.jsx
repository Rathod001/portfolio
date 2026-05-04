import React from 'react'

export default function About() {
  return (
    <section className='shadow-md ' id='about'>
        <div className='w-full '>
            <h1 className='text-2xl font-bold p-5 flex justify-center text-blue-950'>About Me</h1>
        </div>
        <div className='w-full md:flex p-5'>
            <div className='w-full md:w-1/3 '>
                <img className='w-full h-full' src='/Assets/hero-img.png' alt="" />
            </div>
            <div className='w-full md:w-2/3'>
                <p>
                Certified Ethical Hacker and Cybersecurity Graduate with a strong interest in Penetration Testing, Vulnerability Assessment, and Web Application Security. Passionate about identifying security flaws, solving complex challenges, and building secure digital solutions.
                </p>
                <br />
                <p>
                Also a Fullstack Developer, I combine development knowledge with security thinking to better understand and protect modern web applications.
                </p>
                <br />
                <p>
                Focused on continuous learning, practical problem-solving, and becoming a skilled Security Professional in the cybersecurity industry.
                </p>
            </div>
        </div>
    </section>
  )
}
