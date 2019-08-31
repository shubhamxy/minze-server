import React from 'react'
import styles from './style.module.scss'

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.inner}>
      <div className="row">
        <div className="col-lg-9">{/* TODO: Add bottom    */}</div>
      </div>
      <div className={styles.bottom}>{/* Minze, All rights reserved */}</div>
    </div>
  </div>
)

export default Footer
