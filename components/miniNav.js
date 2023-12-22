import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@styles/miniNav.module.css'
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineSearch, AiOutlineUser, AiFillMail } from "react-icons/ai";
import { redirect } from 'next/dist/server/api-utils';
// import { useDispatch } from 'react-redux';
// import { setPreviousPage } from '@redux/slices/previousPageSlice';


function MiniNavbar() {
  const {data: session} = useSession();
  const router = useRouter();
  //const dispatch = useDispatch();
  const[isUserProfileOpen, setIsUserProfileOpen] = useState(false);

  const toggleUserProfile = () => {
    setIsUserProfileOpen(!isUserProfileOpen);
  }

  async function logInUser () {
    //dispatch(setPreviousPage(router.asPath));
    router.replace('/login')
    
    console.log("user is logged in")
  }

  return (
    <div className={styles.miniNavContainer}>
      <div className={styles.inputSearchDiv}>
        <input type='text' placeholder='search Artist, art center, product && Collections.... ' className={styles.inputSearchTexts}/>
        <AiOutlineSearch />
      </div>
      <div className={styles.acountSearchProfile}>
        <span>Buy</span>
        <span><Link href={'/sell'}>Sell</Link></span>
          <span><Link href={'/articles'}>Editorial</Link></span>
          <AiFillMail />
          <span onClick={toggleUserProfile}><AiOutlineUser /></span>
          {
            isUserProfileOpen && (
              <div className={styles.subProfileMenu}>
              <span>settings</span>
              <span>Profile</span>
              </div>
              
            )
          }
         <btb>{session?<button onClick={() => signOut()} className={styles.loggbtn}>logout</button> : <><button onClick={logInUser} className={styles.loggbtn}>login</button> <button className={styles.loggbtn}>Signup</button></>}</btb>
      </div>
    </div>
  )
}

export default MiniNavbar
