import React, {useState, useEffect} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import fj from '../assets/fj.png';

const Navbar = ()  => {
    const [nav, setNav] = useState(false)
    const navbarHeight = 64;

    const handleNav = () => { 
        setNav(!nav)
    };

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const topOffset = section.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: topOffset - navbarHeight,
                behavior: 'smooth',
            });
        //   section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const handleButtonClick = (sectionId) => {
        handleNav();
        handleScroll(sectionId);
    };

    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        const updateScrollState = () => {
          if (window.scrollY > 20) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }

        };
    
        window.addEventListener('scroll', updateScrollState);
        return () => window.removeEventListener('scroll', updateScrollState);
      }, []);
    


    return (
        <div className={`fixed top-0 left-0 w-full text-white z-50 transition-colors ${isScrolled ? 'bg-[#001000]/95' : 'bg-transparent'}`}> 
            <div className={`flex justify-between items-center max-w-[1240px] mx-auto px-4  ${isScrolled ? 'h-16' : 'h-24'}`}>
                {/* <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Fabian Jaskotka</h1> */}
                <button onClick={() => handleScroll('home')}><img className={`mx-left z-1000 ${isScrolled ? 'w-[50px]' : 'w-[80px]'}`} src={fj} alt='/'></img></button>
                <ul className='hidden md:flex mx-right'>
                    <li className='p-4'><button onClick={() => handleScroll('home')}>Home</button></li>
                    <li className='p-4'><button onClick={() => handleScroll('career')}>Professional</button></li>
                    <li className='p-4'><button onClick={() => handleScroll('academic')}>Academic</button></li>
                    <li className='p-4'><button onClick={() => handleScroll('flyfabi')}>Leisure</button></li>
                    <li className='p-4'><button onClick={() => handleScroll('contact')}>Contact</button></li>

                </ul>
            
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </div>
            </div>
                <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] opacity-90 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-primary py-5 px-5'>Fabian Jaskotka</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'><button onClick={() => handleButtonClick('home')}>Home</button></li>
                    <li className='p-4 border-b border-gray-600'><button onClick={() => handleButtonClick('career')}>Professional</button></li>
                    <li className='p-4 border-b border-gray-600'><button onClick={() => handleButtonClick('academic')}>Academic</button></li>
                    <li className='p-4 border-b border-gray-600'><button onClick={() => handleButtonClick('flyfabi')}>Leisure</button></li>
                    <li className='p-4'><button onClick={() => handleButtonClick('contact')}>Contact</button></li>
                </ul>
                </div>
            
        </div>
    )
}

export default Navbar;