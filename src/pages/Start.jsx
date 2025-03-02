import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/start.css'

const Start = () => {
  return (
    <>
   <div>
    <div className="h-screen flex justify-center  items-centerflex-col w-full ">
        
        <div className="bg-white pl-5  pr-5 flex flex-col justify-center items-center ">
            <h1 className='font-bold text-3xl my-4 logo font  '>delicake</h1>
            <h3 className='logo-para font'>Delight in every bite</h3>
            <div className="horizontal-line bg-gray-300 w-15 border-[1px] border-gray-400 rounded-2xl m-3"></div>
            <p className='font my-5 text-gray-500
'><span className='mx-4 text-xl '>the</span> |<span className='mx-4 text-xl '> cake </span>| <span className='mx-4 text-xl '>company</span></p>

            <Link to='/' className='flex color-button justify-center items-center my-6 py-2 w-full font-bold  text-lg rounded-full'><a href='/'>Next</a></Link>


            <Link to='/user-login' className='flex button justify-center items-center my-6 py-2 w-full font-bold  text-lg rounded-full'><a href='/'>Get Started</a></Link>


          
            
        </div>
    </div>
   </div>
   </>
  )
}

export default Start