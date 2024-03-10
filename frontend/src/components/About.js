import React from 'react'
import '../css/About.css'
import working from '../img/about/mygif.gif'
import cv from '../img/about/CV (Hamza Javed).pdf'
import Skills from './Skills'
import Services from './Services'


const About = () => {
  return (
    <>
    <div className='h-[30.2rem] about flex items-center  justify-between px-20 py-5'>
        <div className='flex imgdiv items-center justify-center mx-10 w-96'>
            <img className='' src={working} alt="" />
        </div>
        <div className='w-[38rem] about-text text-white '>
            <h1 className='text-6xl mb-5 about-h1 font-semibold'>About Me</h1>
            <p className='text-lg font-medium about-p'>I am a dedicated web developer with expertise in both front-end and back-end technologies. I thrive on clean and efficient code, passionate to delivering high-quality, scalable solutions. Beyond technical expertise, I value open communication and collaboration, ensuring each project meets and exceeds expectations. Let's collaborate to turn your vision into a standout digital reality.</p>
            <a href={cv} download="CV (Hamza Javed)" rel="noreferrer" target='_blank'><button className='bg-none cv border-2 font-mono py-2 px-3 text-xl w-44 cursor-pointer my-6 rounded-md hover:bg-purple-900 hover:text-white hover:border-purple-900 '>Download CV</button></a>
        </div>
    </div>
    <div className=' con py-10 justify-center  flex flex-col'>
      <Skills/>
      <Services/>
    </div>
    </>
  )
}

export default About
