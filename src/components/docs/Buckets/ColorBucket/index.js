import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import useBaseUrl from '@docusaurus/useBaseUrl';

import BaseContainer from '../BaseContainer';

import styles from './styles.module.css';

const ColorBucket = ({ color, icon, title, to }) => (
  <BaseContainer 
    className={classnames(styles.root, styles[color])} 
    hasShadow={false} 
    to={to}
  >
    <img className={s.image} src={useBaseUrl(icon)} />
    <span className={styles.title}>{title}</span>
  </BaseContainer>
);

ColorBucket.propTypes = {
  color: PropTypes.oneOf(['aqua', 'purpleDark', 'purpleLight']).isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
};

export default ColorBucket;
