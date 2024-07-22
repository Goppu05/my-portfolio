"use client";
import { Link, animateScroll as scroll } from "react-scroll";
import React , {useState} from 'react';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  }
];


const navbar = () => {
  const[navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
        <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <Link href={'/'} className='text-2xl md:text-5xl text-white font-semibold'>
          <Image src = '/images/CodingGoni.png' alt='logo' width={90} height={50} />
        </Link>
          <div className="menu block md:w-auto" id="navbar" >
            <ul className='flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0'>
              {
                navLinks.map((link, index)=> (
                  <li key={index}>
                    <NavLink path={link.path} title={link.title}></NavLink>
                  </li>
                ))
              }
            </ul>

          </div>

        </div>
         {navbarOpen ? <MenuOverlay links={navLinks}/>:null}
         
    </nav>
  )
}

export default navbar
