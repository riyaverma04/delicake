import React, { useState } from 'react'
// import { RiArrowLeftFill} from '@remixicon/react'
import { Link } from 'react-router-dom'
import '../styles/explore.css'

import Filtered_Cakes from '../components/Filtered_Cakes'
import BackArrow from '../components/BackArrow'








const categories = ["All","chocolate", "strawberry", "vanilla", "red velvet", "blueberry", "pineapple", "mango", "oreo", "white chocolate", "Gaming"];

const Explore = () => {
 
  
  
  const  [selectedCake , setSelectedCake] = useState("All");


 

 

 



 

  

  return (
    <>
   <div className="explore-container h-aut0 relative">
    <div className="sticky top-0  z-50 left-0 bg-white">
    <div className='p-5' >
     <Link to='/users-home' className='flex capitalize items-center gap-2 text-xl  w-full  '><BackArrow/> cake</Link>



      
    </div>

    
    
    <div className=" categories w-full overflow-x-auto whitespace-nowrap scrollbar-hide shadow-xl">
      <div className="flex space-x-4 pt-2 px-5  pb-4 capitalize">
        {categories.map((category, index) => (
          <button key={index} className={`px-6 py-1 flex justify-center items-center capitalize border-2 text-black rounded-md  ${selectedCake === category ? " border-[var(--theme-color)]" : "border-black"} cursor-pointer`} onClick={()=>setSelectedCake(category)}>
            {category}
          </button>
        ))}
      </div>
    </div>
    </div>
    <Filtered_Cakes selectedCake={selectedCake}/>
   
   </div>

   


  {/* Display Filtered Cakes */}
  
  

   
    </>
  )
}

export default Explore