import React from 'react'
import background from '../images/background.jpg'


const Header = () => {
  return (
    <>
    <div class='w-full h-[500px]'>
      <img class='top-0 left-0 w-full h-[500px] object-cover' src={background} alt="brown huts on water"/>
      <div class='bg-black/30 absolute top-0 left-0 w-full h-[500px]'/>
      <div class='absolute top-0 w-full h-[500px] flex flex-col justify-center text-white'>
        <div class='text-center'>
          <p>Software Developer</p>
          <h1 class='font-bold text-5xl md:text-7xl drop-shadow-2xl'>My Portfolio</h1>
          <p class='text-center text-2xl mt-2'>Paul Morrow
          </p>
        </div>
      </div>
    </div>
      

    </>
    
    // <>
        /* <div className='w-full h-[400px] bg-blue-600'>
            <img className="object-cover h-full top-0 left-0 w-full" src={background} alt="background"/>
            <div className='bg-green-500 object-cover w-full h-full flex justify-center flex-col'>
                <div className='bg-yellow-500 w-1/2 ml-[250px] text-6xl'>Paul Morrow</div>
                <div className='bg-pink-500 mb-[600px] ml-[250px] w-1/2 text-3xl'>Software Developer</div>
            </div>
        </div>
        <div className='w-full h-[200px] bg-red-500'></div> */
    // </>
    
  )
    }

export default Header