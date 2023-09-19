import React from 'react'
import styles from '@styles/artcenterOne.module.css'

function ArtCenterOne( {artcenterone} ) {
  return (
    <div className={styles.artcenteronewrapper}>
      {
        artcenterone.map((data) => (
            <div className={styles.artcenteronecontainer} key={data.id}>
                <div className={styles.artcenteroneImageDiv}>
                    <img src={data.image} alt={data.name} className={styles.artcenteroneImage}/>
                </div>
                <div className={styles.artcenteroneTextBox}>
                    <h6>{data.name}</h6>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default ArtCenterOne
