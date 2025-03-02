import React, { useState } from 'react'
import { Link } from 'react-router'


import { RiAppleFill } from '@remixicon/react'
import { RiFacebookCircleFill } from '@remixicon/react'



const UserSignUp = () => {
    const [fullName, setFullName ] = useState('')
    
    const [email, setEmail]= useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({});




    const validate = () => {
        let errors = {};
        let isValid = true;
    
        // Full Name Validation
        if (fullName.trim().split(" ").length < 2) {
          errors.fullName = "Enter full name (first & last)";
          isValid = false;
        }
    
        // Email Validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
          errors.email = "Enter a valid email";
          isValid = false;
        }
    
        // Password Validation
        if (password.length < 6) {
          errors.password = "Password must be at least 6 characters long";
          isValid = false;
        }
    
        setErrors(errors);
        return isValid;
      };
    

    


   


    const submitHandler =async (e)=>{
        e.preventDefault();

        if (validate()) {
            alert("Form Submitted Successfully!");
            // Handle successful form submission logic here
            setFullName('')
       
        setEmail('')
        setPassword('');
          }
        console.log(email)
        console.log(password)
        
    
        
       
        
    }
        
        


  return (
    



    <>
    <div className='flex flex-col gap-6   h-screen'>
        <div className='flex flex-col justify-center text-center items-center mt-8  '>
        <h1 className='text-2xl font-bold  capitalize '>Create Account</h1>
           <p className='text-sm w-[15rem] '>Fill your information below or register with social account</p>

        </div>

        <div>
      

        <form action="" onSubmit={(e)=>{
        submitHandler(e);
       
       }} className='capitalize flex flex-col justify-center px-5 '>

        
           
            <h3 className=' mt-3'> fullName</h3>
            <input 
            className='bg-[#eeeeee] p-2  rounded-xl '
            value={fullName} 
            onChange={(e)=>{
                setFullName(e.target.value);
            }}
            type="text" required name='fullName' placeholder='John'  />
           <div className='min-h-1.5'>
           {errors.fullName ? <p className='text-xs text-red-600 m-0 p-0'> {errors.fullName}</p> :" "}
           </div>

            

            
            
            <h3 className=' mt-3'>email</h3>
            <input  className='bg-[#eeeeee] p-2  rounded-xl '  type="email" required name='email' placeholder='example@gmail.com'
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value);
            }}
            />
             <div className='min-h-1.5'>
           {errors.email ? <p className='text-xs text-red-600 m-0 p-0'> {errors.email}</p> :" "}
           </div>
            <h3 className=' mt-3'>password</h3>
            <input  className='bg-[#eeeeee] p-2  rounded-xl '  type="password"  required name='password'  
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
            />
             <div className='min-h-1.5'>
           {errors.password ? <p className='text-xs text-red-600 m-0 p-0'> {errors.password}</p> :" "}
           </div>
           
            <button type='submit' className={`bg-[var(--theme-color)] p-2 rounded-full text-white font-bold my-6`}>create account</button>





            
        </form>
        <div className='flex  text-gray-500 justify-center items-center'>
            <div className=' bg-gray-300 w-15 border-[1px] border-gray-400 rounded-2xl m-3'></div>
            <div><p>or signup with</p></div>
            <div className=' bg-gray-300 w-15 border-[1px] border-gray-400 rounded-2xl m-3'></div>
        </div>
        <div className="social flex justify-center items-center gap-2 my-5">
            <div className='border-[var(--theme-color)] border-1 rounded-full '><RiAppleFill size={34} className='m-2 '/></div>
            <div className='border-[var(--theme-color)] border-1  rounded-full'><img
  src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
  alt="Google Logo"
  width="30"
  className='m-2'
/>
</div>
            <div className='border-[var(--theme-color)]  border-1 rounded-full'><RiFacebookCircleFill size={34} color="blue" 
            
            className='m-2 rounded-full '/></div>
            
        </div>
        <div>
            <p className='flex items-center mt-5 w-full justify-center p-5'>already have an account?<Link className=" text-blue-700" to='/user-login'>Login here</Link></p>
        </div>
        
        </div>

       



        <div >
        {/* <Link to='/captain-signup' type='submit' className='bg-[#f0cc05] capitalize p-2 rounded text-white font-bold flex items-center w-full justify-center '>Sign Up as captain</Link> */}


        
        </div>
    </div>
    </>
  )
}

export default UserSignUp