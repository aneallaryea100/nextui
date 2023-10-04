import { useState, useEffect } from 'react';
import styles from '@styles/layout.module.css'


export default function SignPageLayout ({children}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [visible, setVisible] = useState(true);

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
          setVisible(false);
          setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            setVisible(true);
          }, 500);
        }, 10000);
    
        return () => clearInterval(interval);
      }, [images.length]);

      const backgroundImageStyle = {
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        // backgroundPosition: '100%',
        backgroundRepeat: 'no-repeat',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
      };

    return (
        <div className={styles.layoutContainer}>
            <div className={styles.imageContainer} style={backgroundImageStyle}></div>
            <div className={styles.childrendiv}>{children}</div>
        </div>
    )
}