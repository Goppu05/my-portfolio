import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from './NavLink';
import { title } from 'process';
import NavBar from './Navbar';

const FooterSection = () => {
  return (
    <footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
      <div className='container p-12 flex justify-between'>
        <span>
        <Link href={'/'}>
        <Image 
        src = '/images/CodingGoni.png' 
        alt='logo' width={100} height={100} />
        </Link>
        </span>
        <p className='text-slate-600'>All rights reserved.</p>
      </div>
    </footer>
  )
}

export default FooterSection
