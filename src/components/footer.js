import React from 'react'
import styles from './footer.module.scss'


const Footer = () => (
  <footer>
    <div className={styles.container}>
      <div>
        <a
          href={`https://moonsitesolutions.tech/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Moonsite Solutions
        </a>
        
      </div>
      <div className={styles.copyright}>Copyright © 2020. All rights reserved.</div>
    </div>
  </footer>
)

export default Footer