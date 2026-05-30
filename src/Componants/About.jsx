import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'

const About = () => {
    return (
        // Effect
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='about'
            className='py-20 bg-white-200'
        >
            <div className='container mx-0 px-6'>
                {/* heading */}
                <h2 className='text-4xl font-bold text-center mb-4'><span className='text-purple'> About</span> <span className='text-purple'>Me</span></h2>
                <p className='text-gray-800 text-center max-w-2xl mx-auto mb-16'  >Get to know about my background and passion</p>

                {/* img + my journey */}
                <div className='flex flex-col md:flex-row items-center gap-12'>
                    {/* Image */}
                    <div className='md:w-1/2 rounded-2xl overflow-hidden '>
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 2 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.2 }}
                            className='w-full h-full object-cover ml-5'
                            src={assets.projectImg0} alt="profile" />
                    </div>
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        viewport={{ once: false, amount: 0.2 }}
                        className='md:w-1/2'
                    >
                        <div className='rounded-2xl p-8'>
                            <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                            <p className='text-gray-800 mb-6'><b>Founder and President:</b> Mr. Yashwant Shitole is the Founder and President of the Maharashtra Information Technology Support Center (MITSC), dedicated to empowering the state's youth </p>
                            <p className='text-gray-800 mb-6'><b>Visionary Leader:</b> He is a prominent entrepreneur, educator, and social leader driving massive digital literacy and career guidance initiatives across Maharashtra </p>
                            <p className='text-gray-800 mb-6'><b>State Coordinator:</b> As the key visionary and State Coordinator, he successfully leads the "Career Katta" initiative in collaboration with the Maharashtra State Department of Higher and Technical Education. </p>
                            <p className='text-gray-800 mb-6'><b>Champion of Rural Youth:</b> He actively focuses on bridging the gap between urban and rural students by providing professional counseling and industry-ready skills directly to regional colleges. </p>
                            <p className='text-gray-800 mb-6'><b>World Record Achiever:</b> Under his guidance, MITSC achieved recognition from the World Book of Records (UK) for providing digital productivity training to 111,111 students within a 12-hour window. </p>
                            <p className='text-gray-800 mb-6'><b>Promoter of Competitive Excellence:</b> He spearheaded the "IAS Aaplya Bhetila" (IAS Visits You) initiative, creating an accessible ecosystem for thousands of regional students preparing for administrative careers. </p>
                            <p className='text-gray-800 mb-6'><b>Fostering Entrepreneurship:</b> Through programs like "Udyojak Aaplya Bhetila", he connects college students with experienced business leaders to inspire local entrepreneurship and job creation. </p>
                            <p className='text-gray-800 mb-6'><b>Massive Scale Impact:</b>His leadership has enabled MITSC to positively impact over 200,000 students through a network of more than 100 Youth Welfare Centers. </p>
                            <p className='text-gray-800 mb-6'><b>Policy & Incubation Advocate:</b> He works continuously to establish incubation centers and Model Skill Development Centers within higher education institutions to boost student employability. </p>
                            <p className='text-gray-800 mb-6'><b>Grassroots Operator:</b> He regularly travels across various districts in Maharashtra to personally conduct Student Interaction Programs and establish regional "Career Parliaments." </p>


                        </div>

                        {/* cards */}

                    </motion.div>
                </div >
            </div >

        </motion.div >
    )
}

export default About
