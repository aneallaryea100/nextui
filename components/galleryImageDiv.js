import React, { useState, useEffect} from 'react'
import styles from '@styles/galleryImage.module.css'


function GalleryImageDiv({ galleryImage }) {
    const [realData, setRealData] = useState(galleryImage);

    const handleFollowClick = (id) => {
      setRealData((prevData) => 
        prevData.map((data) => 
          data.id === id ? { ...data, following: !data.following} : data
        )
      )
    }

  return (
    <div className={styles.galleryWrapper}>
    <h1 className={styles.headTitle}>Emerging Art</h1>
    <div className={styles.galleryContainer}>
      {
          realData.map((data) => {
              return (
                  <div className={styles.galleryBox} key={data.id}>
                      <div className={styles.boxImageGalerry}>
                          <img src={data.imageURL}  alt={data.title} className={styles.galleryboxImage}/>
                      </div>
                      <div className={styles.boxSub}>
                        <div className={styles.boxSubtitleContainer}>
                          <p className={styles.title}>{data.title}</p>
                          <p className={styles.subtitle}>{data.subtitle}</p>
                        </div>

                        <div onClick={()=> handleFollowClick(data.id)} className={styles.boxFollowGalerry}>
                          <span>{data.following ? 'Following' : 'Follow'}</span>
                        </div>
                      </div>
                  </div>
              )
          })
      }
    </div>
  </div>
  )
}

export default GalleryImageDiv
