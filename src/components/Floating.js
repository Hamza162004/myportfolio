import '../css/Floating.css'
import plus from '../img/contact/plus-button.png'
import git from '../img/contact/github.png'
import gmail from '../img/contact/email.png'
import linkedin from '../img/contact/social.png'
import React from 'react'

const Floating = () => {
  return (
    <div className='container-plus '>
        <div className="main">
            <img className='w-16 plus' src={plus} alt="" />
        </div>
        <div className="elements">
            <div className="element gmail">
                <a href=""><img className='img w-10 ' src={gmail} alt="" /></a>
            </div>
            <div className="element git">
                <a href=""><img className='img w-10' src={git} alt="" /></a>
            </div>
            <div className="element linkedin">
                <a target='_blank' href="https://www.linkedin.com/in/hamza-javed-40a390266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img className='img w-10' src={linkedin} alt="" /></a>
            </div> 
        </div>   
    </div>
  )
}

export default Floating
