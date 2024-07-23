// Import statements and React import remain the same
"use client"
import React, {useState, useEffect} from 'react';
import Image from 'next/image'; // Correct import statement

import logoImg from './img/image.png';
import { Icon } from '@iconify/react';
import Link from 'next/link'

function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [navbarBg, setNavbarBg] = useState(true);


    const handleToggle = () => {
        setToggle(!toggle);
    }
    
    useEffect(() => {
        const changeNavbarBackground = () => {
            if (window.scrollY >= 20) {
                setNavbarBg(false); // Change background color on scroll
            } else {
                setNavbarBg(true); // Reset background color
            }
        }

        document.addEventListener('scroll', changeNavbarBackground);

        return () => {
            document.removeEventListener('scroll', changeNavbarBackground);
        }
    }, []);
    return (
        <div className="overflow-hidden">
            <section className={navbarBg ? 'fixed w-full z-[999] bg-[#f9f1f301] transition-all duration-500 ease-in-out' : 'p-4 fixed w-full z-[999] bg-[#f9f1f3] transition-all duration-500 ease-in-out'}>
                <div className='lg:max-w-[95%] m-auto md:flex justify-between items-center'>
                    <header className='flex justify-between items-center'>
                        <div className="logo">
                           
                            <Image src={logoImg} className='md:w-[50px] md:h-[50px]' alt="alt" width={50} height={50} />
                        </div>

                        <div className="toggle md:hidden">
                            <Icon icon="bx:menu" className={`text-[30px] text-[#800020] cursor-pointer ${toggle ? 'hidden' : ''}`} onClick={handleToggle}></Icon>
                            <Icon icon="material-symbols-light:close" className={`text-[30px] text-[#800020] cursor-pointer ${toggle ? '' : 'hidden'}`} onClick={handleToggle}></Icon>
                        </div>
                    </header>

                    <nav className={ toggle ? 'bg-[#800020] md:bg-transparent p-4 absolute md:static w-[250px] right-0 transition-all duration-300 ease-in-out z-[999]' : "bg-[#800020] md:bg-transparent p-4 absolute md:static w-[250px] right-[-100%] transition-all duration-300 ease-in-out z-[999]"}>
                        <ul className='text-[#f9f1f3] font-[500] md:text-[#1a0006] md:flex justify-around items-center grid gap-3'>
                            <li className='cursor-pointer'><Link href="#STYLES">Explore</Link></li>
                            <li className='cursor-pointer'><Link href="#CONTACT">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </section>
        </div>
    )
}

export default Navbar;
