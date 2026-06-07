import React from 'react'

const ProjectCard = ({ title, description, image, tech }) => {
    return (
        <div className='bg-white rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>
            <img src={image} alt={title} className='w-full h-50 object-cover object-center' />
            <div className='p-6'>
                <h3
                 className='text-xl text-black font-bold mb-2'>{title}</h3>
                <p className='text-gray-700 mb-4'>{description}</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                    {tech.map((item, index) => (
                        <span key={index} className='px-3 py-1 bg-dark-400 rounded-full text-sm'>
                            {item}
                        </span>
                    ))}
                </div>
                <div className='flex gap-2'>
                    <a href="#" className='flex-1 text-center px-2 py-1 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard