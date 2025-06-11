"use client";

import React, {useState} from 'react'
import Link from 'next/link';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
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
    <nav className='fixed w-full bg-gray-400 dark:bg-dark/80 backdrop-blur-sm z-50'>
        <div className='container max-w-7xl mx-auto px-4'>
            {/* Desktop Menu */}
            <div>
                <Link href='/'>CSA Logo</Link>
            </div>
            {/* Mobile Menu */}
        </div>
    </nav>
  )
}

export default Navbar