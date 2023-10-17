import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@styles/miniNav.module.css'
import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineSearch, AiOutlineUser, AiFillMail } from "react-icons/ai";
import { data } from 'jquery';

function MiniNavbar() {
  const {data: session} = useSession();
  const[isUserProfileOpen, setIsUserProfileOpen] = useState(false);

  const toggleUserProfile = () => {
    setIsUserProfileOpen(!isUserProfileOpen);
    console.log('session user', session.user)
  }

  return (
    <div className={styles.miniNavContainer}>
      <div className={styles.inputSearchDiv}>
        <input type='text' placeholder='search Artist, art center, product && Collections.... ' className={styles.inputSearchTexts}/>
        <AiOutlineSearch />
      </div>
      <div className={styles.acountSearchProfile}>
        <span>Buy</span>
        <span>Sell</span>
          <span><Link href={'/articles'}>Editorial</Link></span>
          <AiFillMail />
          <span onClick={toggleUserProfile}><AiOutlineUser /></span>
          {
            isUserProfileOpen && (
              <div className={styles.subProfileMenu}>
                <btb>{session?<button onClick={() => signOut()} className={styles.loggbtn}>logout</button> : <button onClick={() => signIn()} className={styles.loggbtn}>login</button>}</btb>
              <span>settings</span>
              <span>Profile</span>
              </div>
              
            )
          }
        
      </div>
    </div>
  )
}

export default MiniNavbar
