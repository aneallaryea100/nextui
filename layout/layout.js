import { useState, useEffect } from 'react';
import styles from '@styles/layout.module.css'


export default function Layout ({children}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        '/images/smoke.jpg',
        '/images/brave_heart.jpg',
        '/images/Ethiopian_Suri.jpg',
        '/images/black_gold.jpg',
        '/images/girl.jpg',
        '/images/youth_stick.jpg',
        '/images/gentle_face.jpg',
      ];

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);
    
        return () => clearInterval(interval);
      }, [images.length]);

      const backgroundImageStyle = {
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        // backgroundPosition: '100%',
        backgroundRepeat: 'no-repeat',
        transition: 'opacity 0.5s ease-in-out',
      };

    return (
        <div className={styles.layoutContainer}>
               <div className={styles.imageContainer} style={backgroundImageStyle}>
                   
                </div>
            <div className={styles.childrendiv}>{children}</div>
        </div>
    )
}