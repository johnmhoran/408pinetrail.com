import React from 'react';
import styles from './styles.module.css';

export default function HomepageHeader() {
  return (
    <div className={styles.fullHero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroTitle}>
          Welcome to 408PineTrail.com.
        </h1>
        <p className={styles.heroSubtitle}>
          Duners rock!
        </p>
      </div>
    </div>
  );
}
