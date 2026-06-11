import React from 'react'
import { motion } from 'framer-motion'
import BookPublishCard from './BookPublishCard'
import { Books } from '../assets/assets'
import { FaArrowRight } from 'react-icons/fa'

const BookPublished = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='Books'
            className='py-20 bg-white-100'
        >
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4'>
                    <span className='text-purple'>My Published Books</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>A Published of my Recently Books</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                    {Books.map((Books, index) => (
                        <BookPublishCard key={index} {...Books} />
                    ))}
                </div>

                {/* <div className='flex gap-2'>
                    <a href="#" className='flex-1 text-center px-1 py-1 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'>
                    </a>
                </div> */}
                {/* <div className='text-center mt-12'>
                    <a href="#" className='inline-flex items-center px-6 py-3 border border-purple 
                    rounded-lg font-medium hover:bg-purple/20 transition duration-300'>
                        
                        <FaArrowRight className='ml-2' />
                    </a>
                </div> */}
            </div>
        </motion.div>
    )
}

export default BookPublished