import React from 'react';
import { Box, Flex } from '@src/components/uikit';
import styled from 'styled-components';

const FormItemStyled = styled(Flex)`
  .bnc-input-wrapper,
  .bnc-input-wrapper.bnc-input-mode-outline {
    border-color: ${({ status }) => (status === 'error' ? '#f23051' : '')};
  }
`;

const HelpBox = styled(Box)`
  transform: translateY(100%);
`;

const helpColorMap = {
  error: 'red',
  default: 'tabFontColor',
};

export default function FormItem({
  label,
  labelWidth,
  labelProps,
  children,
  itemProps,
  status,
  help,
  ...props
}) {
  return (
    <FormItemStyled alignItems="center" status={status} {...props}>
      <Box width={labelWidth} mr="3" color="#C1C1C1" {...labelProps}>
        {label}
      </Box>
      <Flex flex="1" {...itemProps} position="relative">
        {children}
        {help && (
          <HelpBox
            fontSize="0"
            position="absolute"
            bottom="-8px"
            color={helpColorMap[status] || 'tabFontColor'}
          >
            {help}
          </HelpBox>
        )}
      </Flex>
    </FormItemStyled>
  );
}
