"use client";

import React, {useState} from 'react'
import { RiInstagramFill, RiYoutubeFill, RiMailFill} from "react-icons/ri";
import Link from 'next/link';

const Footer = () => {
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
        { label: 'Photos', href: '/photos'  },
        { label: 'Contact', href: '/contact' },
    ];  
  return (
    <footer className='w-full bg-black'>
        <div className='flex flex-col items-center justify-center py-5 gap-5'>
            <div className='flex flex-row items-center gap-2'>
                <Link href='https://www.instagram.com/tamu.csa/' className='hover:scale-110 p-3 bg-white rounded-xl'>
                    <RiInstagramFill className='h-8 w-8 text-primary' />
                </Link>
                <Link href='mailto:tamu.csa1963@gmail.com' className='hover:scale-110 p-3 bg-white rounded-xl'>
                    <RiMailFill className='h-8 w-8 text-primary' />
                </Link>
                <Link href='https://www.youtube.com/channel/UCfDD6-EopsnLFnkD86XOY7A' className='hover:scale-110 p-3 bg-white rounded-xl'>
                    <RiYoutubeFill className='h-8 w-8 text-primary' />
                </Link>
            </div>
            <div>
                <div className='font-primary text-white text-lg'> &copy; 2025 TAMU Chinese Student Association</div>
            </div>
        </div>
    </footer>
  )
}
export default Footer;