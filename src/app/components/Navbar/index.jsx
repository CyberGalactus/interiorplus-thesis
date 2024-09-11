"use client"
import Link from 'next/link';
import Styles from './navbar.module.css'
import NavLink from '../Navbarlink';
import MenuOverlay from '../MenuOverlay';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from 'next/image';
import LanguageSelector from '../LanguageSelector';

const navLinks = [
  {
    title: "Suppliers",
    path: "#suppliers",
  },
  {
    title: "About us",
    path: "#about",
  },
  {
    title: "Showroom",
    path: "#showroom",
  },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className={Styles.navbar}>
            <div className={Styles.NavbarContainer}>
                <div className={Styles.leftNav}>
                    <Link href="/">
                        <Image
                            className={Styles.logoImage}
                            src="/interiorPLus.png"
                            alt="Interior plus logo"
                            width={320}
                            height={119}
                            />
                    </Link>
                </div>
                <div className={Styles.mobileMenu}>
                {!navbarOpen ? (
                    <button onClick={() => setNavbarOpen(true)} className={Styles.knappar}>
                    <Bars3Icon className={Styles.bars} />
                    </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className={Styles.knappar}>
                    <XMarkIcon className={Styles.bars} />
                    </button>
                )}
                </div>

                <div className={Styles.rightNav}>
                    <ul>
                        {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                        ))}
                    </ul>
                </div>                          
                        <li className={Styles.languageNav}>
                            <div className={Styles.languageBox}>
                                <LanguageSelector />
                            </div>
                        </li>
            </div>
            {navbarOpen ? ( <>
                <MenuOverlay links={navLinks}/>
                <LanguageSelector />
            </>
            ) : null}
        </nav>
    );
}

export default Navbar;