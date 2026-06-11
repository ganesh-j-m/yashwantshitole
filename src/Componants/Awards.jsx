import React from 'react'
import { motion } from 'framer-motion'
import { awardsData } from '../assets/assets'

const Awards = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='awards'
            className='py-20 bg-dark-500'
        >
            <div className='container mx-auto px-6 bg-gray-100 '>
                <h2 className='text-3xl font-bold text-center mb-4'>
                    <span className='text-purple'>Awards</span>
                </h2>

                <p className='text-gray-600 text-center max-w-2xl mx-auto mb-16'>"Awards are not a reflection of success, but a receipt of dedication."</p>
                <div className='max-w-3xl mx-auto'>
                    <div className='space-y-12'></div>
                    {
                        awardsData.map((data, index) => (
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
                                <div className='bg-white text-black rounded-3xl p-6 mb-6'>
                                    <div className='flex justify-between items-start mb-2'>
                                        <h3 className='text-xl font-bold'>{data.role}</h3>
                                        <span className='px-3 py-1 bg-black/50 text-white 
                                        rounded-full text-xs md:text-sm'>{data.duration}</span>

                                    </div>

                                    <p className='text-gray-500 mb-2'><b>{data.company}</b></p>
                                    <p className='text-black-300 mb-2'>{data.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default Awards
