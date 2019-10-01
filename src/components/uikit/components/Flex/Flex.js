import {
  alignItems,
  flex,
  flexDirection,
  flexWrap,
  justifyContent,
  space,
  gridArea,
  height,
  width,
  color,
  compose,
} from 'styled-system';
import styled from 'styled-components';
import Box from '@src/components/uikit/components/Box';

const composeFlexStyles = compose(
  space,
  flex,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  gridArea,
  height,
  width,
  color
);

const Flex = styled(Box)`
  display: flex;
  ${composeFlexStyles}
`;

Flex.defaultProps = {
  alignItems: 'center',
};

export default Flex;
