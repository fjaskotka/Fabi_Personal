import React from 'react'
import {
    FaLinkedin,
    FaGithubSquare,
    FaInstagram} from 'react-icons/fa'

const Footer = () => {

    const navbarHeight = 64;

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

  return (
    <div className='max-w-[1240px] mx-auto py-16 px-8 grid lg:grid-cols-3 gap-7 text-gray-300'>
        <div className='mx-auto'> 
            {/* <h1 className='w-full text-3xl font-bold text-primary'>Fabian Jaskotka</h1> */}
            <svg className='flex fill-white h-12' id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 835.96 117.65">
                    
                    <g id="Layer_1-2" data-name="Layer 1">
                        <g>
                        <path  class="cls-1" d="M113.43,42.75c14.27-3.32,28.52-6.72,42.73-10.34,14.9-3.68,29.85-7.41,44.12-13.14,3.37-1.32,6.76-2.58,10.02-4.15-.34.08-.69.15-1.03.23-12.26,2.52-24.6,4.73-36.84,7.34-18.18,4.28-36.23,9.14-54.45,13.26-19.07,4.49-38.14,8.97-57.21,13.46-20.51,4.63-40.9,9.86-60.75,16.84,18.82-2.12,37.51-5.31,55.88-9.96,8.86-2.08,17.72-4.17,26.57-6.25,3.97,10.58,8.39,21.01,13.38,31.15.14.27.28.54.42.8-1.05.26-2.1.5-3.15.77-9.43,1.98-18.86,3.97-28.2,6.33,9.64-.29,19.29-.72,28.88-1.74,1.64-.24,3.28-.51,4.91-.77,4.4,8.12,9.6,16.88,13.15,23.52-1.97-8.37-4.79-16.49-8.22-24.35,6.81-1.19,13.59-2.55,20.35-4.03,11.77-2.34,23.04-6.57,34.71-9.27.9-.19,1.8-.37,2.71-.56-7.45-.28-14.84.87-22.18,2.02-12.7,1.79-25.35,4.01-37.86,6.87-5.13-10.79-11.35-21.1-18.07-30.94,10.05-2.36,20.11-4.73,30.16-7.09Z"/>
                        <path class="cls-1" d="M538.35,80.93c-7.31-5.61-14.81-10.98-22.15-16.55-9.76-7.5-22.91-18.27-32.2-29.6-2.04-2.53-4.03-4.98-5.76-7.59.8.1,1.6.2,2.41.28,4.63.3,9.59,1.77,14.01-.3,2.63-1.37,4.92-3.72,5.82-6.57.8-3.37-1.22-6.58-3.26-9.1-4.2-4.83-9.02-10.36-15.7-11.32-9.83-1.58-15.59,7.38-13.59,16.37.17,1.13.42,2.23.72,3.3-7.22-1.56-15.01-3.68-22.06-5.61-3.06-.78-6.12-1.51-9.18-2.26-.83-.17-1.77-.08-2.43.5-1.02.68-1.35,2.18-.86,3.27.44,1.14,1.71,1.71,2.54,2.54,1.73,1.45,3.55,2.77,5.33,4.16,7.12,5.39,11.19,8.73,18.28,14.05,5.6,4.2,9.08,6.74,14.13,10.9,4.53,3.87,8.52,8.3,12.79,12.45-3.21-4.9-6.33-9.91-10.13-14.39-6.76-7.62-14.62-14.16-22.6-20.45-1.98-1.54-3.9-3-5.75-4.41,7.45,1.98,14.89,4.02,22.45,5.45,2.36,4.54,5.62,8.68,8.85,12.6,8.5,10.37,18.89,19.02,29.29,27.4,9.37,7.34,20,14.57,27.59,20.86,3.56,2.82,5.91,5.37,6.62,7.43-1.21.96-4.21,2.17-4.89,2.41-2.76.98-5.68,1.38-8.55,1.91-9.25,1.85-18.41,4.18-27.58,6.42-3.57.9-7.16,1.72-10.8,2.27-2.64.59-4.75-.1-5.66-2.12.54,3.23,4.22,3.72,6.94,3.59,3,.12,6-.12,8.99-.35,10.51-.96,20.91-2.68,31.25-4.74,3.89-.57,7.67-1.67,11.19-3.46,1.61-.79,3.2-1.82,4.16-3.37,2.91-6.05-6.16-12.59-10.18-15.99ZM473.3,15.16c-1.09-6.03,2.34-11.79,9.87-8.8,2.51.89,11.3,8.94,11.9,12.51,0,.09,0,.18,0,.27-.02.05-.03.11-.06.18-.11.2-.3.54-.48.83-.02.02-.03.04-.05.07-1.63,1.72-1,1.14-2.33,1.98-.18.18-.37.15-1.62.42-2.93.25-5.83-.37-8.74-.62-2.11-.18-4.41-.5-6.82-.91-.74-1.83-1.31-3.79-1.66-5.93Z"/>
                        <path class="cls-1" d="M213.46,108.95c-7.03-2.33-12.81-7.83-16.08-12.66-.12-.17-.25-.33-.37-.5-.89-2.62-2.37-5.07-4.07-7.24,1.9-.12,3.73-.23,5.41-.38-1.92-.22-4.1-.54-6.4-.83-.09-.1-.17-.2-.26-.3-1.3-.99-2.71-.86-3.63-.15-6.6-.65-13.58-.64-18.16,2.52-3.28,2.35-4.54,6.83-3.87,10.7.86,3.8,3.21,7.35,6.11,9.92,3.6,3.06,8.48,3.92,13.05,4.45,3.3.34,7.16.1,9.43-2.65,1.97-2.7,2.99-6.1,3.23-9.47,2.99,2.55,6.42,4.55,10.18,5.8,2.46.78,5.04,1.51,7.65,1.23-.74-.1-1.48-.23-2.2-.46ZM190.85,107.51c-.08.17-.19.38-.31.56-.15.17-.31.33-.49.49-.09.05-.17.1-.24.15-1.72.53-.89.31-3.38.35-2.77-.17-4.86-.49-8.6-1.83-2.03-1.05-1.52-.79-2.95-2.08-1.35-1.47-1.52-1.77-3.07-4.39-.17-.3-.33-.61-.48-.92-.67-2.76-.67-2.26.14-5.31,1.71-3.76,8.43-4.96,15.56-5.57,0,.62.22,1.28.74,1.94.79,1.37,1.72,2.64,2.72,3.85,2.36,4.57,2.58,6.8.35,12.75Z"/>
                        <path class="cls-1" d="M250.16,82.19c-7.85-6.59-21.18-8.22-26.29,2.45-.59,1.19-.98,2.45-1.26,3.73-1.81-4.75-3.66-9.48-5.76-14.1-3.4-8.31-7.81-16.19-11.19-24.48.98,6.56,3.28,12.88,4.99,19.28,3.35,11.11,6.87,22.21,11.28,32.95.8,1.88,1.52,3.81,1.88,5.83,0,.44.08.88.22,1.3-1.14-.62-2.21-1.37-3.14-2.27.89,1.31,2.01,2.46,3.28,3.42,5.38,4.14,11.85,3.37,17.84,1.12,6.85-1.89,14.19-6.55,14.32-14.4.26-5.5-2.18-11.06-6.15-14.83ZM248.73,102.4c-2.89,3.17-6.48,4.66-11.35,6.89-1.99.96-4.84,1.77-7.93,1.51,1.34-1.52.19-4.11-.29-6.08-1.07-4.37-1.11-5.08-1.4-9.61-.61-5.7,1.64-9.67,3.26-10.84,4.25-3.73,11.46-.95,15.2,1.88,5,4.53,6.08,12.76,2.52,16.26Z"/>
                        <path class="cls-1" d="M279.82,108c-1.69.28-2.28-.12-3.52-1.75-4.12-5.26-8.93-14.74-13.07-21.72,1.88,8.32,4.35,17.13,10.64,23.24,1.1,1.06,2.31,2.24,3.91,2.38,2.66.04,5.04-1.64,6.85-3.46.28-.29.54-.6.79-.92-1.7,1.1-3.59,1.97-5.61,2.22Z"/>
                        <path class="cls-1" d="M320.2,107.96c-.74-.49-1.39-1.1-2.03-1.71-3.65-3.66-6.77-8.22-9.49-11.8.4.05.79.1,1.17.13-.48-.15-.96-.32-1.45-.48-.32-.41-.63-.82-.94-1.2-1.26-1.62-1.29-1.61-2.11-2.68-.54-.71-1.27-1.35-2.14-1.58-1.19-.31-2.6.2-2.92,1.48-.04.33-.03.66.01.99-2.47-.76-4.98-1.25-7.59-1.02-3.65.91-8.85,4.1-8.98,8.26,1.19,6.74,8.57,10.03,14.66,11.19,5.03.9,13.06,1.88,12.03-5.7-.47-1.79-1.07-3.34-1.72-4.78,3.14,3.02,6.69,6.2,9.9,8.1.51.3,1.04.58,1.6.79ZM291.43,101.4c-.16-.11-.28-.19-.36-.25-1.37-1.12-2.59-2.52-2.62-2.71-.09-.17-.15-.29-.2-.37,0-.03-.02-.06-.02-.08.02-.08.04-.16.07-.23.91-1.96,3.74-3.93,4.93-4.51,2.1-.62,4.79-.44,7.67-.03.23.64.47,1.28.6,1.93,1.41,3.84,3.19,7.04,3.5,9.42-2.83.19-10.56-1.1-13.56-3.17Z"/>
                        <path class="cls-1" d="M366.2,116.75c-4.42-.85-4.66-5.65-4.9-9.11-.59-9.44-2.17-20.81-10.68-26.45-9-6.29-18.57,4.46-19.43,13.25-.3,2.26-.39,4.53-.39,6.81-2.77-5.71-5.7-11.33-9.06-16.72,3.41,9.89,6.55,19.87,9.34,29.95.04.19.07.39.11.58.06,1.01.56,2.04,1.57,2.37,1.55.77,3.54-.58,3.48-2.3h0c-.01-.66,0-1.33.01-1.99.39-6.82-.3-14.64.69-19.25.92-5.07,5.62-9,7.67-9.06,5.19.06,10.07,7.72,12.52,16.6,1.88,5.16,1.6,15.06,8.68,15.61.6.03,1.21-.03,1.8-.13-.47-.02-.94-.07-1.4-.16Z"/>
                        <path class="cls-1" d="M603.97,103.52c-4.77-3.49-10.25-5.82-15.12-9.15-.45-1.66-1.34-3.19-2.15-4.68-.67-1.21-1.33-2.48-2.52-3.26.08.06.17.13.22.17-.56-.52-1.3-.97-2.09-.78-1.37.12-2.23,1.64-2.32,2.9,0,.02,0,.04,0,.06-3.91-2.15-7.95-4.24-12.42-4.66-3.15-.17-6.05,2.18-7.24,4.99-1.21,3.76,1.93,7.12,4.11,9.84,2.74,3.35,6.26,6.12,10.34,7.62,7.9,2.99,14.26-.92,14.42-8.61,2.71,1.2,5.61,2.08,8.35,3.07,2.18.71,4.28,1.64,6.41,2.48ZM583.84,95.82c.07,2.43.12,2.04-.7,4.64-.08.16-.18.31-.27.45-2.49,2.6-9.43.13-14.38-4.87-2.57-2.64-3.95-3.76-4.4-5.68.18-.75.12-.58.82-1.61.96-1.08.78-1,1.88-1.57,1.92-.83,8.4.63,13.28,2.12.2,1.09.83,2.07,1.5,2.93.54.74,1.14,1.39,1.78,1.99.31.81.51,1.44.49,1.58Z"/>
                        <g>
                            <path class="cls-1" d="M629.46,106.04c-.2-2.19-2.04-3.72-3.52-5.14-3.82-3.36-5.67-4.47-9.33-7.56-1.86-1.42-5.27-4.24-5.56-4.95-.9-1.3-.95-2.18-1.54-4.46,0-.04-.02-.07-.02-.11,1.67-.92,3.12-1.98,4.94-2.27,1.17-.18,2.93-.13,4.27.29,1.01.46,1.89,1.18,2.83,1.77-.79-.82-1.51-1.73-2.42-2.43-1.64-.94-3.57-1.41-5.46-1.35-2.36.2-4.62,1.22-6.78,2.1-.63.42-.64,1.23-.46,1.9,0,.02,0,.03,0,.05,0-.02,0-.05,0-.07,0,.03,0,.05,0,.08.06.34.04.31.01.09.12.96.2,1.93.34,2.89.38,3.93,3.53,6.63,6.3,9.08,2.18,2.1,4.58,3.94,6.91,5.86,1.96,1.56,4.42,3.43,5.16,4.57-3.61,3.01-14.11.71-23.08-2.36,5.27,3.38,14.91,9.02,22.71,7,2.37-.58,4.92-2.24,4.68-4.98Z"/>
                            <path class="cls-1" d="M606.42,83.88s0,.07.01.09c0-.03,0-.06-.01-.09,0,0,0,0,0,0Z"/>
                        </g>
                        <path class="cls-1" d="M621.53,37.91c5.21,11.38,10.25,22.98,14.37,32.99,4.73,11.18,9.1,22.72,9.94,34.93,0,.44.18,1.63.29,2.06,0,.08-.02.16-.03.24.32.62.33-1.69.43-1.86,4.01-25.34-9.9-49.15-25.01-68.36Z"/>
                        <path class="cls-1" d="M669.67,99.69c-1.6-3.08-3.62-5.94-6.03-8.44-2.65-2.4-5.79-5.11-9.45-5.45.05-.09.09-.18.15-.26,2.16-3.59,4.13-7.44,7.41-10.15-3.97,1.63-6.91,4.9-9.63,8.11-.46.53-.9,1.09-1.3,1.66-.53.78-1.37,1.68-.87,2.67.68,1.5,2.53,1.64,3.98,1.66.03,0,.05,0,.1.02.83.18,3.49,1.71,5.34,3.06,2.53,1.7,5.75,4.77,8.56,8.02,1.64,1.77,3.29,3.62,3.7,6.07.33-2.52-.73-4.82-1.95-6.96Z"/>
                        <path class="cls-1" d="M701.39,95.72c-2.94-7.18-9.97-12.3-17.41-14.04-1.46-.28-3.03-.45-4.45.08.14-.01.29-.02.43-.02,3.35.14,6.64,2.65,8.87,4.33,4.9,4.41,7.45,7.51,8.59,13.12.01.36.04,1.04,0,1.53-.11.35-.34,1.25-.44,1.68-.07.13-.15.26-.23.38-1.44.68-4.42.49-8.24-2.36-1.2-.95-2.17-2.14-3.11-3.35-.25-.21-1.03-1.42-1.63-2.15.98-1.47,1.62-3.25,3.1-3.97,1.08.15,2.14.65,3.21.89-1.03-.56-1.97-1.35-3.06-1.78-1.69-.11-2.92,1.42-4.02,2.51-2.91,2.76-2.13,2.15-.51,5.45,2.18,4.81,6.49,9.14,11.91,9.81,2.05.22,4.35-.08,5.9-1.54,2.54-2.82,2.53-7.23,1.09-10.57Z"/>
                        <path class="cls-1" d="M738.52,80.87c-4.67-1.52-9.4-2.96-14.32-3.4-1.19-.14-2.39-.22-3.58-.26-5.05-12.6-13.03-24.19-21.41-34.73,4.53,10.46,9.4,20.78,14.29,31.07.63,1.27,1.24,2.51,1.85,3.73-2.76.16-5.51.48-8.24.86,3.19.59,6.29,1.06,9.38,1.44,3.6,7.29,6.77,14.02,9.08,22.06.11.56.21,1.15.06,1.71.32-.57.36-1.25.39-1.89-.28-7.39-1.85-14.5-4.3-21.32,5.4.48,10.87.71,16.79.73Z"/>
                        <path class="cls-1" d="M756.78,92.5c-1.1-.41-2.95-.67-4.31-.83.12-.14.24-.29.38-.44,3.61-4.49,6.16-9.71,8.53-14.94-3.24,3.71-6.42,7.47-9.76,11.08-.48.47-.96.95-1.44,1.42-4.06-16.25-11.8-31.35-20.79-45.41,4.37,13.15,10.18,31.06,14.98,41.56.87,2.54,1.88,4.99,2.88,7.38-.03.14-.05.28-.05.43.04.73.43,1.32.98,1.78,1.05,2.5,2.05,4.93,2.84,7.34-.13,1.63-.75,3.61-.42,5.39.08.7.24,1.39.46,2.06-.06-1.03,0-2.08.24-3.09.24-1.54,1.26-2.82,1.51-4.33-.05-2.11-.47-4.19-.97-6.26,3.78.4,8.39,1.48,12.81,3.37,2.17,1.06,6.68,2.63,7.46,5.87.09-5.74-10.48-11.03-15.32-12.41Z"/>
                        <path class="cls-1" d="M834.41,113.15c-12.9-1.21-22.19-16.41-28.56-25.96-.87-1.42-1.81-2.8-2.86-4.09,1.36-.15,2.74-.19,4.09-.4-1.62-.1-3.25-.42-4.87-.52-.22-.21-.47-.37-.77-.46-1.19-.57-2.4-.09-3.12.8-4.72.98-9.49,3.07-12.16,7.22-4.54,7.07.34,16.31,6.4,20.79,5.51,3.73,13.71,1.28,16.74-4.51.77-1.42,1.06-2.95,1.07-4.51,2.27,2.4,4.72,4.63,7.45,6.56,4.89,3.53,11.32,6.75,17.46,5.16.23-.08.45-.17.68-.26-.51.09-1.03.17-1.55.18ZM804.48,103.25c-1.73,3.47-6.08,3.94-7.84,3.19-4.8-2.4-9.23-9.44-7.42-14.13.46-1.16,1.55-3.21,3.68-4.82.99-.73,2.91-1.92,4.83-2.85.05.31.16.61.34.91,4.85,6.81,7.89,15.5,6.42,17.7Z"/>
                        <path class="cls-1" d="M272.9,60.53c.19-.29.3-.62.34-.96.11-.36.13-.72.08-1.07-.04-1.31-1.21-2.5-2.68-2.67-.09-.01-.17-.02-.26-.02-.52-.47-1.08-.84-1.62-1.07-1.09-.52-2.21-.07-2.81.78-.66-.66-1.72-1.07-2.55-1.2-.54.03-.77.86-.98,1.28-.21,1.4,1.12,2.52,2.04,3.41.61.52,1.27,1.14,2.01,1.53.4.63,1.01,1.13,1.75,1.33.07.02.15.02.23.03.38.21.81.35,1.25.4.96.42,2.21.04,2.7-.96,0-.02.01-.04.02-.05.21-.21.37-.47.47-.75ZM263.67,55.89c-.05-.04.03-.26.11-.49.12,0,.27,0,.44.03.51.11,1.04.28,1.47.59-.19.47-.23,1-.07,1.54,0,0,0,0,0,0-.76-.46-1.47-.97-1.96-1.68Z"/>
                        </g>
                        <g>
                        <path class="cls-1" d="M113.43,42.75c14.27-3.32,28.52-6.72,42.73-10.34,14.9-3.68,29.85-7.41,44.12-13.14,3.37-1.32,6.76-2.58,10.02-4.15-.34.08-.69.15-1.03.23-12.26,2.52-24.6,4.73-36.84,7.34-18.18,4.28-36.23,9.14-54.45,13.26-19.07,4.49-38.14,8.97-57.21,13.46-20.51,4.63-40.9,9.86-60.75,16.84,18.82-2.12,37.51-5.31,55.88-9.96,8.86-2.08,17.72-4.17,26.57-6.25,3.97,10.58,8.39,21.01,13.38,31.15.14.27.28.54.42.8-1.05.26-2.1.5-3.15.77-9.43,1.98-18.86,3.97-28.2,6.33,9.64-.29,19.29-.72,28.88-1.74,1.64-.24,3.28-.51,4.91-.77,4.4,8.12,9.6,16.88,13.15,23.52-1.97-8.37-4.79-16.49-8.22-24.35,6.81-1.19,13.59-2.55,20.35-4.03,11.77-2.34,23.04-6.57,34.71-9.27.9-.19,1.8-.37,2.71-.56-7.45-.28-14.84.87-22.18,2.02-12.7,1.79-25.35,4.01-37.86,6.87-5.13-10.79-11.35-21.1-18.07-30.94,10.05-2.36,20.11-4.73,30.16-7.09Z"/>
                        <path class="cls-1" d="M538.35,80.93c-7.31-5.61-14.81-10.98-22.15-16.55-9.76-7.5-22.91-18.27-32.2-29.6-2.04-2.53-4.03-4.98-5.76-7.59.8.1,1.6.2,2.41.28,4.63.3,9.59,1.77,14.01-.3,2.63-1.37,4.92-3.72,5.82-6.57.8-3.37-1.22-6.58-3.26-9.1-4.2-4.83-9.02-10.36-15.7-11.32-9.83-1.58-15.59,7.38-13.59,16.37.17,1.13.42,2.23.72,3.3-7.22-1.56-15.01-3.68-22.06-5.61-3.06-.78-6.12-1.51-9.18-2.26-.83-.17-1.77-.08-2.43.5-1.02.68-1.35,2.18-.86,3.27.44,1.14,1.71,1.71,2.54,2.54,1.73,1.45,3.55,2.77,5.33,4.16,7.12,5.39,11.19,8.73,18.28,14.05,5.6,4.2,9.08,6.74,14.13,10.9,4.53,3.87,8.52,8.3,12.79,12.45-3.21-4.9-6.33-9.91-10.13-14.39-6.76-7.62-14.62-14.16-22.6-20.45-1.98-1.54-3.9-3-5.75-4.41,7.45,1.98,14.89,4.02,22.45,5.45,2.36,4.54,5.62,8.68,8.85,12.6,8.5,10.37,18.89,19.02,29.29,27.4,9.37,7.34,20,14.57,27.59,20.86,3.56,2.82,5.91,5.37,6.62,7.43-1.21.96-4.21,2.17-4.89,2.41-2.76.98-5.68,1.38-8.55,1.91-9.25,1.85-18.41,4.18-27.58,6.42-3.57.9-7.16,1.72-10.8,2.27-2.64.59-4.75-.1-5.66-2.12.54,3.23,4.22,3.72,6.94,3.59,3,.12,6-.12,8.99-.35,10.51-.96,20.91-2.68,31.25-4.74,3.89-.57,7.67-1.67,11.19-3.46,1.61-.79,3.2-1.82,4.16-3.37,2.91-6.05-6.16-12.59-10.18-15.99ZM473.3,15.16c-1.09-6.03,2.34-11.79,9.87-8.8,2.51.89,11.3,8.94,11.9,12.51,0,.09,0,.18,0,.27-.02.05-.03.11-.06.18-.11.2-.3.54-.48.83-.02.02-.03.04-.05.07-1.63,1.72-1,1.14-2.33,1.98-.18.18-.37.15-1.62.42-2.93.25-5.83-.37-8.74-.62-2.11-.18-4.41-.5-6.82-.91-.74-1.83-1.31-3.79-1.66-5.93Z"/>
                        <path class="cls-1" d="M213.46,108.95c-7.03-2.33-12.81-7.83-16.08-12.66-.12-.17-.25-.33-.37-.5-.89-2.62-2.37-5.07-4.07-7.24,1.9-.12,3.73-.23,5.41-.38-1.92-.22-4.1-.54-6.4-.83-.09-.1-.17-.2-.26-.3-1.3-.99-2.71-.86-3.63-.15-6.6-.65-13.58-.64-18.16,2.52-3.28,2.35-4.54,6.83-3.87,10.7.86,3.8,3.21,7.35,6.11,9.92,3.6,3.06,8.48,3.92,13.05,4.45,3.3.34,7.16.1,9.43-2.65,1.97-2.7,2.99-6.1,3.23-9.47,2.99,2.55,6.42,4.55,10.18,5.8,2.46.78,5.04,1.51,7.65,1.23-.74-.1-1.48-.23-2.2-.46ZM190.85,107.51c-.08.17-.19.38-.31.56-.15.17-.31.33-.49.49-.09.05-.17.1-.24.15-1.72.53-.89.31-3.38.35-2.77-.17-4.86-.49-8.6-1.83-2.03-1.05-1.52-.79-2.95-2.08-1.35-1.47-1.52-1.77-3.07-4.39-.17-.3-.33-.61-.48-.92-.67-2.76-.67-2.26.14-5.31,1.71-3.76,8.43-4.96,15.56-5.57,0,.62.22,1.28.74,1.94.79,1.37,1.72,2.64,2.72,3.85,2.36,4.57,2.58,6.8.35,12.75Z"/>
                        <path class="cls-1" d="M250.16,82.19c-7.85-6.59-21.18-8.22-26.29,2.45-.59,1.19-.98,2.45-1.26,3.73-1.81-4.75-3.66-9.48-5.76-14.1-3.4-8.31-7.81-16.19-11.19-24.48.98,6.56,3.28,12.88,4.99,19.28,3.35,11.11,6.87,22.21,11.28,32.95.8,1.88,1.52,3.81,1.88,5.83,0,.44.08.88.22,1.3-1.14-.62-2.21-1.37-3.14-2.27.89,1.31,2.01,2.46,3.28,3.42,5.38,4.14,11.85,3.37,17.84,1.12,6.85-1.89,14.19-6.55,14.32-14.4.26-5.5-2.18-11.06-6.15-14.83ZM248.73,102.4c-2.89,3.17-6.48,4.66-11.35,6.89-1.99.96-4.84,1.77-7.93,1.51,1.34-1.52.19-4.11-.29-6.08-1.07-4.37-1.11-5.08-1.4-9.61-.61-5.7,1.64-9.67,3.26-10.84,4.25-3.73,11.46-.95,15.2,1.88,5,4.53,6.08,12.76,2.52,16.26Z"/>
                        <path class="cls-1" d="M279.82,108c-1.69.28-2.28-.12-3.52-1.75-4.12-5.26-8.93-14.74-13.07-21.72,1.88,8.32,4.35,17.13,10.64,23.24,1.1,1.06,2.31,2.24,3.91,2.38,2.66.04,5.04-1.64,6.85-3.46.28-.29.54-.6.79-.92-1.7,1.1-3.59,1.97-5.61,2.22Z"/>
                        <path class="cls-1" d="M320.2,107.96c-.74-.49-1.39-1.1-2.03-1.71-3.65-3.66-6.77-8.22-9.49-11.8.4.05.79.1,1.17.13-.48-.15-.96-.32-1.45-.48-.32-.41-.63-.82-.94-1.2-1.26-1.62-1.29-1.61-2.11-2.68-.54-.71-1.27-1.35-2.14-1.58-1.19-.31-2.6.2-2.92,1.48-.04.33-.03.66.01.99-2.47-.76-4.98-1.25-7.59-1.02-3.65.91-8.85,4.1-8.98,8.26,1.19,6.74,8.57,10.03,14.66,11.19,5.03.9,13.06,1.88,12.03-5.7-.47-1.79-1.07-3.34-1.72-4.78,3.14,3.02,6.69,6.2,9.9,8.1.51.3,1.04.58,1.6.79ZM291.43,101.4c-.16-.11-.28-.19-.36-.25-1.37-1.12-2.59-2.52-2.62-2.71-.09-.17-.15-.29-.2-.37,0-.03-.02-.06-.02-.08.02-.08.04-.16.07-.23.91-1.96,3.74-3.93,4.93-4.51,2.1-.62,4.79-.44,7.67-.03.23.64.47,1.28.6,1.93,1.41,3.84,3.19,7.04,3.5,9.42-2.83.19-10.56-1.1-13.56-3.17Z"/>
                        <path class="cls-1" d="M366.2,116.75c-4.42-.85-4.66-5.65-4.9-9.11-.59-9.44-2.17-20.81-10.68-26.45-9-6.29-18.57,4.46-19.43,13.25-.3,2.26-.39,4.53-.39,6.81-2.77-5.71-5.7-11.33-9.06-16.72,3.41,9.89,6.55,19.87,9.34,29.95.04.19.07.39.11.58.06,1.01.56,2.04,1.57,2.37,1.55.77,3.54-.58,3.48-2.3h0c-.01-.66,0-1.33.01-1.99.39-6.82-.3-14.64.69-19.25.92-5.07,5.62-9,7.67-9.06,5.19.06,10.07,7.72,12.52,16.6,1.88,5.16,1.6,15.06,8.68,15.61.6.03,1.21-.03,1.8-.13-.47-.02-.94-.07-1.4-.16Z"/>
                        <path class="cls-1" d="M603.97,103.52c-4.77-3.49-10.25-5.82-15.12-9.15-.45-1.66-1.34-3.19-2.15-4.68-.67-1.21-1.33-2.48-2.52-3.26.08.06.17.13.22.17-.56-.52-1.3-.97-2.09-.78-1.37.12-2.23,1.64-2.32,2.9,0,.02,0,.04,0,.06-3.91-2.15-7.95-4.24-12.42-4.66-3.15-.17-6.05,2.18-7.24,4.99-1.21,3.76,1.93,7.12,4.11,9.84,2.74,3.35,6.26,6.12,10.34,7.62,7.9,2.99,14.26-.92,14.42-8.61,2.71,1.2,5.61,2.08,8.35,3.07,2.18.71,4.28,1.64,6.41,2.48ZM583.84,95.82c.07,2.43.12,2.04-.7,4.64-.08.16-.18.31-.27.45-2.49,2.6-9.43.13-14.38-4.87-2.57-2.64-3.95-3.76-4.4-5.68.18-.75.12-.58.82-1.61.96-1.08.78-1,1.88-1.57,1.92-.83,8.4.63,13.28,2.12.2,1.09.83,2.07,1.5,2.93.54.74,1.14,1.39,1.78,1.99.31.81.51,1.44.49,1.58Z"/>
                        <g>
                            <path class="cls-1" d="M629.46,106.04c-.2-2.19-2.04-3.72-3.52-5.14-3.82-3.36-5.67-4.47-9.33-7.56-1.86-1.42-5.27-4.24-5.56-4.95-.9-1.3-.95-2.18-1.54-4.46,0-.04-.02-.07-.02-.11,1.67-.92,3.12-1.98,4.94-2.27,1.17-.18,2.93-.13,4.27.29,1.01.46,1.89,1.18,2.83,1.77-.79-.82-1.51-1.73-2.42-2.43-1.64-.94-3.57-1.41-5.46-1.35-2.36.2-4.62,1.22-6.78,2.1-.63.42-.64,1.23-.46,1.9,0,.02,0,.03,0,.05,0-.02,0-.05,0-.07,0,.03,0,.05,0,.08.06.34.04.31.01.09.12.96.2,1.93.34,2.89.38,3.93,3.53,6.63,6.3,9.08,2.18,2.1,4.58,3.94,6.91,5.86,1.96,1.56,4.42,3.43,5.16,4.57-3.61,3.01-14.11.71-23.08-2.36,5.27,3.38,14.91,9.02,22.71,7,2.37-.58,4.92-2.24,4.68-4.98Z"/>
                            <path class="cls-1" d="M606.42,83.88s0,.07.01.09c0-.03,0-.06-.01-.09,0,0,0,0,0,0Z"/>
                        </g>
                        <path class="cls-1" d="M621.53,37.91c5.21,11.38,10.25,22.98,14.37,32.99,4.73,11.18,9.1,22.72,9.94,34.93,0,.44.18,1.63.29,2.06,0,.08-.02.16-.03.24.32.62.33-1.69.43-1.86,4.01-25.34-9.9-49.15-25.01-68.36Z"/>
                        <path class="cls-1" d="M669.67,99.69c-1.6-3.08-3.62-5.94-6.03-8.44-2.65-2.4-5.79-5.11-9.45-5.45.05-.09.09-.18.15-.26,2.16-3.59,4.13-7.44,7.41-10.15-3.97,1.63-6.91,4.9-9.63,8.11-.46.53-.9,1.09-1.3,1.66-.53.78-1.37,1.68-.87,2.67.68,1.5,2.53,1.64,3.98,1.66.03,0,.05,0,.1.02.83.18,3.49,1.71,5.34,3.06,2.53,1.7,5.75,4.77,8.56,8.02,1.64,1.77,3.29,3.62,3.7,6.07.33-2.52-.73-4.82-1.95-6.96Z"/>
                        <path class="cls-1" d="M701.39,95.72c-2.94-7.18-9.97-12.3-17.41-14.04-1.46-.28-3.03-.45-4.45.08.14-.01.29-.02.43-.02,3.35.14,6.64,2.65,8.87,4.33,4.9,4.41,7.45,7.51,8.59,13.12.01.36.04,1.04,0,1.53-.11.35-.34,1.25-.44,1.68-.07.13-.15.26-.23.38-1.44.68-4.42.49-8.24-2.36-1.2-.95-2.17-2.14-3.11-3.35-.25-.21-1.03-1.42-1.63-2.15.98-1.47,1.62-3.25,3.1-3.97,1.08.15,2.14.65,3.21.89-1.03-.56-1.97-1.35-3.06-1.78-1.69-.11-2.92,1.42-4.02,2.51-2.91,2.76-2.13,2.15-.51,5.45,2.18,4.81,6.49,9.14,11.91,9.81,2.05.22,4.35-.08,5.9-1.54,2.54-2.82,2.53-7.23,1.09-10.57Z"/>
                        <path class="cls-1" d="M738.52,80.87c-4.67-1.52-9.4-2.96-14.32-3.4-1.19-.14-2.39-.22-3.58-.26-5.05-12.6-13.03-24.19-21.41-34.73,4.53,10.46,9.4,20.78,14.29,31.07.63,1.27,1.24,2.51,1.85,3.73-2.76.16-5.51.48-8.24.86,3.19.59,6.29,1.06,9.38,1.44,3.6,7.29,6.77,14.02,9.08,22.06.11.56.21,1.15.06,1.71.32-.57.36-1.25.39-1.89-.28-7.39-1.85-14.5-4.3-21.32,5.4.48,10.87.71,16.79.73Z"/>
                        <path class="cls-1" d="M756.78,92.5c-1.1-.41-2.95-.67-4.31-.83.12-.14.24-.29.38-.44,3.61-4.49,6.16-9.71,8.53-14.94-3.24,3.71-6.42,7.47-9.76,11.08-.48.47-.96.95-1.44,1.42-4.06-16.25-11.8-31.35-20.79-45.41,4.37,13.15,10.18,31.06,14.98,41.56.87,2.54,1.88,4.99,2.88,7.38-.03.14-.05.28-.05.43.04.73.43,1.32.98,1.78,1.05,2.5,2.05,4.93,2.84,7.34-.13,1.63-.75,3.61-.42,5.39.08.7.24,1.39.46,2.06-.06-1.03,0-2.08.24-3.09.24-1.54,1.26-2.82,1.51-4.33-.05-2.11-.47-4.19-.97-6.26,3.78.4,8.39,1.48,12.81,3.37,2.17,1.06,6.68,2.63,7.46,5.87.09-5.74-10.48-11.03-15.32-12.41Z"/>
                        <path class="cls-1" d="M834.41,113.15c-12.9-1.21-22.19-16.41-28.56-25.96-.87-1.42-1.81-2.8-2.86-4.09,1.36-.15,2.74-.19,4.09-.4-1.62-.1-3.25-.42-4.87-.52-.22-.21-.47-.37-.77-.46-1.19-.57-2.4-.09-3.12.8-4.72.98-9.49,3.07-12.16,7.22-4.54,7.07.34,16.31,6.4,20.79,5.51,3.73,13.71,1.28,16.74-4.51.77-1.42,1.06-2.95,1.07-4.51,2.27,2.4,4.72,4.63,7.45,6.56,4.89,3.53,11.32,6.75,17.46,5.16.23-.08.45-.17.68-.26-.51.09-1.03.17-1.55.18ZM804.48,103.25c-1.73,3.47-6.08,3.94-7.84,3.19-4.8-2.4-9.23-9.44-7.42-14.13.46-1.16,1.55-3.21,3.68-4.82.99-.73,2.91-1.92,4.83-2.85.05.31.16.61.34.91,4.85,6.81,7.89,15.5,6.42,17.7Z"/>
                        <path class="cls-1" d="M272.9,60.53c.19-.29.3-.62.34-.96.11-.36.13-.72.08-1.07-.04-1.31-1.21-2.5-2.68-2.67-.09-.01-.17-.02-.26-.02-.52-.47-1.08-.84-1.62-1.07-1.09-.52-2.21-.07-2.81.78-.66-.66-1.72-1.07-2.55-1.2-.54.03-.77.86-.98,1.28-.21,1.4,1.12,2.52,2.04,3.41.61.52,1.27,1.14,2.01,1.53.4.63,1.01,1.13,1.75,1.33.07.02.15.02.23.03.38.21.81.35,1.25.4.96.42,2.21.04,2.7-.96,0-.02.01-.04.02-.05.21-.21.37-.47.47-.75ZM263.67,55.89c-.05-.04.03-.26.11-.49.12,0,.27,0,.44.03.51.11,1.04.28,1.47.59-.19.47-.23,1-.07,1.54,0,0,0,0,0,0-.76-.46-1.47-.97-1.96-1.68Z"/>
                        </g>
                    </g>
                </svg>
            <p className='py-4'>Full-time optimist from Hamburg, Germany. Being happy is of utmost importance. Focus on doing those things, that make you feel good!</p>
            <div className='flex justify-between md:w-[75%] mx-auto my-6'>
                <a href='https://www.linkedin.com/in/jaskotka/'><FaLinkedin size={30}/></a>
                <a href='https://github.com/fjaskotka'><FaGithubSquare size={30}/></a>
                <a href='https://www.instagram.com/fabian_jas/'><FaInstagram size={30}/></a>
                
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-400'>Facets of me</h6>
                <ul>
                    <li className='py-2 text-sm'><button onClick={() => handleScroll('career')}>Professional</button></li>
                    <li className='py-2 text-sm'><button onClick={() => handleScroll('academic')}>Academic</button></li>
                    <li className='py-2 text-sm'><button onClick={() => handleScroll('flyfabi')}>Leisure</button></li>
                    <li className='py-2 text-sm'><button onClick={() => handleScroll('contact')}>Contact</button></li>
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