import React from 'react';

import classnames from 'classnames';
import styles from './styles.module.css';

const DisableAdblock = ({ children, classNames, id }) => {
  return (
    <div id={id} className={classnames("modal", classNames)}>
      <div className={styles.outer}>
        <div className={styles.inner}>{children}</div>
      </div>
    </div>
  );
};

export default DisableAdblock;
