"use client";

import React, {useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiMenuLine, RiCloseLargeLine } from "react-icons/ri";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }
    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'Officers', href: '/officers' },
        { label: 'Events', href: '/events' },
        { label: 'Membership', href: '/membership' },
        { label: 'General Meetings', href: '/gm' },
        { label: 'Jiatings', href: '/jiatings' },
        { label: 'Nihowdy', href: '/nihowdy' },
        { label: 'Photos', href: '/photos' },
        { label: 'Contact', href: '/contact' },
    ];
  return (
    <nav className='fixed top-0 w-full bg-white shadow-md/15'>
        <div className='mx-auto lg:pr-5 py-1'>

            {/* Desktop View */}
            <div className='flex items-center justify-between h-16 font-primary'>
                <Link href='/' className='px-5'>
                    <Image src="/logo.png" alt="CSA Logo" width={50} height={50}/>
                </Link>
                {/* desktop menu (nav bar links) */}
                <div className='hidden lg:flex items-center space-x-7'>
                    {
                        menuItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link className={`transition tracking-wider text-xl text-black hover:scale-110 hover:text-primary ${isActive ? 'scale-110 text-primary' : '' }`} 
                                href={item.href} key={item.href}>{item.label}</Link>
                            )
                        })
                    }
                </div>  
                {/* mobile menu (dashboard button) */}
                <button className='lg:hidden p-4 m-2 text-black hover:text-primary transition-colors cursor-pointer'
                    onClick={toggleMobileMenu}>
                    {
                        isMobileMenuOpen ? (<RiCloseLargeLine className='w-6 h-6'/>) : (<RiMenuLine className='w-6 h-6'/>)
                    }
                </button>
            </div>          

            {/* Mobile View */}
            {
                isMobileMenuOpen && (
                    <div className='lg:hidden absolute w-full border-t-1 border-secondary shadow-md/15 bg-white'>
                        <div className='pb-2 space-y-4'></div>
                        {
                            menuItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <div key={item.href}>
                                        <Link className={`block py-2 px-5 font-primary tracking-wider transition-colors text-xl text-black hover:text-primary ${isActive ? ' text-primary' : '' }`}
                                        href={item.href}>{item.label}</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    </nav>
  )
}

export default Navbar;