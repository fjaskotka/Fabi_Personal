import React from 'react'
import img1 from '../assets/img1.jpeg'


const FlyFabi = ()  => {
   

    return (
        <div className='w-full bg-gray-100 py-16 px-10'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
                <img src={img1} alt='/' className='w-[500px] mx-auto my-4 rounded-lg shadow-xl'></img>
                <div className='flex flex-col justify-center'>
                    <p className='text-primary font-bold'>FLYING IS THE GREATEST WAY TO DISCOVER OUR PLANET</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>FLY WITH ME!</h1>
                    <p>If you ever wondered what it is like to sit in a comfortable cabin the size of a compact car and gaze down at the skylines and landscapes, this is your chance to find out. Currently slying in the Seattle, WA area.</p>
                    <button className='bg-primary text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>FlyFabi.com</button>
                </div>
            </div>
        </div>
      
    )
}

export default FlyFabi;