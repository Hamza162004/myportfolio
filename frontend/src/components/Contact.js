import React, { useState } from 'react'
import '../css/Contact.css'
import contactme from '../img/contact/Email_campaign_Customizable_Isometric_Illustrations___Amico_Style-removebg-preview.png'
import NoteContext from '../context/NoteContext'
import { useContext } from 'react'

const Contact = () => {
  const context = useContext(NoteContext);
  const [user,setUser] = useState({name : "",email : "" , message : ""})
  const {contact} = context;

  const submit=(e)=>{
    e.preventDefault();
    console.log(user)
    contact(user.name,user.email,user.message);
    setUser({name:"",email:"",message:""})
    alert('Form submitted')
  }

  const onchange = (e) =>{
    setUser({...user , [e.target.name] : e.target.value})
  }

  return (
    <>
    <div className='contact flex justify-evenly items-center'>
      <div className='img-con'>
        <img className='w-96 img' src={contactme} alt="" />
      </div>
      <div className='py-5 px-5 form-con  text-white text-center'>
        <h1 className='text-6xl  contact-h1 font-semibold'>Contact Me</h1>
        <form className="max-w-sm mx-auto text-left items-center" onSubmit={submit}>
          <div className='my-3 input-con'>
            <label htmlFor="name" className="labels block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <input required minLength={3} onChange={onchange}  value={user.name} type="text" name='name' id="name" className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" />
            </div>
          </div>
          <div className='my-3 input-con'>
            <label htmlFor="email" className="labels block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
            <div className="flex">
              <span className="inline-flex items-center px-3  text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </span>

              <input required onChange={onchange} value={user.email} name='email' type="email" id="email" className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 flex-1 min-w-0 block w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" />
            </div>
          </div>
          <div className='my-3input-con'>
            <label htmlFor="message" className="labels block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
            <textarea required minLength={1} onChange={onchange} value={user.message} id="message" name='message' rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
          </div>
          <div className='flex justify-center items-center w-[100%]'>
            <input type="submit" value="Submit" className='btn border-2 font-mono py-2 px-3 text-xl m-3 w-60 cursor-pointer rounded-md  text-white border-purple-900  hover:border-white' />
          </div>
        </form>

      </div >

    </div >
    
    </>
  )
}

export default Contact
