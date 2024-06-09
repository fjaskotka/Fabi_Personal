import React from 'react'
import {
    FaLinkedin,
    FaGithubSquare,
    FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='wax-w-[1240px] mx-auto py-16 px-10 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-primary'>Fabian Jaskotka</h1>
            <p className='py-4'>Full-time optimist Hamburg, Germany. Being happy is of utmost importance. Focus on doing those things, that make you feel good!</p>
            <div className='flex justify-between md:w-[75%] mx-auto my-6'>
                <a href='https://www.linkedin.com/in/jaskotka/'><FaLinkedin size={30}/></a>
                <a href='https://www.instagram.com/fabian_jas/'><FaGithubSquare size={30}/></a>
                <a href='https://github.com/fjaskotka'><FaInstagram size={30}/></a>
            </div>
        </div>
        <div className='lg: col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-400'>Facets of me</h6>
                <ul>
                    <li className='py-2 text-sm'>Professional</li>
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
                    <li className='py-2 text-sm'><a href='https://www.apple.com'>Apple, Inc.</a></li>
                    <li className='py-2 text-sm'><a href='https://vystem.io/'>Isardigital GmbH</a></li>
                    <li className='py-2 text-sm'><a href='https://group.mercedes-benz.com/'>Mercedes-Benz AG</a></li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer