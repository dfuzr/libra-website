import React from 'react';
import PropTypes from 'prop-types';

import useBaseUrl from '@docusaurus/useBaseUrl';

import BaseContainer from '../BaseContainer';
import WithBackgroundImage from 'components/WithBackgroundImage';

import styles from './styles.module.css';

const SimpleCard = ({ icon, iconDark, title, to }) => (
  <BaseContainer className={styles.root} to={to}>
    <WithBackgroundImage 
      className={styles.image}
      imageLight={useBaseUrl(icon)}
      imageDark={useBaseUrl(iconDark)}
    />
    <span className={styles.title}>{title}</span>
  </BaseContainer>
);

SimpleCard.propTypes = {
  icon: PropTypes.string.isRequired,
  iconDark: PropTypes.string,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
};

export default SimpleCard;
