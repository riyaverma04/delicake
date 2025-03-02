import React,{useState} from 'react'
import BackArrow from '../components/BackArrow'
import {  User, Wallet, Settings, CreditCard } from "lucide-react";
import { Link, useLocation } from "react-router-dom";






const UserProfile = () => {
    const location = useLocation();

     const [active, setActive] = useState(location.pathname);
    const profileLinks = [
        { name: "Your profile", path: "/your-profile", icon: <User size={26} /> },
        { name: "My Wallet", path: "/user-wallet", icon: <Wallet size={26} /> },
        { name: "setting", path: "/user-profile-setting", icon: <Settings size={26} /> },
        { name: "Payment Method", path: "/user-payment-method", icon: <CreditCard size={26} /> },
      ];


      


    
  return (

    <>
    <div className='flex justify-between items-center w-[50vw] py-4 px-3'>
        <BackArrow/>
        <h1 className='font-semibold capitalize '>profile</h1>
    </div>
    <div className='flex flex-col my-6 gap-3 justify-center items-center '>
        <div className='w-[100px] overflow-hidden h-[100px] rounded-full bg-red-300'>
        <img src="https://www.shutterstock.com/image-photo/portrait-one-young-happy-cheerful-600nw-1980856400.jpg" alt=""   className='fill '/>
        </div>
        <p className='font-semibold'>username</p>
    </div>
    <div className="flex flex-col gap-4 px-3  ">
    {profileLinks.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          onClick={() => setActive(item.path)}
          className={`flex  gap-3 border-b-2 border-black font-semibold itmes-center  py-3  transition-all text-[var(--theme-color)]
          }`}
        >
          {item.icon}
          <span className="text-md text-black ">{item.name}</span>
        </Link>
      ))}
    </div>
    
    </>
  )
}

export default UserProfile