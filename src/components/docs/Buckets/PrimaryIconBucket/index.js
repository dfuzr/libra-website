import React from 'react';
import PropTypes from 'prop-types';
import useBaseUrl from '@docusaurus/useBaseUrl';

import BaseContainer from '../BaseContainer';

import styles from './styles.module.css';

const PrimaryIconBucket = ({ description, icon, title, to }) => (
  <BaseContainer className={styles.root} to={to}>
    <div className={styles.circleOverlay} />
    <div className={styles.contents}>
      <img className={s.image} src={useBaseUrl(icon)} />
      <div className={styles.textContainer}>
        <span className={styles.title}>{title}</span>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  </BaseContainer>
);

PrimaryIconBucket.propTypes = {
  description: PropTypes.string,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
};

export default PrimaryIconBucket;
