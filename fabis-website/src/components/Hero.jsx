import React from 'react';
import { ReactTyped } from "react-typed";


const Hero = ()  => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2'>Currently building this new Website</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Never Sit still.</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>I am a</p>
                    <ReactTyped 
                    className='md:text-5xl sm:text-4xl text-xl font-bold md:py-4 py-2'
                        strings={[
                            'Pilot', 
                            'Sailor', 
                            'Data Scientist', 
                            'Founder', 
                            'Product Manager', 
                            'Diver']} 
                        typeSpeed={120} 
                        backSpeed={140} 
                        loop
                    >
                    </ReactTyped>
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Reach out for many inspiring stories.</p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Reach out</button>
            </div>
        </div>
    );
};


export default Hero;