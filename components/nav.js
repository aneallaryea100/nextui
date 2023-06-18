import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import styles from '@styles/navbar.module.css'

function Nav () {
    const {data: session} = useSession();

    return (
        <div className={styles.navContainer}>
            <div><Link href={'/'}>Tribals team</Link></div>
            <div><Link href={'/'}>Share Hugs</Link></div>
            <div><Link href={'/'}>Share Hugs</Link></div>
            <div className={styles.logoContain}><Link href={'/'} className={styles.logo}>Tribals</Link></div>
            <div><Link href={'/'}>Big Smiles</Link></div>
            <div><Link href={'/'}>Big Smiles</Link></div>
            <div><Link href={'/'}>Share Hugs</Link></div>
            <btb>{session.user?<button onClick={() => signOut()} className={styles.loggbtn}>logout</button> : <button onClick={() => signIn()} className={styles.loggbtn}>login</button>}</btb>
        </div>
    )
}

export default Nav