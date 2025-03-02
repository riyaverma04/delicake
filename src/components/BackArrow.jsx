import React from 'react'
import { RiArrowLeftFill } from "@remixicon/react";

const BackArrow = () => {
  return (
    <button onClick={() => window.history.back()} className="flex items-center gap-2 text-lg">
      <RiArrowLeftFill size={24} /> 
    </button>
  )
}

export default BackArrow