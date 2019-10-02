import {
  bottom,
  compose,
  gridArea,
  height,
  left,
  position,
  right,
  space,
  top,
  width,
  zIndex,
  color,
  layout,
  typography,
  border,
  shadow,
  borderRadius,
  order,
  flex,
  alignSelf,
  justifyContent,
} from 'styled-system';
import styled from 'styled-components';

const composeBoxStyles = compose(
  gridArea,
  height,
  space,
  width,
  position,
  top,
  left,
  right,
  bottom,
  zIndex,
  color,
  layout,
  typography,
  borderRadius,
  order,
  flex,
  alignSelf,
  justifyContent,
  border,
  shadow
);

const Box = styled('div')`
  box-sizing: border-box;
  ${composeBoxStyles}
`;

export default Box;
