import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router'
import { RiAppleFill,  RiEyeFill } from '@remixicon/react'
import { RiFacebookCircleFill } from '@remixicon/react'
import {  RiEyeOffFill } from 'react-icons/ri'

const UserLogin = () => {
 
  
  const [email, setEmail]= useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  
  // const [userInfo, setUserInfo] = useState({
     
  // });
  const navigate = useNavigate();

  // const {user , setUser } = React.useContext(UserDataContext)


 


  const submitHandler = (e)=>{
      e.preventDefault();
      console.log(email)
      console.log(password)
      
  //    const newUser= {
  //         fullname: {
  //             firstname: firstName,
  //         lastname: lastName,
  //         },
          
  //         email: email,
  //         password:password,

  //     }

      // const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)
      // console.log(response)
      // if(response.status === 201){
      //     const data = response.data;
      //     setUser(data.user);
      //     localStorage.setItem('token', data.token);
      //     navigate('/home');
           
      // }

      
     
      // if (email === "email@gmail.com" && password === "password") {
      //   alert("Login successful!");
      //   navigate("/users-home"); // Redirect user to Home page
      // } else {
      //   alert("Invalid credentials");
      // }
    
     
      setEmail('')
      setPassword('');
      navigate('/users-home');
  }
      
      


return (
  // <>

  // <div className="signUp">
  //     <h1>Create Account</h1>
  //     <p>Fill your information below or register with social account</p>

  //     <form action="">
  //         <label htmlFor="">Fullname</label>
  //         <input type="text" />
  //         <label htmlFor="">email</label>
  //         <input type="text" />
  //         <label htmlFor="">password</label>
  //         <input type="text" />


  //         <input type="submit" />
  //     </form>
  // </div>
  // </>



  <>
  <div className='flex flex-col gap-6   h-screen'>
      <div className='flex flex-col justify-center text-center items-center mt-8  '>
      <h1 className='text-2xl font-bold  capitalize '>Login</h1>
         {/* <p className='text-sm w-[15rem] '>Fill your information below or register with social account</p> */}

      </div>

      <div>
    

      <form action="" onSubmit={(e)=>{
      submitHandler(e);
     
     }} className='capitalize flex flex-col justify-center px-5 '>

      
         
          

          

          
          
          <h3 className=' mt-3'>email</h3>
          <input  className='bg-[#eeeeee] p-2  rounded-xl '  type="email" required name='email' placeholder='example@gmail.com'
          value={email}
          onChange={(e)=>{
              setEmail(e.target.value);
          }}
          />
          <h3 className=' mt-3'>password</h3>
          <div className='relative'>
          <input  className='bg-[#eeeeee] p-2  rounded-xl w-full '  type={showPassword ? "text" : "password"}  required name='password'  
          value={password}
          onChange={(e)=>{
              setPassword(e.target.value);
          }}
          
          />
          <div className='absolute top-3  text-[#b8b8b8] right-5 ' onClick={() => {
            setShowPassword(!showPassword) 
            
            
           } }>
            <p> {showPassword ? <RiEyeFill size={16}/> : <RiEyeOffFill/>}</p>
            
            </div>

          </div>
          
          <br />
          <button type='submit'  className={`bg-[var(--theme-color)] p-2 rounded-full text-white font-bold my-4`}>Login</button>





          
      </form>

      <div>
          <p className='flex items-center  w-full justify-center p-5'>don't  have an account?<Link className=" text-blue-700" to='/user-signup'>Create Account</Link></p>
      </div>
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
 
      
      
      
      </div>

     



      <div >
      {/* <Link to='/captain-signup' type='submit' className='bg-[#f0cc05] capitalize p-2 rounded text-white font-bold flex items-center w-full justify-center '>Sign Up as captain</Link> */}


      
      </div>
  </div>
  </>
)
}

export default UserLogin