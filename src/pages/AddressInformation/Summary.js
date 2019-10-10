import React from 'react';
import { Box, Flex } from '@src/components/uikit';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
// import API_PATH from '@src/config/api';

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
  const [advInfo, setInfo] = React.useState({});
  React.useEffect(() => {
    // request
  }, []);

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
        <Box color="lightGray">Received Transactions</Box>
        <ValBox>802</ValBox>
      </Box>
      <Box textAlign="center">
        <Box color="lightGray">Sent Transactions</Box>
        <ValBox>17,857,312</ValBox>
      </Box>
      <Box textAlign="center">
        <Box color="lightGray">Sequence Number</Box>
        <ValBox>17,857,312</ValBox>
      </Box>
      <Box textAlign="center">
        <Box color="lightGray">First Version Seen</Box>
        <ValBox>139012</ValBox>
      </Box>
    </SummaryBox>
  );
}

export default withRouter(Summary);
