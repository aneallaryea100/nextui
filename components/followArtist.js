import React, { useState, useEffect } from 'react';
import styles from '@styles/followArtist.module.css'
import cardArtist from '@localDatabase/cardArtist.js'
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";


function FollowArtist() {
    const [isFollowing, setIsFollowing] = useState(false);
    const [scrollLeft, setScrollLeft] = useState(0);
    
    const handleButtonClick = () => {
    setIsFollowing(!isFollowing);
    console.log('clicked')
  };

  const sideScroll = (direction, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      if (direction === 'left') {
        setScrollLeft((prevScroll) => prevScroll - step);
      } else {
        setScrollLeft((prevScroll) => prevScroll + step);
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, 25);
  };

    
  return (
    <div className={styles.artistWrapperContainer}>
      <h2 className={styles.followArtistHead}>Trending Artist on Tribals</h2>
        <div className={styles.caroueslDiv} onScroll={(e) => setScrollLeft(e.target.scrollLeft)}>
            
            {cardArtist.map((card, index) => (

                <div className={styles.artistBoxContainer} key={index} id={card.id}>
                <div className={styles.artistImageBoxContainer}>
                    <img src={card.image} alt={card.name} />
                </div>
                <div className={styles.artistTextBoxContainer}>
                    <div className={styles.artistTextBoxIdentity}>
                        <h3>{card.name}</h3>
                        <span>{card.location}</span>
                    </div>
                    <div className={styles.artistFollowBoxBtn}>
                    <button className={styles.artistfollowBtn} onClick={handleButtonClick}>{isFollowing ? 'Following' : 'Follow'}</button>
                    </div>
                </div>
            </div>
        
            ))}
            
        </div>
        <div className={styles.controls}>
            <button onClick={() => sideScroll('right', 100, 10)} className={styles.arrowBtnleft}><AiFillCaretLeft /></button>
            <button onClick={() => sideScroll('left', 100, 10)} className={styles.arrowBtnright}><AiFillCaretRight/></button>
        </div>
    </div>
  )
}

export default FollowArtist
