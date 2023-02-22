import React from 'react';

// I want to use the project cards in the projects section so that the cards render on the screen underneath "Projects"

const Projects = () => {
  return (
    <div className='flex-col justify-center'>
        <p className='text-4xl text-center text-cyan-700'>
            Projects
        </p>
        <div className='flex justify-evenly border-4 border-solid border-blue-700 mt-5 pb-5 text-cyan-700 text-2xl'>
            <ul className='h-[full] w-[full]'>Project 1</ul>
            <ul className='h-[full] w-[full]'>Project 2</ul>
            <ul className='h-[full] w-[full]'>Project 3</ul>
            <ul className='h-[full] w-[full]'>Project 4</ul>
            <ul className='h-[full] w-[full]'>Project 5</ul>
        </div>
    </div>
  )
}

export default Projects