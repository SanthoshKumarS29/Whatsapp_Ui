import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";

const Third = () => {
  return (
    <div className='bg-[#1e1e1e] w-full p-56 hidden md:block'>
      <div className='flex flex-col justify-center items-center'>
        <FaWhatsapp className='text-[#333333] text-7xl'/>
        <h1 className='text-white mt-5'>Whatsapp For windows</h1>
        <p className='text-[#CCCCCC] text-sm font-medium mt-2'>send and receive message without keeping phone online</p>
        <p className='text-[#CCCCCC] text-sm font-medium '>Use Whatsapp up to 4 linked device and 1 phone at the same time</p>
      </div>
    </div>
  )
}

export default Third
