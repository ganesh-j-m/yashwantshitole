import React from 'react'
// Icon's 
import { FaBars, FaXmark } from "react-icons/fa6";

const Navabr = () => {
    // Usestate
    const [showMenu, setShowMenu] = React.useState(false);

    return (
        <nav className='fixed w-full z-50 bg-white text-black backdrop-blur-sm py-4 px-8 shadow-lg'>
            <div className='container mx-auto flex justify-between items-center'>

                <div>
                    <a href="#" className='text-3xl font-bold text-purple'>
                        Yashwant Shitole
                       
                        <div className='w-4 h-4 bg-purple rounded-full'></div>
                    </a>
                </div>

                <div className='hidden md:flex space-x-10'>
                    <a href="#home" className='relative text-black/80 transition duration-300 hover:text-purple group'>
                        <span>Home</span>

                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                    </a>

                    <a href="#about" className='relative text-black/80  transition duration-300 hover:text-purple group'>
                        <span>About</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                    </a>

                    <a href="#skills" className='relative text-black/80 transition duration-300 hover:text-purple group'>
                        <span>Skills</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                    </a>

                    <a href="#projects" className='relative text-black/80 transition duration-300 hover:text-purple group'>
                        <span>Projects</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                    </a>


                    {/* <a href="#experience" className='relative text-black/80 transition duration-300 hover:text-purple group'>
                        <span>Work Experience</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                    </a> */}


                    <a href="#awards" className='relative text-black/80 transition duration-300 hover:text-purple group'>
                        <span>Awards</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                    </a>

                    <a href="#Books" className='relative text-black/80 transition duration-300 hover:text-purple group'>
                        <span>Books Published</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                    </a>

                    <a href="#contact" className='relative text-black/80 transition duration-300 hover:text-purple group'>
                        <span>Contact</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                    </a>

                </div>

                {/* Mobile Menu Icon */}

                <div className="md:hidden text-black/80">
                    {
                        showMenu ?

                            <FaXmark onClick={() => setShowMenu(!showMenu)} className="text-2xl cursor-pointer" /> :
                            <FaBars onClick={() => setShowMenu(!showMenu)} className="text-2xl cursor-pointer" />
                    }


                </div>

            </div>

            {/* Mobile Menus */}

            {
                showMenu && (
                    <div className='md:hidden mt-4 bg-white-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center'>
                        <a onClick={() => setShowMenu(!showMenu)} href="#home" className='relative text-black-bold transition duration-300 hover:text-purple group'>
                            <span><b>Home</b></span>
                        </a>

                        <a onClick={() => setShowMenu(!showMenu)} href="#about" className='relative text-black/90 transition duration-300 hover:text-purple group'>
                            <span><b>About</b></span>
                        </a>

                        <a onClick={() => setShowMenu(!showMenu)} href="#skills" className='relative text-black/90 transition duration-300 hover:text-purple group'>
                            <span><b>Skills</b></span>
                        </a>

                        <a onClick={() => setShowMenu(!showMenu)} href="#projects" className='relative text-black/90 transition duration-300 hover:text-purple group'>
                            <span><b>Projects</b></span>
                        </a>

                        <a onClick={() => setShowMenu(!showMenu)} href="#experience" className='relative text-black/80 transition duration-300 hover:text-purple group'>
                            <span><b>Experience</b></span>
                        </a>

                        <a onClick={() => setShowMenu(!showMenu)} href="#achivement" className='relative text-black/80 transition duration-300 hover:text-purple group'>
                            <span><b>Achivement</b></span>
                        </a>

                        <a onClick={() => setShowMenu(!showMenu)} href="#contact" className='relative text-black/80 transition duration-300 hover:text-purple group'>
                            <span><b>Contact</b></span>
                        </a>
                    </div>
                )
            }



        </nav>
    )
}

export default Navabr