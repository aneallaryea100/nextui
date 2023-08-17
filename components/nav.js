import React, { useState, useEffect } from 'react';
import Link from "next/link";
import styles from '@styles/navbar.module.css'
import MiniNavbar from "./miniNav";
import { CiMenuFries } from "react-icons/ci";

function Nav () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
          } else {
            document.body.style.overflow = 'auto';
          }
        };
    
        handleScroll(); // Set initial scroll behavior
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <div className={styles.navContainer}>
                <div className={styles.navContainer1}>
                    <div><Link href={'/'}>Artist</Link></div>
                    <div><Link href={'/'}>Gallery</Link></div>
                    <div><Link href={'/'}>Center of Art</Link></div>
                    <div className={styles.logoContain}><Link href={'/'} className={styles.logo}>Tribals</Link></div>
                    <div><Link href={'/'}>Share Hugs</Link></div>
                    <div><Link href={'/'}>Shop</Link></div>
                    <div><Link href={'/'}>Tribals team</Link></div>
                </div>
                {/* navbar on mobile screen */}
                <div className={styles.navMobile}>
                    <div className={styles.logoContain}><Link href={'/'} className={styles.logo}>Tribals</Link></div>
                    <div className={styles.menuContainer}>
                        <span onClick={toggleMenu}><CiMenuFries /></span>
                    </div>
                </div>
                <MiniNavbar />
            </div>
            {
                isMenuOpen && (
                    <div className={styles.navbarMobileMenu}>
                        <div className={styles.navbarMobileMenuList}>
                            <span className={styles.closemenu} onClick={toggleMenu}>closebtn</span>
                            <div><Link href={'/'}>Artist</Link></div>
                            <div><Link href={'/'}>Gallery</Link></div>
                            <div><Link href={'/'}>Center of Art</Link></div>
                            <div><Link href={'/'}>Share Hugs</Link></div>
                            <div><Link href={'/'}>Shop</Link></div>
                            <div><Link href={'/'}>Tribals team</Link></div>
                            <hr />
                            <div><Link href={'/'}>Buy</Link></div>
                            <div><Link href={'/'}>Sell</Link></div>
                            <div><Link href={'/'}>Editorial</Link></div>
                            <hr />
                            <div><Link href={'/'}>Inbox</Link></div>
                            <div><Link href={'/'}>Settings</Link></div>
                            <div><Link href={'/'}>Get the app</Link></div>
                            <div><Link href={'/'}>Log out</Link></div>
                            </div>
                    </div>
                )
            }
            
        </>
        
    )
}

export default Nav

