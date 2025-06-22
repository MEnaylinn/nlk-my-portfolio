import React from 'react'
import { PROJECTS } from '../constants'
import {motion} from 'framer-motion'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className='mb-20 text-4xl text-center'>Projects</motion.h1>
        <div>
            {PROJECTS.map((project,index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1}}
                className='w-full flex items-center justify-center lg:w-1/4'>
                        <img width={150} height={150} className='rounded-2xl mb-4' src={project.image} alt={project.title} />
                </motion.div>
                <motion.div
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1}}
                    className='w-full max-w-xl lg:w-3/4'>
                        <span className='mb-2 font-semibold'>{project.title}</span>      
                        <p className='mb-4 text-neutral-400'>
                            {project.description}
                        </p>
                        {project.technologies.map((tech,index)=>(
                            <span key={index} className='rounded bg-neutral-900 mr-2 px-2 py-1 text-purple-500 text-sm font-medium'>
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
            ))
            
            }
        </div>

    </div>
  )
}

export default Projects