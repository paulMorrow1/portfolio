import React from 'react';
import AboutMe from './AboutMe';
import Footer from './Footer';
import Header from './Header';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
  return (
    <div className=''>
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <Footer />

    </div>
    
  )
}

export default Home