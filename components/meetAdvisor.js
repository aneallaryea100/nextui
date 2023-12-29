import styles from '@styles/meetAdvisor.module.css'

function MeetAdvisor() {
  return (
    <div className={styles.meetAdvisorWrapper}>
      <div className={styles.meetAdvisorContainer}>
        <div className={styles.advisorBox1}>
            <h4 className={styles.advisorBox1Text}>Meet your new art advisor.</h4>
            <button className={styles.advisorBtnDiscover}>Discover Tribals</button>
        </div>
        <div className={styles.advisorBox2}>
        </div>
      </div>

    </div>
  )
}

export default MeetAdvisor
