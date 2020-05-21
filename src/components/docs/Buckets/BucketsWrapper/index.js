import React from 'react';

import styles from './styles.module.css';

const BucketsWrapper = ({children}) => (
  <div className={styles.root}>
    {children}
  </div>
);

export default BucketsWrapper;
