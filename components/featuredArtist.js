import styles from '@styles/featuredartist.module.css'
import Image from 'next/image'
import Kalei from '../public/images/Kalei.jpg'
import Ghosts from '../public/images/Ghosts.jpg'
import Yahima from '../public/images/cameroon.jpg'
import ndebele from '../public/images/gramwood.jpg'

function Featured() {
  return (
    <div className={styles.featuredContainer}>
      <h1 className={styles.featuredheadtitle}>Featured </h1>

      <div className={styles.artistContainer}>
            <div className={styles.artistContainerList}>
                <div className={styles.imageArtContainer}>
                    <Image src={Kalei} alt='thecollecters' className={styles.imgart} />
                </div>
                <div className={styles.itextFeatured}><p>Featured Fair</p></div>
                <div className={styles.iheadFeatured}><span>Tatenda Eclipse, Zimbabwe.</span></div>
            </div>

            {/* second */}
            
            <div className={styles.artistContainerList}>
                <div className={styles.imageArtContainer}>
                    <Image src={Ghosts} alt='thecollecters' className={styles.imgart} />
                </div>
                <div className={styles.itextFeatured}><p>Featured Fair</p></div>
                <div className={styles.iheadFeatured}><span>Afolabi-Isigba, Nigeria.</span></div>
            </div>

            {/* third */}

            <div className={styles.artistContainerList}>
                <div className={styles.imageArtContainer}>
                    <Image src={Yahima} alt='thecollecters' className={styles.imgart} />
                </div>
                <div className={styles.itextFeatured}><p>Featured Fair</p></div>
                <div className={styles.iheadFeatured}><span>Adjeley Anang, Ghana.</span></div>
            </div>

            {/* fourth */}

            <div className={styles.artistContainerList}>
                <div className={styles.imageArtContainer}>
                    <Image src={ndebele} alt='thecollecters' className={styles.imgart} />
                </div>
                <div className={styles.itextFeatured}><p>Featured Fair</p></div>
                <div className={styles.iheadFeatured}><span>Bruise at Night, Kenya.</span></div>
            </div>
            
            
      </div>
    </div>
  )
}

export default Featured
