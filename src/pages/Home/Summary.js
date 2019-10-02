import React from 'react';
import { Box, Flex } from '@src/components/uikit';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import css from '@styled-system/css';
// import API_PATH from '@src/config/api';

const SummaryBox = styled(Flex)`
  white-space: nowrap;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
`;
const ItemBox = styled.div`
  text-align: center;
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
        <Box color="lightGray">Transcations</Box>
        <ValBox>64.52 Eh/s</ValBox>
      </Box>
      <Box textAlign="center">
        <Box color="lightGray">Average TPS</Box>
        <ValBox>17,857,312</ValBox>
      </Box>
      <Box textAlign="center">
        <Box color="lightGray">Total Supply</Box>
        <ValBox>21,000,000</ValBox>
      </Box>
    </SummaryBox>
  );
}

export default withRouter(Summary);
