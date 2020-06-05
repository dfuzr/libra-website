import React from 'react';
import PropTypes from 'prop-types';

import BaseContainer from '../BaseContainer';
import WithBackgroundImage from 'components/WithBackgroundImage';

import styles from './styles.module.css';

const OverlayCard = ({ description, icon, iconDark, title, to }) => (
  <BaseContainer className={styles.root} to={to}>
    {console.log('the dark', iconDark)}
    <div className={styles.circleOverlay} />
    <div className={styles.contents}>
      <WithBackgroundImage
        className={styles.image}
        imageLight={icon}
        imageDark={iconDark}
      />
      <div className={styles.textContainer}>
        <span className={styles.title}>{title}</span>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  </BaseContainer>
);

OverlayCard.propTypes = {
  description: PropTypes.string,
  icon: PropTypes.string.isRequired,
  iconDark: PropTypes.string,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
};

export default OverlayCard;
