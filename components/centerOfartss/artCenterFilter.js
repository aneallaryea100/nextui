import React from 'react'
import styles from '@styles/artcenterFilter.module.css'
import {AiOutlineUp, AiOutlineDown } from "react-icons/ai";
function ArtCenterFilter({artcenterartworks}) {
  return (
    <div className={styles.wrapperArtCenterFilter}>
      <div className={styles.navbarArtcenterFilter}>
        <div className={styles.navbarArtcenterFilter1}>
            <p>Filter by</p>
        <p className={styles.artworkLength}>{artcenterartworks.length} Artworks:</p>
        </div>
        
        <div className={styles.artcenterAccordion}><span>Sort: Recommended</span> <span><AiOutlineDown /></span></div>
      </div>
    </div>
  )
}

export default ArtCenterFilter
