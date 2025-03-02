import React from 'react'
import Carousel from '../components/Carousel'
import Search from '../components/Search'
import { RiArrowDownLine, RiArrowDownWideLine, RiUserLocationLine } from '@remixicon/react'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'

const UserHome = () => {
    const searchHandle =()=>{

    }
  return (
    <>
    
    <div className='bg-[var(--theme-color)] m-0 w-full h-[100px] rounded-b-4xl p-5 pt-2 flex flex-col gap-2'>
        <div className="user-location text-white mb-3 flex gap-2 items-center">
        <i className="fa-solid fa-location-dot"></i><p className='text-xs'>Deliver to</p>
        </div>
    <Search onClick={searchHandle}/>

    </div>

    {/* special offer */}
    <div className="p-5">

    <div className="special-offer w-full flex flex-col gap-5">
        <div className='flex justify-between items-center capitalize text-sm'>
            <p>special offers</p>
            <p className='text-[var(--theme-color)]'><a href="#"> see all</a></p>
        </div>
        
        <Carousel/>
    </div>


    {/* categories */}
    <div className='py-5 w-full flex flex-col gap-5 '>
    <div className='flex justify-between items-center capitalize text-sm'>
            <p>categories</p>
            <p className='text-[var(--theme-color)]'><a href="#"> see all</a></p>
        </div>
        <Categories/>
    </div>
    </div>

    {/* <div className="navbar-container">
        <Navbar/>
    </div> */}


    
    
    </>
  )
}

export default UserHome