import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        
        <div className="sticky top-0 z-50 backdrop-blur-lg border border-gray-600 bg-black/80 text-gray-100 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">

            <h1 className='text-3xl font-bold primary-color ml-4'>Him</h1>
            <ul className='hidden md:flex'>
                <li className='p-5'><a href="#about">About</a></li>
                <li className='p-5'><a href="#project">Project</a></li>
                <li className='p-5'><a href="#contact">Contact</a></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='text-3xl primary-color m-4'>Him</h1>
                <ul className='p-8 text-2xl'>
                    <li className='p-2'><a href='#about'>About</a></li>
                    <li className='p-2'><a href='#project'>Project</a></li>
                    <li className='p-2'><a href='#contact'>Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;