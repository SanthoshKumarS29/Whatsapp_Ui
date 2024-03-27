import React from 'react'
import { RiChatNewLine } from "react-icons/ri";
import { LuListFilter } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";
import { TiTickOutline } from "react-icons/ti";
import img1 from '../assets/img3.jpg'
import img2 from '../assets/img4.jpg'
import img3 from '../assets/img5.jpg'

const Second = () => {


    // array with objects
    const detail = {
        proj: [
            {
                img: img1,
                des1: "Sk(You)",
                des2: "Yesterday",
                des3: "Hello Everyone",
                icon: <TiTickOutline />
            },
            {
                img: img2,
                des1: "Vijay",
                des2: "Today",
                des3: "Hello",
                icon: <TiTickOutline /> 
            },
            {
                img: img3,
                des1: "Bro",
                des2: "Yesterday",
                des3: "What Happen",
                icon: <TiTickOutline />
            },
            {
                img: img1,
                des1: "Harish",
                des2: "Yesterday",
                des3: "Hi ",
                icon: <TiTickOutline />
            },
            {
                img: img2,
                des1: "+91 9876734682",
                des2: "24/5/2024",
                des3: "",
                icon: <></>
            },
        ]
    }

    return (
        <div className='bg-[#1e1e1e] w-full md:w-96 text-white py-5 px-5 border-r-[1px] border-black'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-xl hidden md:block'>Chats</h1>
                    <div className='md:hidden'>
                    <h1 className='text-xl'>Whatsapp</h1>
                    </div>
                </div>
                <div className='flex gap-7'>
                    <RiChatNewLine className='text-xl' />
                    <LuListFilter className='text-xl' />
                </div>
            </div>
            <div className=' w-full bg-black p-1 mt-4 border-b-2 border-green-500'>
                <div className='flex justify-start items-center'>
                    <IoSearchSharp className='origin-center rotate-90 p-2 text-3xl' />
                    <input type='text' placeholder='search or start a new chat' className='bg-transparent w-[300px] focus:outline-none' />
                </div>
            </div>

            <div className='my-5 flex flex-col  gap-2 '>
                {detail.proj.map((project, index) => (
                    <div key={index} className='flex gap-4 items-center hover:bg-[#2f3136] py-3 px-2'>
                        <img src={project.img} className='border-0 rounded-full w-12 h-12' alt='Profile' />
                        <div className='w-[300px]'>
                            <div className='flex items-center justify-between'>
                                <h1>{project.des1}</h1>
                                <p className='text-sm'>{project.des2}</p>
                            </div>
                            <div className='flex items-center'>
                                <p className='font-extralight'>{project.icon}</p>
                                <p className='text-sm'>{project.des3}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>

            </div>

        </div>
    )
}

export default Second
