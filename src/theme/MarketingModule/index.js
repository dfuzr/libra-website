import React from 'react';
import styles from './styles.module.css';
import Arrow from 'img/marketing-arrow.svg';

const MarketingModule = () => (
  <div className={styles.root}>
    <div className={styles.content}>
      <p>Tell us your plan to build a product or service. We're excited to work with the community to evolve these features, and look forward to your participation!</p>
      <div className={styles.cta}>
        <span className={styles.join}>Join the discussion</span>
        <span className={styles.arrow}>
          <Arrow />
        </span>
      </div>
    </div>
    <img src="/img/marketing-module.jpg" />
  </div>
);

export default MarketingModule;
