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
        <div>
            <Hero />
            <About />
            <Skill />
            <Project />
            <Work />
            <Awards />
            <BookPublished />
            <Contact />


        </div>
    )
}

export default Home
