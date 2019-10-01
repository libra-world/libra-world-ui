import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import { reset, virtuallisted, iconfont } from './cssfiles';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  ${reset}
  body {
    background-color: ${props => props.theme['colors'].background};
  }
  html, body, #__next {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  
  a {
    text-decoration: none;
  }

  ${iconfont}
  ${virtuallisted}
`;

export default GlobalStyle;
