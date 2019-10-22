import React, { useState } from 'react';
import styled from 'styled-components';
import BgCard from '@src/pages/Home/BgCard';
import { Box } from '@src/components/uikit';
import TickerSortRow from '@src/pages/Home/TickerSortRow';
import TickersList from '@src/pages/Home/TickersList';
// import Summary from '@src/pages/Home/Summary';
import { getTransactionTXList } from '@src/util/request';

const MarketBox = styled(Box)`
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
`;
const TickersListStyled = styled(Box)`
  overflow: hidden;
`;
const ROW_HEIGHT = 70;
function HomePage() {
  const [sortObj, setSortObj] = useState({
    sortBy: 'qv',
    sortDirection: 'DESC',
  });
  const [data, setData] = useState({});
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
  React.useEffect(() => {
    getTransactionTXList().then(resp => resp && setData(resp));
  }, []);
  return (
    <>
      <BgCard />
      {/*<Summary />*/}
      <MarketBox width={['600px', '600px', '1200px']} m="40px auto 140px" p="26px 40px 20px">
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

export default React.memo(HomePage);
