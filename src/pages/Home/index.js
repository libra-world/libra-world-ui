import React, { useState } from 'react';
import styled from 'styled-components';
import BgCard from '@src/pages/Home/BgCard';
import { Box } from '@src/components/uikit';
import TickerSortRow from '@src/pages/Home/TickerSortRow';
import TickersList from '@src/pages/Home/TickersList';

const TickersListStyled = styled(Box)`
  overflow: hidden;
`;
const ROW_HEIGHT = 70;
function HomePage() {
  const [sortObj, setSortObj] = useState({
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
      <BgCard />
      <TickerSortRow
        onSortChange={setSortObj}
        sortBy={sortObj.sortBy}
        sortDirection={sortObj.sortDirection}
      />
      <TickersListStyled
        width={['600px', '600px', '1200px']}
        m="0 auto"
        height={tickers.length < 15 ? `${tickers.length * ROW_HEIGHT}px` : '1000px'}
      >
        <TickersList tickers={tickers} onRowClick={onRowClick} />
      </TickersListStyled>
    </>
  );
}

export default React.memo(HomePage);
