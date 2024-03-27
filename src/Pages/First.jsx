import React from 'react'
import { AiOutlinePhone,
    AiOutlineMessage,
    AiOutlineStar,
    AiOutlineSetting,} from 'react-icons/ai'
import { BsArchive } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { HiOutlineStatusOnline } from "react-icons/hi";

const First = () => {
  return (
    <div className='h-lvh w-12 bg-[#202020] text-white hidden md:block'>
        <div className='flex flex-col h-lvh justify-between py-4'>   
        <div className='flex flex-col gap-2 items-center justify-center'>
            <div>
            <AiOutlineMessage className='text-4xl hover:bg-[#2f3136] duration-500 p-2'/>
            </div>
            <div>
            <AiOutlinePhone className='origin-center rotate-90 text-4xl hover:bg-[#2f3136] duration-100 p-2'/>
            </div>
            <div>
            <HiOutlineStatusOnline className='text-4xl hover:bg-[#2f3136] duration-100 p-2' />
            </div>
        </div>
        <div className='flex flex-col gap-2 justify-center items-center'>
            <div>
            <AiOutlineStar className='text-4xl hover:bg-[#2f3136] duration-100 p-2'/>
            </div>
            <div>
            <BsArchive className='text-4xl hover:bg-[#2f3136] duration-100 p-2'/>
            </div>
            <div>
            <AiOutlineSetting className='text-4xl hover:bg-[#2f3136] duration-100 p-2'/>
            </div>
            <div>
            <CgProfile className='text-4xl hover:bg-[#2f3136] duration-100 p-2'/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default First
