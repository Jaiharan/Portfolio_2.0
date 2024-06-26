"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import NavImage from "../assets/navbar-logo.jpg"
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import { IoIosMail } from "react-icons/io";

const Navbar = () => {
  const [nav,setNav] = useState(false);
  const [shadow,setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    }
    window.addEventListener('scroll',handleShadow);
  },[])

  useEffect(() => {
    // Your side effect or action when nav changes
    console.log('Nav has changed:', nav);
  }, [nav]);
  return (
    <div className={ shadow ? 'fixed w-full h-20 backdrop-blur shadow-xl z-[100]' : 'fixed w-full h-20 backdrop-blur z-[100]'}>
      <div className='flex justify-between items-center w-full px-2 2xl:px-16'>
        <Image src={NavImage} alt='/' width="70" height="30" className=' rounded-md mt-1'/>
        <div>
          <ul className='hidden md:flex'>
            <Link href='/' >
              <li className=' ml-10 text-sm uppercase hover:border-b hover:text-[#5651e5] hover:font-semibold hover:scale-105 ease-in duration-200'>Home</li>
            </Link>
            <Link href='/#about' >
              <li className=' ml-10 text-sm uppercase hover:border-b hover:text-[#5651e5] hover:font-semibold hover:scale-105 ease-in duration-200'>About</li>
            </Link>
            <Link href='/#skills' >
              <li className=' ml-10 text-sm uppercase hover:border-b hover:text-[#5651e5] hover:font-semibold hover:scale-105 ease-in duration-200'>Skills</li>
            </Link>
            <Link href='/#projects' >
              <li className=' ml-10 text-sm uppercase hover:border-b hover:text-[#5651e5] hover:font-semibold hover:scale-105 ease-in duration-200'>Projects</li>
            </Link>
            <Link href='/#contact' >
              <li className=' ml-10 text-sm uppercase hover:border-b hover:text-[#5651e5] hover:font-semibold hover:scale-105 ease-in duration-200'>Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className=' md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 duration-300' : ' duration-300'}>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-9 ease-in duration-300' : 'fixed left-[-100%] top-0 p-9 ease-in duration-300'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src={NavImage} alt='/' width={60} height={25} className=' rounded-md'/>
              <div onClick={handleNav} className=' rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'> 
                <AiOutlineClose size={20}/>
              </div>
            </div>
            <div className=' border-b border-gray-300 my-4'>
              <p className=' w-[85%] md:w-[90%] py-4 font-semibold'>Let's build something legendary together</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className=' uppercase'>
              <Link href='/'>
                <li className=' py-3 text-sm'>Home</li>
              </Link>
              <Link href='/#about'>
                <li className=' py-3 text-sm'>About</li>
              </Link>
              <Link href='/#skills'>
                <li className=' py-3 text-sm'>Skills</li>
              </Link>
              <Link href='/#projects'>
                <li className=' py-3 text-sm'>Projects</li>
              </Link>
              <Link href='/#contact'>
                <li className=' py-3 text-sm'>Contact</li>
              </Link>
            </ul>
            <div className=' pt-16'>
              <p className='uppercase tracking-wider text-[#5651e5]'>Let's Connect</p>
              <div className=' flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className=' rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                  <Link href='https://www.linkedin.com/in/jaiharan-s/'>
                    <FaLinkedinIn />
                  </Link>
                </div>
                <div className=' rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                  <Link href='https://github.com/Jaiharan'>
                    <FaGithub />
                  </Link>
                </div>
                <div className=' rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                  <Link href='mailto:jaiharan1618@gmail.com'>
                    <IoIosMail />
                  </Link>
                </div>
                <div className=' rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                  <Link href='https://www.instagram.com/jai.__.725/'>
                    <FaInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar