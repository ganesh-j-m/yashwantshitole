import React from 'react'
import { motion } from 'framer-motion'
import BookPublishCard from './BookPublishCard'
import { Books } from '../assets/assets'
import { FaArrowRight } from 'react-icons/fa'

const BookPublished = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.05 }}
            id='Books'
            className='py-20 bg-gray-100'
        >
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4'>
                    <span className='text-purple'>My Published Books</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>A selection of my Recently work</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                    {Books.map((Books, index) => (
                        <BookPublishCard key={index} {...Books} />
                    ))}
                </div>
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