import Link from "next/link";
import styles from '@styles/navbar.module.css'
import MiniNavbar from "./miniNav";

function Nav () {

    return (
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
        <MiniNavbar />
        </div>
    )
}

export default Nav

