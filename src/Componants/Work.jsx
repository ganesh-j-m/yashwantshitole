import React from 'react'
import { motion } from 'framer-motion'
import { workData } from '../assets/assets'

const Work = () => {
    return (

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='experience'
            className='py-20 bg-white-100'
        >

            <div className='container mx-auto px-6  bg-gray-100'>
                <h2 className='text-3xl font-bold text-center mb-4'>
                    <span className='text-purple'>Work Experience</span>
                </h2>

                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>My Professional Journey so far</p>
                <div className='max-w-3xl mx-auto'>
                    <div className='space-y-12'></div>
                    {
                        workData.map((data, index) => (
                            <div key={index} className="relative 
                               before:content-[''] before:absolute before:left-0 
                               before:top-0 before:w-[ 2px ] before:h-full 
                             before:bg-purple cursor-pointer hover:-translate-y-2 
                               transition-all duration-300">

                                {/* TimeLine */}
                                <div className='absolute left-[-0.5rem ] top-0 w-6 h-6 
                                rounded-full bg-purple'>

                                </div>


                                {/* Box */}
                                <div className=' bg-white rounded-2xl p-6 mb-6'>
                                    <div className='flex justify-between items-start mb-2'>
                                        <h3 className='text-xl text-black font-bold'>{data.role}</h3>
                                        <span className='px-3 py-1 bg-blue text-white 
                                        rounded-full text-xs md:text-sm'>{data.duration}</span>

                                    </div>

                                    <p className='text-gray-600 mb-2'>{data.company}</p>
                                    <p className='text-gray-800 mb-2'>{data.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </motion.div>

    )
}

export default Work
