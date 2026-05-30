import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa'

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        setStatus("loading");
        try {
            const response = await fetch("https://portfolio-backend-production-3971.up.railway.app/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (result.success) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='contact'
            className='py-20 bg-gray-900'
        >
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4'>Get In <span className='text-purple'>Touch</span></h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have a project in mind or want to collaborate? let's talk!</p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                    {/* Contact Form */}
                    <div>
                        <div className='space-y-6'>
                            <div>
                                <label className='block text-gray-300 mb-2'>Your Name</label>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                                    type="text"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className='block text-gray-300 mb-2'>Email Address</label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                                    type="email"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label className='block text-gray-300 mb-2'>Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                                    placeholder="Enter your message"
                                />
                            </div>

                            {status === "success" && (
                                <p className='text-green-400 text-center'>✅ Message sent successfully!</p>
                            )}
                            {status === "error" && (
                                <p className='text-red-400 text-center'>❌ Something went wrong. Try again.</p>
                            )}

                            <button
                                type="button"
                                onClick={handleSubmit}
                                disabled={status === "loading"}
                                className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer'
                            >
                                {status === "loading" ? "Sending..." : "Send"}
                            </button>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className='space-y-8'>
                        <div className='flex item-start'>
                            <div className='text-purple text-2xl mr-4'><FaMapMarkerAlt /></div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Location</h3>
                                <p className='text-gray-400'>Kolhapur, Maharastra</p>
                            </div>
                        </div>
                        <div className='flex item-start'>
                            <div className='text-purple text-2xl mr-4'><FaEnvelope /></div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Email</h3>
                                <p className='text-gray-400'>ganeshmore1552@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex item-start'>
                            <div className='text-purple text-2xl mr-4'><FaPhone /></div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Phone No</h3>
                                <p className='text-gray-400'>+91 750765255</p>
                            </div>
                        </div>
                        <div className='pt-4'>
                            <h3 className='text-lg font-semibold mb-4'>Follow me</h3>
                            <div className='flex space-x-4'>
                                <a href="https://www.facebook.com/YWCKolhapur" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300'><FaFacebook /></a>
                                <a href="https://www.linkedin.com/in/yashwant-shitole-84aa5a36b/" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-blue-700 hover:text-white transition duration-300'><FaLinkedin /></a>
                                <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-blue hover:text-white transition duration-300'><FaTwitter /></a>
                                <a href="https://www.youtube.com/@careerkatta1" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink-500 hover:bg-pink-600 hover:text-white transition duration-300'><FaYoutube /></a>
                                <a href="https://www.instagram.com/yasswantshitole" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink-500 hover:bg-pink-600 hover:text-white transition duration-300'><FaInstagram /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact