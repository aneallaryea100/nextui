import React from 'react'
import styles from '@styles/galleryBillboard.module.css'

function GalleryBillBoard({ galleryboard }) {
  return (
    <div className={styles.GalleryBillBoardwrapper}>
        <div className={styles.GalleryBillBoardcontainer}>
            {
                galleryboard.map((data) => (
                     <div key={data.id} className={styles.GalleryBillBoardBox}>
                        <div className={styles.GalleryBillBoardImageBox}>
                            <img src={data.image} alt={data.title} className={styles.GalleryBillBoardImage}/>
                        </div>
                        <div className={styles.GalleryBillBoardTextBox}>
                            <h2>{data.title}</h2>
                            <h6>{data.show}</h6>
                            <h4>{data.subtitle}</h4>
                            <p>{data.location}</p>
                            <button type='button' className={styles.GalleryBillBoardbtn}>Follow</button>
                        </div>
            </div>
                ))
            }
           
        </div>
    </div>
  )
}

export default GalleryBillBoard
