import React from 'react'
import img1 from '../assets/img1.jpeg'


const Analytics = ()  => {
   

    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img src={img1} alt='/' className='w-[500px] mx-auto my-4'></img>
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>FLYING IS THE GREATEST WAY TO DISCOVER OUR PLANET</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>FLY WITH ME!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eius deleniti, suscipit repellendus voluptas quisquam aperiam nisi molestias itaque dolores animi architecto, illo dignissimos nemo omnis, quidem alias consequatur iusto.</p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Book Now</button>
                </div>
            </div>
        </div>
      
    )
}

export default Analytics;