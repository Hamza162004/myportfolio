import '../css/Floating.css'
import plus from '../img/contact/plus-button.png'
import git from '../img/contact/w-git-removebg-preview.png'
import gmail from '../img/contact/w-email-removebg-preview.png'
import linkedin from '../img/contact/w-linkedin-removebg-preview.png'
import React from 'react'

const Floating = () => {
  return (
    <div className='container-plus '>
        <div className="main">
            <img className='w-18 plus' src={plus} alt="" />
        </div>
        <div className="elements">
            <div className="element gmail">
                <a rel="noreferrer" href="mailto:hj162004@gmail.com"  target='_blank'><img className='img  w-12 ' src={gmail} alt="" /></a>
            </div>
            <div className="element git">
                <a rel="noreferrer" href="https://github.com/Hamza162004" target='_blank'><img className=' img w-12' src={git} alt="" /></a>
            </div>
            <div className="element linkedin">
                <a rel="noreferrer" target='_blank' href="https://www.linkedin.com/in/hamza-javed-40a390266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img className='img w-12' src={linkedin} alt="" /></a>
            </div> 
        </div>   
    </div>
  )
}

export default Floating
