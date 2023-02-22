import profilepic from '../images/profilepic.jpg';

const AboutMe = () => { 
    return (
        <div className='flex-col justify-evenly text-center bg-gradient-to-r from-blue-400 to-transparent'>
            <div className='flex'>
            <img className="w-[500px] h-75% m-5 border-4 border-solid border-cyan-800"src={profilepic} alt='profile'/>
            <div>
                <h2 className='pt-5 text-4xl underline text-blue-900'>About Me</h2>
                <p className="bg-cyan-100 text-base p-10 m-4 border-4 border-solid border-cyan-800">
                    About me section. A paragraph or two about myself and my journey to becomming a Developer. hello there dlkjsdhg;j ldsjkhbvlksjh askjh blakudjhva sdkgjlahsdfg;kljsfng zsal;kjnxc ;adlifgha ;fbkujhacbv ;asdfujh a. ;sdljkhgskuvhsdfkjv dsfkuihn fdscxkluhsd flvk;ujsdhf vlk;adjfhn ;adigha df;lguhdr gkjdfuhg a;ldfugha sdfklg;uh g. dsjkhbvlksjh askjh blakudjhva sdkgjlahsdfg;kljsfng zsal;kjnxc ;adlifgha ;fbkujhacbv ;asdfujh a. ; </p>
            </div>                
            </div>
        </div>
        )
}

export default AboutMe;