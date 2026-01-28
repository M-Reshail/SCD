import React from 'react';
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Hero() {
  return (
    <div className='w-[40%] m-auto flex flex-col items-center p-10 gap-3.5'>
      <h1 className='text-4xl text-blue-500 font-bold'>Mr John</h1>
      <h3>Actor and Artist</h3>
      <p>This is an example of a personal portfolio website.</p>
      <div className='w-62.5 flex justify-between'>
        <FaFacebook className='h-[24px] w-[24px]'/>
        <FaYoutube className='h-[24px] w-[24px]'/>
        <RiInstagramFill className='h-[24px] w-[24px]'/>
      </div>
      <img src='/images.jfif' alt='Reshail' className='w-[150px] h-[150px] rounded-full object-cover' />
    </div>
  );
}
