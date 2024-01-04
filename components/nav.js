import React, { useState, useEffect } from 'react';
import Link from "next/link";
import styles from '@styles/navbar.module.css'
import MiniNavbar from "./miniNav";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

function Nav () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // const handleScroll = () => {
        //   if (isMenuOpen) {
        //     document.body.style.overflow = 'hidden';
        //   } else {
        //     document.body.style.overflow = 'auto';
        //   }
        // };
    
        // handleScroll(); // Set initial scroll behavior
    
        // window.addEventListener('scroll', handleScroll);
    
        // return () => {
        //   window.removeEventListener('scroll', handleScroll);
        // };
      }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <div className={styles.navContainer}>
                <div className={styles.navContainer1}>
                    <div><Link href={'/artists'}>Artist</Link></div>
                    <div><Link href={'/gallery'}>Gallery</Link></div>
                    <div><Link href={'/centerofart'}>Center of Art</Link></div>
                    <div className={styles.logoContain}><Link href={'/'} className={styles.logo}>Tribals</Link></div>
                    <div><Link href={'/art-fairs'}>Fairs</Link></div>
                    <div><Link href={'/'}>Shop</Link></div>
                    <div><Link href={'/'}>Tribals team</Link></div>
                </div>
                {/* navbar on mobile screen */}
                <div className={styles.navMobile}>
                    <div className={styles.logoContain}><Link href={'/'} className={styles.logo}>Tribals</Link></div>
                    <div className={styles.menuContainer}>
                        <span onClick={toggleMenu} className={styles.hmenu}><CiMenuFries /></span>
                    </div>
                </div>
                <MiniNavbar />
            </div>
            {
                isMenuOpen && (
                    <div className={styles.navbarMobileMenu}>
                        <div className={styles.navbarMobileMenuClose}>
                             <span className={styles.closemenu} onClick={toggleMenu}><AiOutlineClose /></span>
                        </div>
                       
                        <div className={styles.navbarMobileMenuList}>
                            <div><Link href={'/artists'}  onClick={toggleMenu}>Artist</Link></div>
                            <div><Link href={'/gallery'}  onClick={toggleMenu}>Gallery</Link></div>
                            <div><Link href={'/centerofart'}  onClick={toggleMenu}>Center of Art</Link></div>
                            <div><Link href={'/art-fairs'}  onClick={toggleMenu}>Fairs</Link></div>
                            <div className='cursor-pointer'  onClick={toggleMenu}><Link href={'/'}>Shop</Link></div>
                            <div><Link href={'/'}  onClick={toggleMenu}>Tribals team</Link></div>
                            <div><Link href={'/'}  onClick={toggleMenu}>Buy</Link></div>
                            <div><Link href={'/sell'}  onClick={toggleMenu}>Sell</Link></div>
                            <div><Link href={'/'}  onClick={toggleMenu}>Editorial</Link></div>
                            <div><Link href={'/'}  onClick={toggleMenu}>Inbox</Link></div>
                            <div><Link href={'/'}  onClick={toggleMenu}>Settings</Link></div>
                            {/* <div><Link href={'/'}  onClick={toggleMenu}>Get the app</Link></div> */}
                            <div><Link href={'/'}  onClick={toggleMenu}>Log out</Link></div>
                            </div>
                    </div>
                )
            }
            
        </>
        
    )
}

export default Nav

