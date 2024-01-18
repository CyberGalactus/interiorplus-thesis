"use client"
import Link from 'next/link';
import Styles from './navbar.module.css'
import NavLink from '../Navbarlink';
import MenuOverlay from '../MenuOverlay';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

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
                        <img
                            className={Styles.logoImage}
                            src="/interiorPLus.png"
                            alt="Interior plus logo"
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
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
}

export default Navbar;