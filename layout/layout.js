import styles from '@styles/layout.module.css'
export default function Layout ({children}) {
    return (
        <div className={styles.layoutContainer}>
               <div className={styles.imageContainer}>
                   
                </div>
            <div className={styles.childrendiv}>{children}</div>
        </div>
    )
}