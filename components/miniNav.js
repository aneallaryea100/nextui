import styles from '@styles/miniNav.module.css'
import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineSearch, AiOutlineUser, AiFillMail } from "react-icons/ai";

function MiniNavbar() {
  const {data: session} = useSession();
  return (
    <div className={styles.miniNavContainer}>
      <div className={styles.inputSearchDiv}>
        <input type='text' placeholder='search Artist, art center, product && Collections.... ' className={styles.inputSearchTexts}/>
        <AiOutlineSearch />
      </div>
      <div className={styles.acountSearchProfile}>
        <span>Buy</span>
        <span>Sell</span>
          <span>Editorial</span>
          <AiFillMail />
          <AiOutlineUser />
        <btb>{session?<button onClick={() => signOut()} className={styles.loggbtn}>logout</button> : <button onClick={() => signIn()} className={styles.loggbtn}>login</button>}</btb>
      </div>
    </div>
  )
}

export default MiniNavbar
