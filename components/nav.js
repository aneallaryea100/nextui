import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import styles from '@styles/navbar.module.css'

function Nav () {
    const {data: session} = useSession();

    return (
        <div className={styles.navContainer}>
            <div><Link href={'/'}>Artist</Link></div>
            <div><Link href={'/'}>Gallery</Link></div>
            <div><Link href={'/'}>Center of Art</Link></div>
            <div className={styles.logoContain}><Link href={'/'} className={styles.logo}>Tribals</Link></div>
            <div><Link href={'/'}>Share Hugs</Link></div>
            <div><Link href={'/'}>Shop</Link></div>
            <div><Link href={'/'}>Tribals team</Link></div>
            <btb>{session.user?<button onClick={() => signOut()} className={styles.loggbtn}>logout</button> : <button onClick={() => signIn()} className={styles.loggbtn}>login</button>}</btb>
        </div>
    )
}

export default Nav