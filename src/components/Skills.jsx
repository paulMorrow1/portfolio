import React from 'react';
import skills from '../JSON/skills.json';

const Skills = () => {
  return (
    <div className='w-full h-full'>
        <div className='bg-gradient-to-r from-sky-800/80 to-sky-500 text-center text-6xl text-cyan-300 pt-3 pb-5'>My Skills:
            <div className='text-cyan-300 text-2xl flex justify-evenly mt-3 pt-3'>
                {skills.map((skill) => {
                    return ( <div className="border-4 border-solid border-white p-5 m-5 "key={skill.id}>
                        <div className='underline'>{skill.name}</div>
                        <img className='h-[100px]' src={skill.img} alt="skill"/>
                    </div>
                        
                    )
                })}
            </div>
        </div>
  </div>
  )
}

export default Skills