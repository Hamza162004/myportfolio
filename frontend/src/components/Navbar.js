import React, { useState } from 'react'
import { useLocation,Link } from 'react-router-dom'
import '../css/Navbar.css'
import menu from '../img/home/burger-bar.png'

const Navbar = () => {
  const [bg,setbg] = useState(false);
  const [dis,setdis] = useState(false)
  const location = useLocation();

  const changebg = ()=>{
    if(window.scrollY >= 40 && window.innerWidth >780){
      setbg(true)
    }else{
      setbg(false)
    }
  }

  window.addEventListener('scroll',changebg)

  const display =()=>{
    if(dis){
        setdis(false)
    }else{
      setdis(true)
    }
  }

  return (
    <>
      <nav className={`${bg?'navbar-change':''} w-[100%] text-white navbar  align-middle flex justify-between px-16  py-5`}>
        <div>
            <h3 className='text-3xl logo'>Code With Hamza</h3>
        </div>
        <div className='menu-div items-center flex justify-center'>
            <button onClick={display}><img className='menu w-8' src={menu} alt="" /></button>
        </div>
        <ul className={`${dis?'links-work':''} flex space-x-10 text-xl links`}>
            <Link to='/' className={`${location.pathname==='/'?'activetab':''} cursor-pointer hover:text-purple-700 hover:font-semibold hover:border-b-2 hover:border-purple-700`}  >Home</Link>
            <Link to='/about' className={`${location.pathname==='/about'?'activetab':''} cursor-pointer hover:text-purple-700 hover:font-semibold hover:border-b-2 hover:border-purple-700`} >About</Link>
            <Link to='/projects' className={`${location.pathname==='/projects'?'activetab':''} cursor-pointer hover:text-purple-700 hover:font-semibold hover:border-b-2 hover:border-purple-700`} >Projects</Link>
            <Link to='/contact' className={`${location.pathname==='/contact'?'activetab':''} cursor-pointer hover:text-purple-700 hover:font-semibold hover:border-b-2 hover:border-purple-700`} >Contact Me</Link>
        </ul>    
      </nav>
    </>
  )
}

export default Navbar
