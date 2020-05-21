import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types'

import s from './styles.module.css';

const BaseContainer = ({children, className, hasShadow, hasRoundedCorners, to}) => (
  <a 
    className={classnames(s.root, className, {
      [s.hasShadow]: hasShadow,
      [s.hasRoundedCorners]: hasRoundedCorners,
    })} 
    href={to}
    target="_blank"
  >
    {children}
  </a>
);

BaseContainer.propTypes = {
  className: PropTypes.string,
  hasShadow: PropTypes.bool,
  hasRoundedCorners: PropTypes.bool,
  to: PropTypes.string,
};

BaseContainer.defaultProps = {
  hasRoundedCorners: true,
  hasShadow: true,
};

export default BaseContainer;
