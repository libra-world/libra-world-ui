import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import get from 'lodash/get';
import BgCard from '@src/pages/Home/BgCard';
import { Box } from '@src/components/uikit';
import TickerSortRow from '@src/pages/Home/TickerSortRow';
import TickersList from '@src/pages/Home/TickersList';
// import Summary from '@src/pages/Home/Summary';
import store from '@src/store';

const MarketBox = styled(Box)`
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
`;
const TickersListStyled = styled(Box)`
  overflow: hidden;
`;
const ROW_HEIGHT = 70;

function HomePage() {
  const data = useSelector(state => state.home.data);
  const [sortObj, setSortObj] = useState({
    sortBy: 'qv',
    sortDirection: 'DESC',
  });
  const onRowClick = () => {};
  const onLoadMore = React.useCallback(async params => {
    await store.dispatch.home.requestTransactionTXList(params);
  }, []);
  console.log('data', data);

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
        <TickersListStyled height={data.total < 15 ? `${data.total * ROW_HEIGHT}px` : '700px'}>
          <TickersList {...data} onRowClick={onRowClick} onLoadMore={onLoadMore} />
        </TickersListStyled>
      </MarketBox>
    </>
  );
}

export default React.memo(HomePage);
