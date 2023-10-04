import React, { useState, useRef } from 'react'
import styles from "@styles/artcenterartwoks.module.css"
import ArtCenterFilter from './artCenterFilter'
import { AiOutlineHeart, AiFillHeart, AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import Link from 'next/link';

//  grid grid-cols-2 gap-1 md:grid-cols-3 gap-2 lg:grid-cols-4 gap-3



function ArtCenterArtWorks({artcenterartworks}) {
  const [artWorkData, setartWorkData] = useState(artcenterartworks);
  
  const handleFavoriteClick = (id) => {
    setartWorkData((prevData) => 
      prevData.map((data) => 
        data.id === id ? { ...data, favourite: !data.favourite} : data
      )
    )
  }
  return (
    <>
    <ArtCenterFilter artcenterartworks={artcenterartworks}/>
        <div className="p-3 grid grid-cols-2 gap-1 md:auto-cols-auto md:grid-cols-3 gap-2 lg:grid-cols-4 gap-3">
          {
            artWorkData.map((data) => (
              
                   <div className="bg-blue-500 h-min shadow-md break-inside-avoid" key={data.id}>
                    <Link href={`/centerofart/${data.name}`}>
                    <div className={styles.artcenterartworksImageDiv}>
                        <img src={data.image} alt={data.name} className="w-full" />
                    </div>
                    <div className={styles.artcenterartworksTextBox}>
                        <div className={styles.artcenterartworksTextBox1}>
                            <div className={styles.artcenterartworksNameHeart}>
                                <h5 className={styles.artcenterartworksName}>{data.name}</h5>
                                <span className={styles.artcenterartworkslikebtn} onClick={()=> handleFavoriteClick(data.id)}>{data.favourite ? <span className={styles.fillHeart}><AiFillHeart /> </span>: <AiOutlineHeart />}</span>
                            </div>
                            <h5 className={styles.artcenterartworkssubdescribe}>{data.subdescribe}</h5>
                            <p className={styles.artcenterartworkssubtitle}>{data.subtitle}</p>
                            <span className={styles.artcenterartworksprice}>{`$ ${parseFloat(data.price).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`}</span>
                        </div>
                    </div>
                    </Link>
                   </div>
              
            ))
          }
        </div>
    </>
    
  )
}

export default ArtCenterArtWorks
