import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import {FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Link from 'next/link';

const Main = () => {
  return (
    <div id='home' className=' w-full h-screen text-center'>
      <div className=' max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className=' uppercase text-sm tracking-widest text-gray-600'>LET'S BUILD SOMETHING TOGETHER</p>
          <h1 className=' py-2 text-gray-700'>Hi, I'm <span className=' text-[#5651e5]'>Jai</span>haran</h1>
          <h1 className=' py-2 text-gray-700'>A Software Developer</h1>
          <p className=' py-4 text-gray-600 max-w-[70%] m-auto'>I'm Software Developer specializiing in building End-to-End Web Applications. Currently I'm focused on building Responsive Web Application and Backend Services.</p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-200'>
              <Link href='https://www.linkedin.com/in/jaiharan-s/'>
                <FaLinkedinIn />
              </Link>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-200'>
              <Link href='https://github.com/Jaiharan'>
                <FaGithub />
              </Link>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-200'>
              <Link href='mailto:jaiharan1618@gmail.com'>
                <AiOutlineMail />
              </Link>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-200'>
              <Link href='https://www.instagram.com/jai.__.725/'>
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main