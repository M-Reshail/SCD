import React from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Services from '../Components/Services';

function page() {
  return (
    <div className='bg-[#0a0e2a] text-white h-screen'>
      <Header />
      <Hero />
      <div className='mt-[20px]'>
        <p></p>
      </div>
      <Services />
    </div>
  )
}

export default page