import React from 'react'
import {
    FaLinkedin,
    FaGithubSquare,
    FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='wax-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Fabian Jaskotka</h1>
            <p className='py-4'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias error eum tempore esse earum culpa impedit, quas doloremque blanditiis perferendis aliquid distinctio libero ab voluptate, recusandae reiciendis. Et, delectus voluptas?</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaLinkedin size={30}/>
                <FaGithubSquare size={30}/>
                <FaInstagram size={30}/>
            </div>
        </div>
        <div className='lg: col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-400'>Facets of me</h6>
                <ul>
                    <li className='py-2 text-sm'>Career</li>
                    <li className='py-2 text-sm'>Academic</li>
                    <li className='py-2 text-sm'>Leisure</li>
                    <li className='py-2 text-sm'>Contact</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Leisure</h6>
                <ul>
                    <li className='py-2 text-sm'>Pilot</li>
                    <li className='py-2 text-sm'>Sailor</li>
                    <li className='py-2 text-sm'>Diver</li>
                    <li className='py-2 text-sm'>Driver</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Companies</h6>
                <ul>
                    <li className='py-2 text-sm'>Mercedes</li>
                    <li className='py-2 text-sm'>Isardigital</li>
                    <li className='py-2 text-sm'>Fabian Jaskotka</li>
                    <li className='py-2 text-sm'>Apple</li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer