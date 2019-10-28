import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import get from 'lodash/get';
import { Box, Flex } from '@src/components/uikit';
import TickerSortRow from '@src/components/TickerSortRow';
import TickersList from '@src/components/TickersList';
import Summary from './Summary';
import Tabbar from '@src/components/Tabbar';
import store from '@src/store';
import useAddressData from './useAddressData';
import Loading from '@src/components/Loading';
import { useSelector } from 'react-redux';
import ModulesList from '@src/components/ModulessList';
import EmptyData from '@src/components/EmptyData';
import BlobsList from './BlobsList';

const tabsInit = [
  { title: 'Sent txs', name: 'account_txs' },
  { title: 'Blobs', name: 'blobs' },
  {
    title: 'Modules',
    name: 'account_modules',
  },
];

const MarketBox = styled(Box)`
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
`;
const TickersListStyled = styled(Box)`
  overflow: hidden;
  position: relative;
`;
const ROW_HEIGHT = 70;

function AddressInformation(props) {
  const amount = useSelector(state => state.addressInfoModel.amount);
  const [sortObj, setSortObj] = React.useState({
    sortBy: 'qv',
    sortDirection: 'DESC',
  });
  const tabName = useSelector(state => state.addressInfoModel.tabName);

  const onTabChange = React.useCallback(({ name }) => {
    store.dispatch.addressInfoModel.setTab(name);
  }, []);

  const onRowClick = () => {};

  const [data, onLoadMore, loadingStatus] = useAddressData(
    tabName,
    get(props, ['match', 'params', 'address'])
  );

  return (
    <>
      {/* <BreadCrumb /> */}
      <Box width={['600px', '600px', '1200px']} m="56px auto" pt="56px">
        <Box as="h1" my="14px">
          Address Information
        </Box>
        <Flex justifyContent="space-between" alignItems="flex-start">
          <Box>{get(props, ['match', 'params', 'address'])}</Box>
          <Box>Libra Balance: {amount} LIB</Box>
        </Flex>
      </Box>
      <Summary />

      <MarketBox width={['600px', '600px', '1200px']} m="0 auto 140px" p="26px 40px 20px">
        <Tabbar
          width="330px"
          initialPage={1}
          active={tabName}
          tabs={tabsInit}
          onChange={onTabChange}
          scaleX={0.8}
        />
        {tabName === 'account_txs' && (
          <TickerSortRow
            onSortChange={setSortObj}
            sortBy={sortObj.sortBy}
            sortDirection={sortObj.sortDirection}
          />
        )}
        {loadingStatus !== 'finished' ? (
          <Loading />
        ) : (
          <TickersListStyled
            height={
              tabName === 'blobs' ? 'auto' : data.total ? `${data.total * ROW_HEIGHT}px` : '100px'
            }
          >
            {tabName === 'account_txs' && (
              <TickersList {...data} onRowClick={onRowClick} onLoadMore={onLoadMore} />
            )}
            {tabName === 'account_modules' && (
              <ModulesList {...data} onRowClick={onRowClick} onLoadMore={onLoadMore} />
            )}
            {tabName === 'blobs' && <BlobsList {...data} />}
            {data.list?.length === 0 && <EmptyData position="absolute" />}}
          </TickersListStyled>
        )}
      </MarketBox>
    </>
  );
}

export default withRouter(React.memo(AddressInformation));
