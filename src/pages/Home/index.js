import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import BgCard from '@src/pages/Home/BgCard';
import { Box } from '@src/components/uikit';
import TickerSortRow from '@src/components/TickerSortRow';
import TickersList from '@src/components/TickersList';
// import Summary from '@src/pages/Home/Summary';
import store from '@src/store';

const MarketBox = styled(Box)`
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
`;

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
        <TickersList {...data} onRowClick={onRowClick} onLoadMore={onLoadMore} />
      </MarketBox>
    </>
  );
}

export default React.memo(HomePage);
