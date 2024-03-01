import React from 'react'
import projectImage1 from '../assets/about-image.jpg'
import ProjectItems from './ProjectItems'

const Projects = () => {
  return (
    <div className=' w-full'>
      <div className=' max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2>What I've Built</h2>
        <div className=' grid md:grid-cols-2 gap-8'>

          <ProjectItems 
            title='INAMINUTE BLOG APP' 
            backgroundImg={projectImage1} 
            projectUrl='https://github.com/Jaiharan/Blog-frontend' 
          />
          <ProjectItems 
            title='CHAT APP' 
            backgroundImg={projectImage1} 
            projectUrl='/blog' 
          />
        </div>
      </div>
    </div>
  )
}

export default Projects