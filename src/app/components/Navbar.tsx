"use client";

import React, {useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
    <nav className='fixed top w-full bg-white shadow-md/15'>
        <div className='mx-auto px-5 py-1'>
            {/* Desktop Menu */}
            <div className='flex items-center justify-between h-16 font-primary'>
                <Link href='/'>
                    <Image src="/logo.png" alt="CSA Logo" width={50} height={50}/>
                </Link>
                <div className='hidden md:flex items-center space-x-7'>
                    {
                        menuItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link className={`tracking-wider text-xl text-black hover:scale-110 hover:text-primary ${isActive ? 'scale-110 text-primary' : '' }`} 
                                href={item.href} key={item.href}>{item.label}</Link>
                            )
                        })
                    }
                </div>  
            </div>          

            {/* Mobile Menu */}
        </div>
    </nav>
  )
}

export default Navbar;