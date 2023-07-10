import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import styles from '../styles/featuredProduct.module.css'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from 'react';


function FeaturedProducts() {

  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleClick = () => {
    setIsHeartFilled(!isHeartFilled);
  }
  
      return (
        <div className={styles.darkbackground}>
          <h1 className={styles.headGalText}>Gallery</h1>
        <ScrollingCarousel show={3.5} slide={3} swiping={true}>

        <div className={styles.itemBox}>
            <div className={styles.itemImageBox}>
              <img src="images/Damola.jpg" alt="Item 1" />
              </div>
              <div className={styles.featuredHeadtext}>
                <span>Naa Amerley</span>
                {
                  isHeartFilled ? (
                    <AiFillHeart onClick={handleClick} className={`${styles.heartFilled} ${styles.heartbtn}`}/>
                  ) : (
                    <AiOutlineHeart onClick={handleClick} className={`${styles.heartOutline} ${styles.heartbtn}`}/>
                  )
                }
                </div>
              <div className={styles.featuredGaldescribe}>
                <p className={styles.featuredGalsubtext}>The strenght of smile</p>
                <p className={styles.featuredGalsubnexttext}>Behind the walls</p>
                <span className={styles.featuredGalprice}>$600</span>
              </div>
           </div>

           <div className={styles.itemBox}>
            <div className={styles.itemImageBox}>
              <img src="images/cp.jpg" alt="Item 1" />
              </div>
              <div className={styles.featuredHeadtext}>
                <span>Naa Borley</span>
                {
                  isHeartFilled ? (
                    <AiFillHeart onClick={handleClick} className={`${styles.heartFilled} ${styles.heartbtn}`}/>
                  ) : (
                    <AiOutlineHeart onClick={handleClick} className={`${styles.heartOutline} ${styles.heartbtn}`}/>
                  )
                }
              </div>
              <div className={styles.featuredGaldescribe}>
                <p className={styles.featuredGalsubtext}>The story within my eyes</p>
                <p className={styles.featuredGalsubnexttext}>Jackson's Villa</p>
                <span className={styles.featuredGalprice}>$490</span>
              </div>
           </div>

           <div className={styles.itemBox}>
            <div className={styles.itemImageBox}>
              <img src="images/NFA.png" alt="Item 1" />
              </div>
              <div className={styles.featuredHeadtext}>
                <span>Ashidam Maakai</span>
                {
                  isHeartFilled ? (
                    <AiFillHeart onClick={handleClick} className={`${styles.heartFilled} ${styles.heartbtn}`}/>
                  ) : (
                    <AiOutlineHeart onClick={handleClick} className={`${styles.heartOutline} ${styles.heartbtn}`}/>
                  )
                }
                </div>
              <div className={styles.featuredGaldescribe}>
                <p className={styles.featuredGalsubtext}>The life of a fighter</p>
                <p className={styles.featuredGalsubnexttext}>Walks of War</p>
                <span className={styles.featuredGalprice}>$300</span>
              </div>
           </div>

           <div className={styles.itemBox}>
            <div className={styles.itemImageBox}>
              <img src="images/identity.webp" alt="Item 1" />
              </div>
              <div className={styles.featuredHeadtext}>
                <span>Hatim Eddinani</span>
                {
                  isHeartFilled ? (
                    <AiFillHeart onClick={handleClick} className={`${styles.heartFilled} ${styles.heartbtn}`}/>
                  ) : (
                    <AiOutlineHeart onClick={handleClick} className={`${styles.heartOutline} ${styles.heartbtn}`}/>
                  )
                }
                </div>
              <div className={styles.featuredGaldescribe}>
                <p className={styles.featuredGalsubtext}>The Congo Burden of wealth</p>
                <p className={styles.featuredGalsubnexttext}>Backarolls</p>
                <span className={styles.featuredGalprice}>$467</span>
              </div>
           </div>

           <div className={styles.itemBox}>
            <div className={styles.itemImageBox}>
              <img src="images/guns.jpg" alt="Item 1" />
              </div>
              <div className={styles.featuredHeadtext}>
                <span>Hatim Eddinani</span>
                {
                  isHeartFilled ? (
                    <AiFillHeart onClick={handleClick} className={`${styles.heartFilled} ${styles.heartbtn}`}/>
                  ) : (
                    <AiOutlineHeart onClick={handleClick} className={`${styles.heartOutline} ${styles.heartbtn}`}/>
                  )
                }
                </div>
              <div className={styles.featuredGaldescribe}>
                <p className={styles.featuredGalsubtext}>The Congo Burden of wealth</p>
                <p className={styles.featuredGalsubnexttext}>Backarolls</p>
                <span className={styles.featuredGalprice}>$467</span>
              </div>
           </div>

           <div className={styles.itemBox}>
            <div className={styles.itemImageBox}>
              <img src="images/mcCoy.jpg" alt="Item 1" />
              </div>
              <div className={styles.featuredHeadtext}>
                <span>Hatim Eddinani</span>
                {
                  isHeartFilled ? (
                    <AiFillHeart onClick={handleClick} className={`${styles.heartFilled} ${styles.heartbtn}`}/>
                  ) : (
                    <AiOutlineHeart onClick={handleClick} className={`${styles.heartOutline} ${styles.heartbtn}`}/>
                  )
                }
                </div>
              <div className={styles.featuredGaldescribe}>
                <p className={styles.featuredGalsubtext}>The Congo Burden of wealth</p>
                <p className={styles.featuredGalsubnexttext}>Backarolls</p>
                <span className={styles.featuredGalprice}>$467</span>
              </div>
           </div>

           <div className={styles.itemBox}>
            <div className={styles.itemImageBox}>
              <img src="images/Octavia.jpg" alt="Item 1" />
              </div>
              <div className={styles.featuredHeadtext}>
                <span>Hatim Eddinani</span>
                {
                  isHeartFilled ? (
                    <AiFillHeart onClick={handleClick} className={`${styles.heartFilled} ${styles.heartbtn}`}/>
                  ) : (
                    <AiOutlineHeart onClick={handleClick} className={`${styles.heartOutline} ${styles.heartbtn}`}/>
                  )
                }
                </div>
              <div className={styles.featuredGaldescribe}>
                <p className={styles.featuredGalsubtext}>The Congo Burden of wealth</p>
                <p className={styles.featuredGalsubnexttext}>Backarolls</p>
                <span className={styles.featuredGalprice}>$467</span>
              </div>
           </div>

           <div className={styles.itemBox}>
            <div className={styles.itemImageBox}>
              <img src="images/pat.jpg" alt="Item 1" />
              </div>
              <div className={styles.featuredHeadtext}>
                <span>Hatim Eddinani</span>
                {
                  isHeartFilled ? (
                    <AiFillHeart onClick={handleClick} className={`${styles.heartFilled} ${styles.heartbtn}`}/>
                  ) : (
                    <AiOutlineHeart onClick={handleClick} className={`${styles.heartOutline} ${styles.heartbtn}`}/>
                  )
                }
                </div>
              <div className={styles.featuredGaldescribe}>
                <p className={styles.featuredGalsubtext}>The Congo Burden of wealth</p>
                <p className={styles.featuredGalsubnexttext}>Backarolls</p>
                <span className={styles.featuredGalprice}>$467</span>
              </div>
           </div>

           <div className={styles.itemBox}>
            <div className={styles.itemImageBox}>
              <img src="images/redshorts.jpg" alt="Item 1" />
              </div>
              <div className={styles.featuredHeadtext}>
                <span>Hatim Eddinani</span>
                {
                  isHeartFilled ? (
                    <AiFillHeart onClick={handleClick} className={`${styles.heartFilled} ${styles.heartbtn}`}/>
                  ) : (
                    <AiOutlineHeart onClick={handleClick} className={`${styles.heartOutline} ${styles.heartbtn}`}/>
                  )
                }
                </div>
              <div className={styles.featuredGaldescribe}>
                <p className={styles.featuredGalsubtext}>The Congo Burden of wealth</p>
                <p className={styles.featuredGalsubnexttext}>Backarolls</p>
                <span className={styles.featuredGalprice}>$467</span>
              </div>
           </div>

          <div className={styles.itemBox}>
            <div className={styles.itemImageBox}>
              <img src="images/Satirical.png" alt="Item 1" />
              </div>
              <div className={styles.featuredHeadtext}>
                <span>Hatim Eddinani</span>
                {
                  isHeartFilled ? (
                    <AiFillHeart onClick={handleClick} className={`${styles.heartFilled} ${styles.heartbtn}`}/>
                  ) : (
                    <AiOutlineHeart onClick={handleClick} className={`${styles.heartOutline} ${styles.heartbtn}`}/>
                  )
                }
                </div>
              <div className={styles.featuredGaldescribe}>
                <p className={styles.featuredGalsubtext}>The Congo Burden of wealth</p>
                <p className={styles.featuredGalsubnexttext}>Backarolls</p>
                <span className={styles.featuredGalprice}>$467</span>
              </div>
           </div>

           <div className={styles.itemBox}>
            <div className={styles.itemImageBox}>
              <img src="images/Theron.jpg" alt="Item 1" />
              </div>
              <div className={styles.featuredHeadtext}>
                <span>Hatim Eddinani</span>
                {
                  isHeartFilled ? (
                    <AiFillHeart onClick={handleClick} className={`${styles.heartFilled} ${styles.heartbtn}`}/>
                  ) : (
                    <AiOutlineHeart onClick={handleClick} className={`${styles.heartOutline} ${styles.heartbtn}`}/>
                  )
                }
                </div>
              <div className={styles.featuredGaldescribe}>
                <p className={styles.featuredGalsubtext}>The Congo Burden of wealth</p>
                <p className={styles.featuredGalsubnexttext}>Backarolls</p>
                <span className={styles.featuredGalprice}>$467</span>
              </div>
           </div>

           <div className={styles.itemBox}>
            <div className={styles.itemImageBox}>
              <img src="images/Fallen.jpg" alt="Item 1" />
              </div>
              <div className={styles.featuredHeadtext}>
                <span>George West</span>
                {
                  isHeartFilled ? (
                    <AiFillHeart onClick={handleClick} className={`${styles.heartFilled} ${styles.heartbtn}`}/>
                  ) : (
                    <AiOutlineHeart onClick={handleClick} className={`${styles.heartOutline} ${styles.heartbtn}`}/>
                  )
                }
                </div>
              <div className={styles.featuredGaldescribe}>
                <p className={styles.featuredGalsubtext}>Syllables of tears</p>
                <p className={styles.featuredGalsubnexttext}>High Street Arts</p>
                <span className={styles.featuredGalprice}>$546</span>
              </div>
           </div>
        </ScrollingCarousel>
        </div>
      );
}

export default FeaturedProducts
