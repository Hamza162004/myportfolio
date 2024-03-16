import React, { useEffect, useRef, useState } from 'react'
import css from '../img/about/skills/css_prev_ui.png'
import js from '../img/about/skills/js_prev_ui.png'
import react from '../img/about/skills/react_prev_ui.png'
import bootstrap from '../img/about/skills/bootstrap_prev_ui.png'
import sql from '../img/about/skills/sql_prev_ui.png'
import express from '../img/about/skills/express_prev_ui.png'
import nodejs from '../img/about/skills/nodejs_prev_ui.png'
import html from '../img/about/skills/html_prev_ui.png'
import tailwind from '../img/about/skills/tailwind_prev_ui.png'
import mongodb from '../img/about/skills/mongodb_prev_ui.png'
import '../css/Skills.css'


const Skills = () => {
    const [isIntersecting,setIsIntersecting] = useState(false)
    const ref = useRef(null)
   
    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting)
                if(isIntersecting){
                    ref.current.querySelectorAll(".hide").forEach((el) => {
                        el.classList.add("show");
                    });
                }
                else{
                    ref.current.querySelectorAll(".hide").forEach((el) => {
                        el.classList.remove("show");
                    });
                }
            }
        );
        console.log(isIntersecting)
        observer.observe(ref.current);
        return () => observer.disconnect();
    },[isIntersecting])
   

  
   
  return (
    <div className='skillbox flex flex-col items-center justify-center mx-20 my-5  py-5 px-10 text-white border-4 border-white'>
        <h1 className='about-h1 text-6xl my-4'>My skills</h1>
        <div ref={ref} className='flex items-center flex-wrap justify-center py-8'>
            <a className='hide' target='_blank'rel="noreferrer" href="https://nodejs.org/en">
                <img className=' w-28 m-5 cursor-pointer img node' loading='lazy' src={nodejs} alt="" />
            </a>
            <a className='hide' target='_blank'rel="noreferrer" href="https://www.mysql.com/">
                <img className=' w-28 m-5 cursor-pointer img sql' loading='lazy' src={sql} alt="" />
            </a>
            <a className='hide' target='_blank'rel="noreferrer" href="https://tailwindcss.com/">
                <img className=' w-28 m-5 cursor-pointer img tailwind' loading='lazy' src={tailwind} alt="" />
            </a>
            <a className='hide' target='_blank'rel="noreferrer" href="https://html.com/">
                <img className=' w-28 m-5 cursor-pointer img html' loading='lazy' src={html} alt="" />
            </a>
            <a className='hide' target='_blank'rel="noreferrer" href="https://www.mongodb.com/">
                <img className=' w-28 m-5 cursor-pointer img mongo' loading='lazy' src={mongodb} alt="" />
            </a>
            <a className='hide' target='_blank'rel="noreferrer" href="https://getbootstrap.com/">
                <img className=' w-28 m-5 cursor-pointer img bootstrap' loading='lazy' src={bootstrap} alt="" />
            </a>
            <a  className='hide' target='_blank'rel="noreferrer" href="https://devdocs.io/css/">
                <img className=' w-28 m-5 cursor-pointer img css' loading='lazy' src={css} alt="" />
            </a>
            <a className='hide' target='_blank'rel="noreferrer" href="https://expressjs.com/">
                <img className=' w-28 m-5 cursor-pointer img express' loading='lazy' src={express} alt="" />
            </a>
            <a className='hide' target='_blank'rel="noreferrer" href="https://react.dev/">
                <img className=' w-28 m-5 react cursor-pointer img' loading='lazy' src={react} alt="" />
            </a>
            <a className='hide' target='_blank'rel="noreferrer" href="https://www.javascript.com/">
                <img className=' w-28 m-5 js cursor-pointer img' loading='lazy' src={js} alt="" />
            </a>
        </div>
      
    </div>
  )
}

export default Skills
