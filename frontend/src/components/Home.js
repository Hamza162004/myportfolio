import React from 'react'
import astronaut from '../img/home/astronaut.png'
import '../css/Home.css'

const Home = () => {
  
  return (
    <>
      <div className='h-[85vh] home flex justify-between items-center'>
        <div className="flex home-con flex-col items-center justify-center text-white px-16 " >
          <div class="main">
            <h1 className='h1'>Hi! I'm  Hamza Javed
              <div class="roller">
                <span id="rolltext">
                  MERN Developer<br />
                  Frontend Developer<br />
                  Full-Stack Developer<br />
                </span>
              </div>
            </h1>
          </div>
          <div className="mylinks">
            <a href="/about"><button className='bg-none border-2 font-mono py-2 px-3 text-xl m-3 w-60 cursor-pointer my-10 rounded-md hover:bg-purple-900 hover:text-white hover:border-purple-900 '>Learn About me </button></a>
            <a href="/contact"><button className=' border-2 font-mono py-2 px-3 text-xl m-3 w-60 cursor-pointer my-10 rounded-md bg-purple-900 text-white border-purple-900 hover:bg-transparent hover:border-white'>Contact Me</button></a>
          </div>
        </div>
        <div className='object flex items-center mx-10'>
          <img src={astronaut} className='w-96 astronaut' alt="" />
        </div>
      </div>

    </>
  )
}

export default Home
