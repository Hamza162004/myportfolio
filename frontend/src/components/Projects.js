import React from 'react'
import '../css/Projects.css'
import p1 from '../img/projects/p1.jpg'
import p2 from '../img/projects/p2.jpg'
import p3 from '../img/projects/p3.jpg'
import git from '../img/contact/git-w-removebg-preview.png'

const Projects = () => {
 
  
  return (
    <div className='projects py-14 text-white flex justify-center items-center flex-col'>
        <h1 className='text-7xl  about-h1 font-semibold mb-10'>My Projects</h1>
        <div className="pro-con flex justify-center items-center flex-col space-y-10">
            <div className="project w[50rem] flex ml-10 py-2">
                <img className='w-56 h-44 project-img-l' src={p1} alt="" />
                <div className='w-[40rem] pt-4 pl-28 pr-8 project-des-r  text-center  border-white rounded-3xl border-2'>
                  <h1 className='text-4xl p-t white font-bold '>Notebook Website</h1>
                  <div className='tech-div font-mono flex py-2 font-bold items-center justify-center text-purple-500 space-x-14'>
                      <span>ReactJS</span>
                      <span>NodeJS</span>
                      <span>Bootstrap</span>
                      <span>MongoDB</span>
                  </div>
                  <p className='text-sm'>A notes keeping website which facilitates the user as they can create, view, delete and edit their notes. The web app provides security to user notes using encryption techniques. MERN stack was used for frontend and backend development.</p>
                  <div className='flex w-[100%] justify-end '>
                    <a rel="noreferrer" href="https://github.com/Hamza162004/inotebook.git" target='_blank'></a><img className='w-10 git-icon rounded-full cursor-pointer pb-2' src={git} alt="" />
                  </div>
                </div>
            </div>
             <div className="project w[50rem] flex ml-10 py-2">
                <img className='w-56 h-44 project-img-r' src={p2} alt="" />
                <div className='w-[40rem] pt-4 pr-28 pl-8 project-des-l text-center  border-white rounded-3xl border-2'>
                  <h1 className='text-4xl p-t white font-bold '>E-commerce Website</h1>
                  <div className='tech-div font-mono flex py-2 font-bold items-center justify-center text-purple-500 space-x-14'>
                      <span>VanillaJS</span>
                      <span>NodeJS</span>
                      <span>Tailwind</span>
                      <span>MongoDB</span>
                  </div>
                  <p className='text-sm'>A clothing website where owner can add products to sell in different categories. User can search, sort and order products from the site.Vanilla JS was used for frontend while nodejs was used for backend. All the products and order information was stored in MongoDB. </p>
                  <div className='flex w-[100%]  gitatl'>
                    <a rel="noreferrer" href="https://github.com/Hamza162004/E-commerce-Web.git" target='_blank'></a><img className='w-10 git-icon rounded-full cursor-pointer pb-2' src={git} alt="" />
                  </div>
                </div>
            </div>
            <div className="project w[50rem] flex ml-10 py-2">
                <img className='w-56 h-44 project-img-l' src={p3} alt="" />
                <div className='w-[40rem] pt-4 pl-28 pr-8 project-des-r text-center  border-white rounded-3xl border-2'>
                  <h1 className='text-4xl p-t white font-bold '>News Website</h1>
                  <div className='tech-div font-mono flex py-2 font-bold items-center justify-center text-purple-500 space-x-14'>
                      <span>ReactJS</span>
                      <span>NodeJS</span>
                      <span>Bootstrap</span>
                  </div>
                  <p className='text-sm'>Website makes use of API to get the latest news from from around the globe and display them to user. User can view news from different categories based on their interest. ReactJs was used for frontend while nodejs for backend development.</p>
                  <div className='flex w-[100%] justify-end '>
                    <a rel="noreferrer" href="https://github.com/Hamza162004/Newsapp.git" target='_blank'></a><img className='w-10 git-icon rounded-full cursor-pointer pb-2' src={git} alt="" />
                  </div>
                </div>
            </div>
        </div>
           
        </div>

    
  )
}

export default Projects