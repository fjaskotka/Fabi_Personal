import React from 'react';
import { ReactTyped } from "react-typed"


const Hero = ()  => {
    
    const navbarHeight = 64;
    
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const topOffset = section.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: topOffset - navbarHeight,
                behavior: 'smooth',
            });
        }
    }
    
    
    
    return (
        <div id='home' className='text-white'>
            {/* <img className=' w-full md:max-w-[400px] mx-auto md:my-auto' src={apple} alt='/'></img> */}
            <div className="w-full h-screen mx-auto text-center flex flex-col justify-center bg-custom-image bg-cover bg-center">
            
                <p className='text-primary-light font-bold py-2 opacity-100'>Winners never quit and quitters never win</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Fabian Jaskotka</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>I am a</p>
                    <ReactTyped 
                    className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-2 pl-2'
                        strings={[
                            'Sales Lover',
                            'Founder',
                            'Data Scientist',
                            'Product Manager',
                            'Pilot', 
                            'Sailor', 
                            'Diver']} 
                        typeSpeed={120} 
                        backSpeed={140} 
                        loop
                    >
                    </ReactTyped>
                </div>
                {/* <p className='md:text-2xl text-xl font-bold text-gray-500'>Reach out for many inspiring stories.</p> */}
                <button className='bg-gray-300 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black' onClick={() => handleScroll('contact')}>Reach out</button>
            </div>
       
        </div>
    );
};


export default Hero;