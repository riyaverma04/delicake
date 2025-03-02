import React ,{useState} from 'react'
import Cake_Explore from '../components/Cake_Explore'
import { RiArrowLeftFill, RiStarFill } from '@remixicon/react';

const Filtered_Cakes = ({selectedCake}) => {

    const [cakes, setCakes] = useState(Cake_Explore)
    const filteredCakes = selectedCake === "All"
    ? cakes
    : cakes.filter((cake) => cake.category.toLowerCase() === selectedCake.toLowerCase());
  return (
    <div className="cake-display-card">
        <div className="flex flex-wrap gap-4 p-4 ">
          {filteredCakes.length > 0 ? (
            filteredCakes.map((cake, index) => (
              <div key={index} className="bg-white flex gap-3 p-4 capitalize shadow-md rounded-md pb-10">
                <div className="cake-details">
                <p className="text-lg font-semibold">{cake.name}</p>
                
                <p className="text-green-500">Price: ₹{cake.price}</p>
                <p className='flex max-w-18 gap-1 items-center bg-gray-200 justify-center px-2 py-1 text-sm rounded-md my-3 '>4.5 <span><RiStarFill color='var(--theme-color)' size={18}/></span></p>
                <button className={`px-6 py-0.5 flex justify-center items-center gap-2 capitalize border-2  rounded-2xl text-[var(--theme-color)]   border-gray-400  cursor-pointer`}>Details <i className="fa-solid fa-chevron-right text-xs text-gray-400"></i></button>
                
                </div>
                <div className="cake-image relative flex flex-col justify-center">
                    <img src={cake.img} alt="a image"  className='w-[250px] rounded-xl '/>
                    {/* <button className={`px-6 py-0.5 flex justify-center items-center gap-2 capitalize absolute  rounded-sm border-2 border-[var(--theme-color)] text-[var(--theme-color)] font-semibold  bg-white top-37 left-10  text-sm  cursor-pointer`}>ADD</button> */}
                </div>
                
              </div>
            ))
          ) : (
            <p>No cakes found</p>
          )}
        </div>
      </div>
  )
}

export default Filtered_Cakes