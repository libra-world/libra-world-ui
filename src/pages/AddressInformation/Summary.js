import React from 'react';
import { Box, Flex } from '@src/components/uikit';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import BigNumber from 'bignumber.js';

const SummaryBox = styled(Flex)`
  white-space: nowrap;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
`;

const ValBox = styled(Box)`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.black};
  margin-top: ${({ theme }) => theme.space.lg}px;
`;

function Summary() {
  const receivedEventCount = useSelector(state => state.addressInfoModel.receivedEventCount);
  const sentEventCount = useSelector(state => state.addressInfoModel.sentEventCount);
  const seq = useSelector(state => state.addressInfoModel.seq);

  return (
    <SummaryBox
      width={['600px', '600px', '1200px']}
      m="40px auto"
      bg="white"
      px="78px"
      py="xxxl"
      justifyContent="space-between"
    >
      <Box textAlign="center">
        <Box color="lightGray">Sent Txs</Box>
        <ValBox>{new BigNumber(seq).toFormat()}</ValBox>
      </Box>
      <Box textAlign="center">
        <Box color="lightGray">Sequence</Box>
        <ValBox>{new BigNumber(seq).toFormat()}</ValBox>
      </Box>
      <Box textAlign="center">
        <Box color="lightGray">Sent Events</Box>
        <ValBox>{new BigNumber(sentEventCount).toFormat()}</ValBox>
      </Box>
      <Box textAlign="center">
        <Box color="lightGray">Received Events</Box>
        <ValBox>{new BigNumber(receivedEventCount).toFormat()}</ValBox>
      </Box>
    </SummaryBox>
  );
}

export default withRouter(Summary);
