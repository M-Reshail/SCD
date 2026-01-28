import React from 'react'

function Mycart({ icon: Icon, title, description, extra }) {
  return (
    <div className='rounded-lg overflow-hidden hover:shadow-xl transition-shadow bg-[#1a1f3a] p-6 flex flex-col gap-4 w-full md:w-80'>
      <div className='text-4xl text-blue-500 flex justify-center'>
        {Icon && <Icon />}
      </div>
      <h3 className='text-xl font-bold'>{title}</h3>
      <p className='text-sm text-gray-300'>{description}</p>
      <p className='text-xs font-semibold text-blue-400'>{extra}</p>
    </div>
  )
}
export default Mycart;