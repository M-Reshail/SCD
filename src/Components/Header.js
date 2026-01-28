import React from 'react';

export default function Header() {
  return (
    <div className='flex items-center justify-between px-10 py-5'>
      <p className='font-bold'>HOME</p>
      <button className='bg-blue-600 px-10 py-2.5 rounded-[10px]'>CV</button>
    </div>
  );
}
