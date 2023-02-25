import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; //need to add FaFileAlt to the imports for Resume icon
import whitebg from '../images/whitebg.jpg';

const Header = () => {
  return (
    <div classname='w-full h-[500px]'>
      <img class='w-full h-[500px] object-cover' src={whitebg} alt="white wall"/>
      <div class='bg-black/30 absolute top-0 left-0 w-full h-[500px]'/>
      <div class='absolute top-0 w-full h-[500px] flex flex-col justify-center text-white'>
        <div class='text-center'>
          <h1 class='font-bold text-5xl md:text-7xl drop-shadow-2xl'>My Portfolio</h1>
          <p class='text-center text-2xl mt-5'>Paul Morrow
            <p>Software Developer</p>
          </p>
        </div>
        <div className='flex justify-center pt-6'>
          {/*Need to get the links to open in a different window instead of redirecting me from portfolio*/}
          <div className='align-middle'>
            <a href='https://github.com/paulMorrow1' target='_blank' rel='noreferrer'><FaGithub className='h-[40px] w-[40px] ml-3'/></a>
            <div className='p-2'>Github</div>
          </div>
          <div className='ml-5'>
            <a href='https://www.linkedin.com/in/paul-morrow-swd/' target='_blank' rel='noreferrer'><FaLinkedin className='h-[40px] w-[40px] ml-4'/></a>
            <div className='p-2'>LinkedIn</div>
          </div>
          {/* <a href=''>{FaRegFileAlt}Resume</a> */}
        </div>
      </div>
    </div>
    
  )
    }

export default Header;