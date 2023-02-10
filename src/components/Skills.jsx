import React from 'react';
import skills from '../JSON/skills.json';

const Skills = () => {
  return (
    <div>
        <div className='bg-slate-600 w-full h-screen text-center text-2xl text-yellow-400'>Skills will go here!
            <div className='text-white text-2xl'>
                {skills.map((skill) => {
                    return ( <div key={skill.id}>
                        <div>{skill.name}</div>
                        <img src={skill.img} alt="skill"/>
                    </div>
                        
                    )
                })}
            </div>
            <div className='text-white text-2xl'></div>
        </div>
  </div>
  )
}

export default Skills