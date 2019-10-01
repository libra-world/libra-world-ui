import styled from 'styled-components';
import { borderRadius, buttonStyle, space, fontSize, variant } from 'styled-system';

const buttonSize = variant({
  prop: 'size',
  key: 'buttonSizes',
});

const Button = styled('button')`
  ${borderRadius}
  ${buttonStyle}
  ${space}
  ${fontSize}
  ${buttonSize}
 border: 1px solid ${props => {
   console.log('props', props);
   return props.bg;
 }};
  ${({ disabled }) => (disabled ? 'cursor: not-allowed;' : 'cursor: pointer;')}
  ${({ outline }) => (outline ? 'background: none' : '')};
  &:hover {
    ${({ glossy, disabled }) => (glossy && !disabled ? `opacity:0.5;` : '')}
  }
`;

export default Button;
