import React from 'react'
import hult from '../assets/hult.webp'
import dhbw from '../assets/dhbw.webp'

const Academic = () => {
  return (
    <div id='academic' className='w-full py-[4rem] px-4 bg-white'>
        <h1 className='text-primary lg:text-3xl md:text-2xl text-2xl font-bold py-2 mx-auto text-center m-4 my-auto mb-14'>Academic Achievements </h1>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-2rem] bg-white' src={hult} alt='/'></img>
                <h2 className='text-xl font-bold text-center py-8'>Hult International Business School</h2>
                <p className='text-center text-3xl font-bold'>M.Sc. Business Analytics</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Machine Learning with Python</p>
                    <p className='py-2 border-b mx-8'>Data Visualization</p>
                    <p className='py-2 mx-8 mb-8'>Natural Language Processing</p>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-2rem] bg-transparent' src={hult} alt='/'></img>
                <h2 className='text-xl font-bold text-center py-8'>Hult International Business School</h2>
                <p className='text-center text-3xl font-bold'>M.Sc. International Business</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Strategy</p>
                    <p className='py-2 border-b mx-8'>Psychology of Pricing</p>
                    <p className='py-2 mx-8 mb-8'>Neuromarketing</p>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-2rem] bg-white' src={dhbw} alt='/'></img>
                <h2 className='text-xl font-bold text-center py-8'>DHBW Stuttgart</h2>
                <p className='text-center text-3xl font-bold'>B.Sc. Int. Management for Business & IT</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Intercultural Management</p>
                    <p className='py-2 border-b mx-8'>Business Informatics</p>
                    <p className='py-2 mx-8 mb-8'>Accounting</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Academic