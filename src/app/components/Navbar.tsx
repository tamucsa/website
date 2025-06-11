import React, {useState} from 'react'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }
    const menuItems = [
        { name: 'Home', href: '/' },
        { name: 'Officers', href: '/officers' },
        { name: 'Events', href: '/events' },
        { name: 'Membership', href: '/membership' },
        { name: 'General Meetings', href: '/gm' },
        { name: 'Jiatings', href: '/jiatings' },
        { name: 'Nihowdy', href: '/nihowdy' },
        { name: 'Photos', href: '/photos' },
        { name: 'Contact', href: '/contact' },
    ];
  return (
    <div>navbar</div>
  )
}

export default Navbar