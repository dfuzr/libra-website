import React from 'react';

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

  const backgroundImage = isDarkTheme && imageDark 
    ? imageDark 
    : imageLight;

  return (
    <Tag
      style={backgroundImage 
        ? { backgroundImage: `url('${useBaseUrl(backgroundImage)}')` } 
        : {}
      }
      {...props}
    >
      {children}
    </Tag>
  );
}

export default WithBackgroundImage;
