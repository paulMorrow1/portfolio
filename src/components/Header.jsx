import React from 'react';
import background from '../images/background.jpg';

// I WANT THE WOODEN BACKGROUND PIC AS THE BACKGROUND EVEN WHEN I AM SCROLLING
// I WANT TO BE ABLE TO SEE IT IN BETWEEN EACH SECTION
// I.E. BETWEEN THE ABOUT ME SECTION AND THE SKILLS SECTION ETC


const Header = () => {
  return (
    <div classname='w-full h-[500px]'>
      <img class='w-full h-[500px] object-cover' src={background} alt="wooden blue wall"/>
      <div class='bg-black/30 absolute top-0 left-0 w-full h-[500px]'/>
      <div class='absolute top-0 w-full h-[500px] flex flex-col justify-center text-white'>
        <div class='text-center'>
          <h1 class='font-bold text-5xl md:text-7xl drop-shadow-2xl'>My Portfolio</h1>
          <p class='text-center text-2xl mt-5'>Paul Morrow
            <p>Software Developer</p>
          </p>
        </div>
      </div>
    </div>
    
  )
    }

export default Header;