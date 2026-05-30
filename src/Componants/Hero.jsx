import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='home'
            className="min-h-screen flex items-center pt-20 pb-16 bg-linear-to-r from-white-100 via-white-300 to-white-100"
        >
            <div className='container mx-auto px-6 flex flex-col-reverse md:flex-row 
            items-center justify-between gap-10'>

                {/* Left side content */}
                <div className='md:w-1/2 text-center md:text-left'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                        <span className='text-gray-700'>Hi, I'm</span> <br />
                        <span className='text-purple'>Yashwant</span>
                    </h1>
                    <h2 className='text-2xl text-blue md:text-4xl font-semibold mb-6 mx-auto md:mx-0'
                        style={{
                            overflow: 'hidden',
                            borderRight: '2px solid purple',
                            whiteSpace: 'nowrap',
                            animation: 'typing 2.5s steps(22) forwards, blink 0.7s step-end infinite',
                            width: 'fit-content',
                            maxWidth: '100%'
                        }}>
                        President and Founder of 
                    </h2>
                    <p className='text-lg text-gray-800 mb-8'>
                        "Maharastra Information Technology Support Centre"
                    </p>
                    <div className='flex space-x-4 justify-center md:justify-start'>
                        <a href="#projects" className='px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'>
                            View Work
                        </a>
                        <a href="#contact" className='px-6 py-3 border border-purple text-black rounded-lg font-medium hover:bg-purple/20 transition decoration-purple-300'>
                            Contact me
                        </a>
                    </div>
                </div>

                {/* Right side Image */}
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-56 h-56 md:w-96 md:h-96">
                        <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple-500 to-pink-500 animate-pulse opacity-70" />
                        <motion.img
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut"
                            }}
                            className="relative w-full h-full rounded-full object-cover"
                            src={assets.profileImg}
                            alt="profile"
                        />
                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default Hero