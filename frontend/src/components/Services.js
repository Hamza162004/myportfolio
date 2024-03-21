import React from 'react'
import '../css/Services.css'
import design from '../img/about/services/brush.png'
import maintainence from '../img/about/services/technical-support.png'
import communication from '../img/about/services/speak.png'
import coding from '../img/about/services/coding.png'
import testing from '../img/about/services/test.png'

const Services = () => {
    return (
        <div className='flex h-[100%]  items-center my-10 mx-10 py-5 px-5 justify-center flex-col'>
            <h1 className='about-h1 text-white text-6xl my-4'>My Services</h1>
            <div className='flex flex-wrap justify-center items-center py-7'>
                <div className='card  bg-white flex flex-col items-center'>
                    <img className='card-image ' src={coding} alt="" />
                    <div className="content">
                        <div className='flex flex-col items-center justify-center '>
                            <h1 className='text-base font-semibold my-1 md:text-1xl'>Website Development</h1>
                            <svg className="w-6 h-4 svg text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                            </svg>                        </div>
                        <p>As a full-stack web developer, I specialize in crafting dynamic websites with expertise in both front-end and back-end technologies. I ensure seamless and responsive web experiences, tailored to meet unique requirements.</p>
                    </div>
                </div>
                <div className='card  bg-white flex flex-col items-center'>
                    <img className='card-image ' src={design} alt="" />
                    <div className="content">
                        <div className='flex-col items-center flex justify-center '>
                            <h1 className='text-base font-semibold my-1 md:text-1xl'>UI/UX Designing</h1>
                            <svg className="w-6 h-4 svg text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                            </svg>                        </div>
                        <p> From user-friendly interfaces to engaging experiences, I bring a keen eye for design that enhances the overall user journey, making your digital presence both visually appealing and user-centric.</p>
                    </div>
                </div>
                <div className='card  bg-white flex flex-col items-center'>
                    <img className='card-image ' src={communication} alt="" />
                    <div className="content">
                        <div className='flex flex-col items-center justify-center '>
                            <h1 className='text-base font-semibold my-1 md:text-1xl'>Collaboration</h1>
                            <svg className="w-6 h-4 svg text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                            </svg>                        </div>
                        <p>I prioritize open communication and collaboration with customers, ensuring a transparent environment. This approach guarantees the delivery of effective, tailored web solutions that exceed expectations.</p>
                    </div>
                </div>
                <div className='card  bg-white flex flex-col items-center'>
                    <img className='card-image ' src={testing} alt="" />
                    <div className="content">
                        <div className='flex flex-col items-center justify-center '>
                            <h1 className='text-base font-semibold my-1 md:text-1xl'>Testing & Debugging</h1>
                            <svg className="w-6 h-4 svg text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                            </svg>                        </div>
                        <p>I specialize in testing and debugging to ensure your web applications meet top-quality standards for seamless functionality, high performance, and robust security, ensuring an exceptional user experience.</p>
                    </div>
                </div>
                <div className='card  bg-white flex flex-col items-center'>
                    <img className='card-image ' src={maintainence} alt="" />
                    <div className="content">
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='text-base my-1 font-semibold  md:text-1xl'>Maintainance & Support</h1>
                            <svg className="w-6 h-4 svg text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                            </svg>

                        </div>
                        <p>I'll ensure the continuous functionality, security and performance of your website through comprehensive maintenance and support. Trust me to keep your digital assets running smoothly, allowing you to prioritize your business.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services
