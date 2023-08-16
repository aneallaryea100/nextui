import React, { useState, useEffect } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import styles from '@styles/followArtist.module.css'
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

function FollowArtist() {
    const [isFollowing, setIsFollowing] = useState(false);
    const [itemsToShow, setItemsToShow] = useState(3.5);

    useEffect(() => {
        // Update the number of items to show based on screen width
        const updateItemsToShow = () => {
          const newItemsToShow = window.innerWidth <= 768 ? 1.5 : 3.5;
          setItemsToShow(newItemsToShow);
        };
    
        // Call the function on initial load and whenever the window is resized
        updateItemsToShow();
        window.addEventListener('resize', updateItemsToShow);
    
        // Clean up the event listener when the component is unmounted
        return () => {
          window.removeEventListener('resize', updateItemsToShow);
        };
      }, []);
    

  const handleButtonClick = () => {
    setIsFollowing(!isFollowing);
    console.log('clicked')
  };

  return (
    <div className={styles.artistWrapperContainer}>
      <h2 className={styles.followArtistHead}>Trending Artist on Tribals</h2>
      <Carousel responsive={true} show={itemsToShow} swiping={true} useArrowKeys={true} leftArrow={<div className={`${styles.arrowBtnleft} ${styles.arrowBtn}`}>{<AiFillCaretLeft />}</div>}
        rightArrow={<div className={`${styles.arrowBtnright} ${styles.arrowBtn}`}>{<AiFillCaretRight/>}</div>} className={styles.caroueslDiv}>
        <div className={styles.artistBoxContainer}>
            <div className={styles.artistImageBoxContainer}>
                <img src="images/Matt Small.jpg" alt="Matt Small" />
            </div>
            <div className={styles.artistTextBoxContainer}>
                <div className={styles.artistTextBoxIdentity}>
                    <h3>Michael Summon</h3>
                    <span>Congolese, b.1990</span>
                </div>
                <div className={styles.artistFollowBoxBtn}>
                <button className={styles.artistfollowBtn} onClick={handleButtonClick}>{isFollowing ? 'Following' : 'Follow'}</button>
                </div>
            </div>
        </div>

        <div className={styles.artistBoxContainer}>
            <div className={styles.artistImageBoxContainer}>
                <img src="images/ivana.jpg" alt="Matt Small" />
            </div>
            <div className={styles.artistTextBoxContainer}>
                <div className={styles.artistTextBoxIdentity}>
                    <h3>Michael Summon</h3>
                    <span>Congolese, b.1990</span>
                </div>
                <div className={styles.artistFollowBoxBtn}>
                    <button type='button' className={styles.artistfollowBtn}>Follow</button>
                </div>
            </div>
        </div>

        <div className={styles.artistBoxContainer}>
            <div className={styles.artistImageBoxContainer}>
                <img src="images/glasswear.jpg" alt="Matt Small" />
            </div>
            <div className={styles.artistTextBoxContainer}>
                <div className={styles.artistTextBoxIdentity}>
                    <h3>Michael Summon</h3>
                    <span>Congolese, b.1990</span>
                </div>
                <div className={styles.artistFollowBoxBtn}>
                    <button type='button' className={styles.artistfollowBtn}>Follow</button>
                </div>
            </div>
        </div>

        <div className={styles.artistBoxContainer}>
            <div className={styles.artistImageBoxContainer}>
                <img src="images/rogier.jpg" alt="Matt Small" />
            </div>
            <div className={styles.artistTextBoxContainer}>
                <div className={styles.artistTextBoxIdentity}>
                    <h3>Michael Summon</h3>
                    <span>Congolese, b.1990</span>
                </div>
                <div className={styles.artistFollowBoxBtn}>
                    <button type='button' className={styles.artistfollowBtn}>Follow</button>
                </div>
            </div>
        </div>

        <div className={styles.artistBoxContainer}>
            <div className={styles.artistImageBoxContainer}>
                <img src="images/thunder.jpg" alt="Matt Small" />
            </div>
            <div className={styles.artistTextBoxContainer}>
                <div className={styles.artistTextBoxIdentity}>
                    <h3>Michael Summon</h3>
                    <span>Congolese, b.1990</span>
                </div>
                <div className={styles.artistFollowBoxBtn}>
                    <button type='button' className={styles.artistfollowBtn}>Follow</button>
                </div>
            </div>
        </div>

        <div className={styles.artistBoxContainer}>
            <div className={styles.artistImageBoxContainer}>
                <img src="images/mj.png" alt="Matt Small" />
            </div>
            <div className={styles.artistTextBoxContainer}>
                <div className={styles.artistTextBoxIdentity}>
                    <h3>Michael Summon</h3>
                    <span>Congolese, b.1990</span>
                </div>
                <div className={styles.artistFollowBoxBtn}>
                    <button type='button' className={styles.artistfollowBtn}>Follow</button>
                </div>
            </div>
        </div>

        <div className={styles.artistBoxContainer}>
            <div className={styles.artistImageBoxContainer}>
                <img src="images/nosering.jpg" alt="Matt Small" />
            </div>
            <div className={styles.artistTextBoxContainer}>
                <div className={styles.artistTextBoxIdentity}>
                    <h3>Michael Summon</h3>
                    <span>Congolese, b.1990</span>
                </div>
                <div className={styles.artistFollowBoxBtn}>
                    <button type='button' className={styles.artistfollowBtn}>Follow</button>
                </div>
            </div>
        </div>


        <div className={styles.artistBoxContainer}>
            <div className={styles.artistImageBoxContainer}>
                <img src="images/walker.jpg" alt="Matt Small" />
            </div>
            <div className={styles.artistTextBoxContainer}>
                <div className={styles.artistTextBoxIdentity}>
                    <h3>Michael Summon</h3>
                    <span>Congolese, b.1990</span>
                </div>
                <div className={styles.artistFollowBoxBtn}>
                    <button type='button' className={styles.artistfollowBtn}>Follow</button>
                </div>
            </div>
        </div>


        <div className={styles.artistBoxContainer}>
            <div className={styles.artistImageBoxContainer}>
                <img src="images/colosal.png" alt="Matt Small" />
            </div>
            <div className={styles.artistTextBoxContainer}>
                <div className={styles.artistTextBoxIdentity}>
                    <h3>Michael Summon</h3>
                    <span>Congolese, b.1990</span>
                </div>
                <div className={styles.artistFollowBoxBtn}>
                    <button type='button' className={styles.artistfollowBtn}>Follow</button>
                </div>
            </div>
        </div>


        <div className={styles.artistBoxContainer}>
            <div className={styles.artistImageBoxContainer}>
                <img src="images/hatww.png" alt="Matt Small" />
            </div>
            <div className={styles.artistTextBoxContainer}>
                <div className={styles.artistTextBoxIdentity}>
                    <h3>Michael Summon</h3>
                    <span>Congolese, b.1990</span>
                </div>
                <div className={styles.artistFollowBoxBtn}>
                    <button type='button' className={styles.artistfollowBtn}>Follow</button>
                </div>
            </div>
        </div>
      </Carousel>
    </div>
  )
}

export default FollowArtist
