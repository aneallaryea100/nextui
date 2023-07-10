import styles from '@styles/blogDisplay.module.css'

function BlogDisplay() {
  return (
    <div className={styles.blogDisplayContainerWrapper}>
      <h2 className={styles.blogDisplayHeadText}>Tribals Editorial</h2>
      <div className={styles.blogDisplayContentContainer}>
        <div className={styles.blogDisplayContentrigthEdit}>
            <div className={styles.blogDisplayContentImagery}>
                <img src='images/fo.jpg' alt='editorial' className={styles.blogDisplayImagery}/>
            </div>
            <div className={styles.blogDisplayContenttext}>
                <span className={styles.blogDisplayContenttext1}>Center of Arts</span>
                <span className={styles.blogDisplayContenttext11}>The Tribals Book of Arts: July 2023</span>
                <span className={styles.blogDisplayContenttext2}>By Tribals Editorial</span>
                <span className={styles.blogDisplayContenttext3}>15 July, 2023</span>
            </div>
        </div>
        <div className={styles.blogDisplayContentleftEdit}>
            <div className={styles.blogDisplayContentleftBox}>
                <div className={styles.blogDisplayContentleftImageBox}>
                    <img src='images/asake.webp' alt='asake work of art' className={styles.blogDisplayimage}/>
                </div>
                <div className={`${styles.blogDisplayContentlefttextBox} ${styles.asake}`}>
                    <span className={styles.blogDisplayContentlefttext1}>Art & Music</span>
                    <span className={styles.blogDisplayContentlefttext2}>Inside the art and spirituality of Music</span>
                    <span className={styles.blogDisplayContentlefttext3}>By Asake </span>
                    <span className={styles.blogDisplayContentlefttext4}> July 8, 2023</span>
                </div>
            </div>

            <div className={styles.blogDisplayContentleftBox}>
                <div className={styles.blogDisplayContentleftImageBox}>
                    <img src='images/blacko.jpg' alt='The villian I never was-blacksherif' className={styles.blogDisplayimage}/>
                </div>
                <div className={`${styles.blogDisplayContentlefttextBox} ${styles.blacko}`}>
                    <span className={styles.blogDisplayContentlefttext1}>Art & Music</span>
                    <span className={styles.blogDisplayContentlefttext2}>The Inspiration behind the Villian I never was.</span>
                    <span className={styles.blogDisplayContentlefttext3}>By Black Sherif </span>
                    <span className={styles.blogDisplayContentlefttext4}> August 18, 2023</span>
                </div>
            </div>

            <div className={styles.blogDisplayContentleftBox}>
                <div className={styles.blogDisplayContentleftImageBox}>
                    <img src='images/stonebwoy.jpg' alt='stonebwoy- 5th dimension' className={styles.blogDisplayimage}/>
                </div>
                <div className={`${styles.blogDisplayContentlefttextBox} ${styles.stonebwoy}`}>
                    <span className={styles.blogDisplayContentlefttext1}>Art & Music</span>
                    <span className={styles.blogDisplayContentlefttext2}>The 5th Dimension and Journey of Afrobeat.</span>
                    <span className={styles.blogDisplayContentlefttext3}>By Stonebwoy </span>
                    <span className={styles.blogDisplayContentlefttext4}> June 10, 2023</span>
                </div>
            </div>

            <div className={styles.blogDisplayContentleftBox}>
                <div className={styles.blogDisplayContentleftImageBox}>
                    <img src='images/titi.jpeg' alt='Titilope' className={styles.blogDisplayimage}/>
                </div>
                <div className={`${styles.blogDisplayContentlefttextBox} ${styles.titi}`}>
                    <span className={styles.blogDisplayContentlefttext1}>Centre Of Art</span>
                    <span className={styles.blogDisplayContentlefttext2}>The different faces of womanhood.</span>
                    <span className={styles.blogDisplayContentlefttext3}>By Titilope </span>
                    <span className={styles.blogDisplayContentlefttext4}> August 10, 2023</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDisplay
