import styles from '@styles/footer.module.css'
import { BsSpotify, BsPinterest, BsMeta, BsInstagram } from "react-icons/bs";


function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSubContainer}>
          <span className={styles.footerTextHead}>About Us</span>
          <span className={styles.footerTextlist}>About</span>
          <span className={styles.footerTextlist}>Jobs</span>
          <span className={styles.footerTextlist}>Press</span>
          <span className={styles.footerTextlist}>Contact</span>
        </div>

        <div className={styles.footerSubContainer}>
          <span className={styles.footerTextHead}>Resources</span>
          <span className={styles.footerTextlist}>Open Source</span>
          <span className={styles.footerTextlist}>Blog</span>
          <span className={styles.footerTextlist}>The Tribals Art Project</span>
        </div>

        <div className={styles.footerSubContainer}>
          <span className={styles.footerTextHead}>Partnership</span>
          <span className={styles.footerTextlist}>Tribals for Galleries</span>
          <span className={styles.footerTextlist}>Tribals for Museums</span>
          <span className={styles.footerTextlist}>Tribals for Auctions</span>
          <span className={styles.footerTextlist}>Tribals for Fairs</span>
        </div>

        <div className={styles.footerSubContainer}>
          <span className={styles.footerTextHead}>Support</span>
          <span className={styles.footerTextlist}>Talk to a Specialist</span>
          <span className={styles.footerTextlist}>Visit our Help Center</span>
          <span className={styles.footerTextlist}>Buying on Tribals</span>
        </div>
      </div>
      <div className={styles.subFooterContainer}>
        <div className={styles.subFooterDiv1}>
          <span className={styles.subFooterContainerLogo1}>Tribals</span>
          <span className={styles.subFooterContainerList}>@2023 Tribals</span>
          <span className={styles.subFooterContainerList}>Terms of Use</span>
          <span className={styles.subFooterContainerList}>Privacy Policy</span>
          <span className={styles.subFooterContainerList}>Security</span>
          <span className={styles.subFooterContainerList}>Conditions of Sale</span>
          <span className={styles.subFooterContainerList}>Buyer Guarantee</span>
          <span className={styles.subFooterContainerList}>Do not sell my personal Information</span>
        </div>
        <div className={styles.subFooterSocial}>
          <div className={styles.subFooterContainerLogo22}><span className={styles.subFooterContainerLogo2}>Tribals</span></div>
          <div className={styles.subFooterSocialsocial}>
            <BsSpotify />
            <BsPinterest />
            <BsMeta />
            <BsInstagram />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Footer
