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
  color
);

const Box = styled('div')`
  box-sizing: border-box;
  ${composeBoxStyles}
`;

export default Box;
