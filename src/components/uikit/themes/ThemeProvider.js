import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeProvider = props => {
  const theme = {
    rtl: props.rtl,
    styles: props.theme,
    document: props.document,
    ...props.themes,
  };

  return <StyledThemeProvider theme={theme}>{props.children}</StyledThemeProvider>;
};

/*
ThemeProvider.propTypes = {
  children: PropTypes.node,
  rtl: PropTypes.bool,
  theme: PropTypes.object,
  document: PropTypes.object
};
*/

/** @component */
export default ThemeProvider;
