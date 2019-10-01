import * as React from 'react';
import PropTypes from 'prop-types';
import {
  ThemeProvider as StyledThemeProvider,
  lightTheme as componentTheme,
  GlobalStyle as ThemeGlobalStyle,
} from '@src/components/uikit';
import lightTheme from './theme';
// import GlobalStyle from './GlobalStyle'
const theme = {
  ...componentTheme,
  ...lightTheme,
};

export default function ThemeProvider(props) {
  return (
    <StyledThemeProvider theme={theme} {...props}>
      <>
        <ThemeGlobalStyle />
        {props.children}
      </>
    </StyledThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
ThemeProvider.defaultProps = {
  children: null,
};
