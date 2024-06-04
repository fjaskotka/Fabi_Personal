import React from 'react';
import { ReactTyped } from "react-typed";


const Hero = ()  => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2'>Growing in Data Science</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Never Sit still.</h1>
                <div>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold'>I am a</p>
                    <ReactTyped 
                        strings={[
                            'Pilot', 
                            'Sailor', 
                            'Data Scientist', 
                            'Founder', 
                            'Product Manager', 
                            'Diver']} 
                        typeSpeed={100} 
                        backSpeed={130} 
                        loop
                    >
                    </ReactTyped>
                </div>
            </div>
        </div>
    );
};


export default Hero;