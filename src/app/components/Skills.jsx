import Image from 'next/image'
import React from 'react'
import { FaHtml5,FaCss3Alt,FaReact,FaNodeJs,FaJava } from "react-icons/fa";
import { IoLogoJavascript,IoLogoFirebase } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si"

const Skills = () => {
  return (
    <div className=' w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest text-[#5651e5]'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          
          <div className=' p-6 shadow-xl rounded-xl hover:scale-105 hover:text-orange-500 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <FaHtml5 size={50}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                  <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className=' p-6 shadow-xl rounded-xl hover:scale-105 hover:text-blue-600 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <FaCss3Alt  size={50}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                  <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className=' p-6 shadow-xl rounded-xl hover:scale-105 hover:text-yellow-400 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <IoLogoJavascript size={50}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                  <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className=' p-6 shadow-xl rounded-xl hover:scale-105 hover:text-blue-400 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <FaReact size={50}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                  <h3>React</h3>
              </div>
            </div>
          </div>
          <div className=' p-6 shadow-xl rounded-xl hover:scale-105 hover:text-blue-400 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiTailwindcss size={50}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                  <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className=' p-6 shadow-xl rounded-xl hover:scale-105 hover:text-green-700 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <FaNodeJs size={50}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                  <h3>NodeJS</h3>
              </div>
            </div>
          </div>
          <div className=' p-6 shadow-xl rounded-xl hover:scale-105 hover:text-orange-500 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <FaJava size={50}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                  <h3>JAVA</h3>
              </div>
            </div>
          </div>
          <div className=' p-6 shadow-xl rounded-xl hover:scale-105 hover:text-yellow-500 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <IoLogoFirebase size={50}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                  <h3>Firebase</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills