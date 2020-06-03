import React from 'react';
import PropTypes from 'prop-types';

import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useThemeContext from '@theme/hooks/useThemeContext';

const WithBackgroundImage = ({
  children,
  imageDark,
  imageLight, 
  tag: Tag, 
  ...props
}) => {
  const {isDarkTheme} = useThemeContext();

  const backgroundImage = isDarkTheme && imageDark ? imageDark : imageLight;
  const backgroundImageStyle = backgroundImage 
    ? { backgroundImage: `url('${useBaseUrl(backgroundImage)}')` } 
    : {};

  return (
    <Tag style={backgroundImageStyle} {...props}>
      {children}
    </Tag>
  );
};

WithBackgroundImage.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  imageDark: PropTypes.string,
  imageLight: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

WithBackgroundImage.defaultProps = {
  tag: 'div',
};

export default WithBackgroundImage;
