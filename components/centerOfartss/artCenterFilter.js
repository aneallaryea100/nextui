import React from 'react'
import styles from '@styles/artcenterFilter.module.css'
import {AiOutlineUp, AiOutlineDown } from "react-icons/ai";
function ArtCenterFilter({artcenterartworks}) {
  return (
    <div className='wrapperArtCenterFilter bg-red-500'>
      <div className="navbarArtcenterFilter">
        <div className="navbarArtcenterFilter1">
            <p>Filter by</p>
        <p className="artworkLength">{artcenterartworks.length} Artworks:</p>
        </div>
        
        <div className="artcenterAccordion"><span>Sort: Recommended</span> <span><AiOutlineDown /></span></div>
      </div>
    </div>
  )
}

export default ArtCenterFilter
