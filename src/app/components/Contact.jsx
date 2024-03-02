import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import {FaInstagram , FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from 'next/link';

const Contact = () => {
  return (
    <div id='contact' className=' w-full lg:h-screen'>
        <div className=' max-w-[1240px] m-auto px-2 py-16 pb-10 w-full' >
          <p className=' text-xl tracking-wider uppercase text-[#5651e5]'>Contact</p>
          <h2 className=' py-4'>Get in Touch</h2>
          <div className=' grid lg:grid-cols-5 gap-8'>
{/* left */}
      <div className=' col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
        <div className=' lg:p-4'>
          <img className=' rounded-xl hover:scale-105 ease-in duration-300' width="400px" src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div>
          <h2 className=' py-2 italic'>Jaiharan</h2>
          <p>Software Developer</p>
          <p className=' py-4'>I'm available for Freelance or Full-time positions. Contact me and let's talk.</p>
        </div>
        <div>
          <p className=' uppercase pt-8 text-gray-800 font-medium'>Connect with me</p>
          <div className=' flex items-center justify-between py-4'>
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

          {/* right */}
          <div className=' col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className=' p-4'>
              <form>
                <div className=' grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className=' flex flex-col'>
                    <label className=' uppercase text-sm py-2'>Name</label>
                    <input className=' border-2 rounded-lg p-3 flex border-gray-300 ' type="text"/>
                  </div>
                  <div className=' flex flex-col'>
                    <label className=' uppercase text-sm py-2'>Phone Number</label>
                    <input className=' border-2 rounded-lg p-3 flex border-gray-300 ' type="text"/>
                  </div>
                </div>
                <div className=' flex flex-col py-2'>
                  <label className=' uppercase text-sm py-2'>Email</label>
                  <input className=' border-2 rounded-lg p-3 flex border-gray-300 ' type="email"/>
                </div>
                <div className=' flex flex-col py-2'>
                  <label className=' uppercase text-sm py-2'>Subject</label>
                  <input className=' border-2 rounded-lg p-3 flex border-gray-300 ' type="text"/>
                </div>
                <div className=' flex flex-col py-2'>
                  <label className=' uppercase text-sm py-2'>message</label>
                  <textarea  className=' border-2 rounded-lg p-3 border-gray-300' rows='10'/>
                </div>
                <button className=' w-full p-4 text-gray-100 mt-4'>Send Message</button>
              </form>
            </div>
          </div>
          </div>
          <div className=' flex justify-center py-12'>
            <Link href='/'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-200'>
                <HiOutlineChevronDoubleUp className=' text-[#5651e5]' size={30}/>
              </div>
            </Link>
          </div>
        </div>
        <div className=' w-full flex items-center justify-center'>
          <p className=' text-gray-900 pb-2'>Copyright@2023. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Contact