import React, { useState } from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
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
  const [data, setData] = useState({ total: 0, list: [] });
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
  const onLoadMore = React.useCallback(
    async ({ page, pageSize }) => {
      const resp = await getTransactionTXList({ currentPage: page, sizePage: pageSize });
      if (get(resp, ['data', 'success'])) {
        setData(({ list }) => ({
          total: get(resp, ['data', 'data', 'totalCount']),
          list: list
            .slice(0, page * pageSize - 1)
            .concat(get(resp, ['data', 'data', 'data']))
            .concat(data.list.slice((page + 1) * pageSize - 1)),
        }));
      }
    },
    [setData]
  );
  console.log('data', data);
  React.useEffect(() => {
    getTransactionTXList().then(resp => {
      if (get(resp, ['data', 'success'])) {
        setData({
          total: get(resp, ['data', 'data', 'totalCount']),
          list: get(resp, ['data', 'data', 'data']),
        });
      }
    });
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
          <TickersList
            {...data}
            tickers={tickers}
            onRowClick={onRowClick}
            onLoadMore={onLoadMore}
          />
        </TickersListStyled>
      </MarketBox>
    </>
  );
}

export default React.memo(HomePage);
