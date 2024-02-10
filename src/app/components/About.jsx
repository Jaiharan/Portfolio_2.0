import React from 'react'
import Image from 'next/image'
import AboutImage from "../assets/about-image.jpg"

const About = () => {
  return (
    <div className=' w-full md:h-screen p-2 flex items-center py-16'>
      <div className=' max-w-[1240px] m-auto md:grid grid-cols-3 gap-4'>
        <div className=' col-span-2'>
          <p className=' uppercase text-xl font-semibold tracking-widest text-[#5651e5]'>About</p>
          <h2 className=' py-2 text-gray-600'>Want to Know About Me?</h2>
          <p className=' py-2 text-gray-600'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi! I'm Jaiharan, My educational journey at Computer Science revolves around honing skills in full-stack development, particularly focusing on JavaScript & Java, the backbone of modern web applications. 
          - Passionate Full Stack Developer with a strong foundation in Java & JavaScript and an extensive background in crafting innovative web experiences. 
          - Dedicated to staying abreast of industry trends and committed to transforming coding enthusiasm into impactful solutions.</p>
          <p className=' py-2 text-gray-600 underline cursor-pointer hover:text-[#5651e5] duration-500'>Check out some of my latest projects</p>
        </div>
        <div className=' w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image className=' rounded-xl' src={AboutImage} alt="/" />
        </div>
      </div>
    </div>
  )
}

export default About