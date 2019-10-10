import React from 'react';
import { Box } from '@src/components/uikit';
import styled from 'styled-components';
import TickerSortRow from './TickerSortRow';
import TickersList from './TickersList';
import Summary from './Summary';

const MarketBox = styled(Box)`
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
`;
const TickersListStyled = styled(Box)`
  overflow: hidden;
`;
const ROW_HEIGHT = 70;
function AddressInformation() {
  const [sortObj, setSortObj] = React.useState({
    sortBy: 'qv',
    sortDirection: 'DESC',
  });
  const tickers = [
    {
      b: '1',
      q: '34',
    },
    {
      b: '1',
      q: '34',
    },
    {
      b: '1',
      q: '34',
    },
    {
      b: '1',
      q: '34',
    },
  ];
  const onRowClick = () => {};
  return (
    <>
      {/* <BreadCrumb /> */}
      <Box width={['600px', '600px', '1200px']} m="56px auto" pt="56px">
        <Box as="h1">Address Information</Box>
        <Box as="p">222387436b7db447f6e6168066f5eba645146bf16967198b3e2672bded6dbf30</Box>
      </Box>
      <Summary />

      <MarketBox width={['600px', '600px', '1200px']} m="0 auto 140px" p="26px 40px 20px">
        <TickerSortRow
          onSortChange={setSortObj}
          sortBy={sortObj.sortBy}
          sortDirection={sortObj.sortDirection}
        />
        <TickersListStyled
          height={tickers.length < 15 ? `${tickers.length * ROW_HEIGHT}px` : '1000px'}
        >
          <TickersList tickers={tickers} onRowClick={onRowClick} />
        </TickersListStyled>
      </MarketBox>
    </>
  );
}

export default React.memo(AddressInformation);
