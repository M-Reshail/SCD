import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube, FaLinkedin, FaBriefcase } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";

function page() {
  return (
    <div className='bg-[#0a0e27] text-white min-h-screen'>
      {/* Header Section */}
      <div className='flex items-center justify-between px-16 py-4'>
        <p className='text-xl font-bold'>logo</p>
        <button className='bg-blue-500 hover:bg-blue-600 px-8 py-2 rounded-md text-sm font-medium transition-colors'>Get CV</button>
      </div>

      {/* Hero Section */}
      <div className='max-w-4xl mx-auto flex flex-col items-center px-8 py-16 text-center'>
        <h1 className='text-5xl md:text-6xl font-light mb-3'>Mr John</h1>
        <h3 className='text-lg font-light mb-6'>Actor and Artist</h3>
        <p className='text-sm leading-relaxed mb-8 max-w-2xl text-gray-300'>
          John Wick is a NYC-based actor whose work stands at the cross-roads of stand-up theater and educational films. His performances are enhanced by his natural flair for personality. A Shaw Scholar Elect, he is the recipient of The Queen Mary's Travelling Scholarship Award and the Public Speaking Prize. He is currently a member of the Comedy Club.
        </p>
        
        {/* Social Icons */}
        <div className='flex gap-8 mb-10'>
          <FaFacebook className='h-6 w-6 cursor-pointer hover:text-blue-500 transition-colors'/>
          <FaYoutube className='h-6 w-6 cursor-pointer hover:text-red-500 transition-colors'/>
          <FaLinkedin className='h-6 w-6 cursor-pointer hover:text-blue-400 transition-colors'/>
        </div>
        
        {/* Profile Image */}
        <img 
          className='w-40 h-40 rounded-full object-cover border-4 border-gray-700 mb-16' 
          src='/images.jfif' alt='John Wick' 
        />

        {/* Services Section */}
        <div className='w-full max-w-6xl'>
          <h2 className='text-3xl font-bold mb-4 text-center'>Services I Offer</h2>
          <p className='text-center text-gray-300 mb-12 max-w-3xl mx-auto'>
            John Wick is a NYC-based actor whose work stands at the cross-roads of stand-up theater and educational films. His performances are enhanced by his natural flair for personality, humor, and the ability to make intricate and exacting subject matter into laughter and entertainment. Automatically, John's latest Michaels Original.
          </p>
          
          {/* Service Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Card 1 */}
            <div className='rounded-lg overflow-hidden hover:shadow-xl transition-shadow'>
              <img src='/images.jfif' alt='Service 1' className='w-full h-80 object-cover' />
            </div>
            
            {/* Card 2 */}
            <div className='rounded-lg overflow-hidden hover:shadow-xl transition-shadow'>
              <img src='/images.jfif' alt='Service 2' className='w-full h-80 object-cover' />
            </div>
            
            {/* Card 3 */}
            <div className='rounded-lg overflow-hidden hover:shadow-xl transition-shadow'>
              <img src='/images.jfif' alt='Service 3' className='w-full h-80 object-cover' />
            </div>

            {/* Card 4 */}
            <div className='rounded-lg overflow-hidden hover:shadow-xl transition-shadow'>
              <img src='/images.jfif' alt='Service 4' className='w-full h-80 object-cover' />
            </div>

            {/* Card 5 */}
            <div className='rounded-lg overflow-hidden hover:shadow-xl transition-shadow'>
              <img src='/images.jfif' alt='Service 5' className='w-full h-80 object-cover' />
            </div>

            {/* Card 6 */}
            <div className='rounded-lg overflow-hidden hover:shadow-xl transition-shadow'>
              <img src='/images.jfif' alt='Service 6' className='w-full h-80 object-cover' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page