import React from 'react';


const Footer = () => {
  return (
    <div className='bg-teal-700 h-full w-full'>
        <h2 className='text-4xl text-white flex justify-center pt-8 pb-3 animate-bounce'>Want to reach out? Contact me here!</h2>
        <div className='flex justify-evenly pt-3 pb-[50px]'>
            <p className='text-2xl text-teal-300 text-center'>
                email: pmorow93@gmail.com
                <p>(Make sure to only put one 'r', thanks to Verizon)</p>
            </p>
            <p className='text-2xl text-teal-300'>
                Mobile: (402)657-7972
            </p>
        </div>
    </div>
  )
}

export default Footer