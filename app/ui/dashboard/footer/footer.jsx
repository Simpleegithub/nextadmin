import React from 'react';
import styles from './footer.module.css';

function footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Jawad Raza</div>
      <div className={styles.text}>All rigths reserved.</div>
    </div>
  )
}

export default footer
