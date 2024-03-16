import React from 'react'
import '../css/Services.css'
import design from '../img/about/services/brush.png'
import maintainence from '../img/about/services/technical-support.png'
import communication from '../img/about/services/speak.png'
import coding from '../img/about/services/coding.png'
import testing from '../img/about/services/test.png'

const Services = () => {
  return (
    <div className='flex  items-center my-10 mx-10 py-5 px-5 justify-center flex-col'>
        <h1 className='about-h1 text-white text-6xl my-4'>My Services</h1>
        <div className='flex flex-wrap justify-center items-center py-7'>
            <div className='card  bg-white flex flex-col items-center'>
                <img className='card-image ' src={coding} alt="" />
                <div className="content">
                <div className='flex justify-center '>
                        <h1 className='text-2xl font-semibold my-2 sm:text-lg'>Website Development</h1>
                        <svg className='svg' style={{width:'20px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.383 8.076a1 1 0 0 0-1.09.217l-6 6A1 1 0 0 0 9 16h6a1 1 0 0 0 1-1V9a1 1 0 0 0-.617-.924z" style={{fill:'#ff8e31'}} data-name="Serong kanan bawah"/></svg>
                    </div>
                    <p>As a full-stack web developer, I specialize in crafting dynamic websites with expertise in both front-end and back-end technologies. I ensure seamless and responsive web experiences, tailored to meet unique requirements.</p>
                </div>
            </div>
            <div className='card  bg-white flex flex-col items-center'>
                <img className='card-image ' src={design} alt="" />
                <div className="content">
                <div className='flex justify-center '>
                        <h1 className='text-2xl font-semibold my-2 sm:text-lg'>UI/UX Designing</h1>
                        <svg className='svg' style={{width:'20px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.383 8.076a1 1 0 0 0-1.09.217l-6 6A1 1 0 0 0 9 16h6a1 1 0 0 0 1-1V9a1 1 0 0 0-.617-.924z" style={{fill:'#ff8e31'}} data-name="Serong kanan bawah"/></svg>
                    </div>
                    <p> From user-friendly interfaces to engaging experiences, I bring a keen eye for design that enhances the overall user journey, making your digital presence both visually appealing and user-centric.</p>
                </div>
            </div>
            <div className='card  bg-white flex flex-col items-center'>
                <img className='card-image ' src={communication} alt="" />
                <div className="content">
                <div className='flex justify-center '>
                        <h1 className='text-2xl font-semibold my-2 sm:text-lg'>Collaboration</h1>
                        <svg className='svg' style={{width:'20px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.383 8.076a1 1 0 0 0-1.09.217l-6 6A1 1 0 0 0 9 16h6a1 1 0 0 0 1-1V9a1 1 0 0 0-.617-.924z" style={{fill:'#ff8e31'}} data-name="Serong kanan bawah"/></svg>
                    </div>
                    <p>I prioritize open communication and collaboration with customers, ensuring a transparent environment. This approach guarantees the delivery of effective, tailored web solutions that exceed expectations.</p>
                </div>
            </div>
            <div className='card  bg-white flex flex-col items-center'>
                <img className='card-image ' src={testing} alt="" />
                <div className="content">
                    <div className='flex justify-center '>
                        <h1 className='text-2xl font-semibold my-2 sm:text-lg'>Testing & Debugging</h1>
                        <svg className='svg' style={{width:'20px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.383 8.076a1 1 0 0 0-1.09.217l-6 6A1 1 0 0 0 9 16h6a1 1 0 0 0 1-1V9a1 1 0 0 0-.617-.924z" style={{fill:'#ff8e31'}} data-name="Serong kanan bawah"/></svg>
                    </div>
                    <p>We specialize in testing and debugging to ensure your web applications meet top-quality standards for seamless functionality, high performance, and robust security, ensuring an exceptional user experience.</p>
                </div>
            </div>
            <div className='card  bg-white flex flex-col items-center'>
                <img className='card-image ' src={maintainence} alt="" />
                <div className="content">
                <div className='flex justify-center '>
                        <h1 className='text-2xl font-semibold my-2 sm:text-lg'>Maintainance & Support</h1>
                        <svg className='svg' style={{width:'20px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.383 8.076a1 1 0 0 0-1.09.217l-6 6A1 1 0 0 0 9 16h6a1 1 0 0 0 1-1V9a1 1 0 0 0-.617-.924z" style={{fill:'#ff8e31'}} data-name="Serong kanan bawah"/></svg>
                    </div>
                    <p>I'll ensure the continuous functionality, security and performance of your website through comprehensive maintenance and support. Trust me to keep your digital assets running smoothly, allowing you to prioritize your business.</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Services
