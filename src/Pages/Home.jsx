import React from 'react'
import Hero from '../Componants/Hero'
import About from '../Componants/About'
import Skill from '../Componants/Skill'
import Project from '../Componants/Project'
import Work from '../Componants/Work'
import Awards from '../Componants/Awards'
import Contact from '../Componants/Contact'
import BookPublished from '../Componants/BooksPublished'


// ALL pages -->> Home --> App.jsx

const Home = () => {
    return (
        <div className='container mx-auto px-6  bg-gray-100'>
            <Hero />
            <div className='flex gap-2'>
                <a href="#" className='flex-1 text-center px-1 py-1 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'>
                </a>
            </div>
            <About />
            <div className='flex gap-2'>
                <a href="#" className='flex-1 text-center px-1 py-1 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'>
                </a>
            </div>
            <Skill />
            <div className='flex gap-2'>
                <a href="#" className='flex-1 text-center px-1 py-1 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'>
                </a>
            </div>
            <Project />
            <div className='flex gap-2'>
                <a href="#" className='flex-1 text-center px-1 py-1 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'>
                </a>
            </div>
            <Work />
            <div className='flex gap-2'>
                <a href="#" className='flex-1 text-center px-1 py-1 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'>
                </a>
            </div>
            <Awards />
            <div className='flex gap-2'>
                <a href="#" className='flex-1 text-center px-1 py-1 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'>
                </a>
            </div>
            <BookPublished />
            <div className='flex gap-2'>
                <a href="#" className='flex-1 text-center px-1 py-1 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'>
                </a>
            </div>
            <Contact />


        </div>
    )
}

export default Home
