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
import Breadcrumb from '@src/components/Breadcrumb';
import { useTranslation } from 'react-i18next';

const MarketBox = styled(Box)`
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
`;

function AddressInformation(props) {
  const { t } = useTranslation();
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
  const address = props.address || get(props, ['match', 'params', 'address']);
  const [data, onLoadMore, loadingStatus] = useAddressData(tabName, address);

  const tabsInit = React.useMemo(
    () => [
      { title: t('Sent txs'), name: 'account_txs' },
      { title: t('Blobs'), name: 'blobs' },
      {
        title: t('Modules'),
        name: 'account_modules',
      },
    ],
    [t]
  );

  return (
    <>
      <Breadcrumb
        pt="20px"
        m="0 auto"
        width={['600px', '600px', '1200px']}
        list={[{ label: t('Address Information') }]}
      />
      <Box width={['600px', '600px', '1200px']} m="56px auto">
        <Box as="h1" my="14px">
          {t('Address Information')}
        </Box>
        <Flex justifyContent="space-between" alignItems="flex-start">
          <Box>{address}</Box>
          <Box>{t('Libra Balance: #amount# LIB')?.replace('#amount#', amount)}</Box>
        </Flex>
      </Box>
      <Summary />

      <MarketBox width={['600px', '600px', '1200px']} m="0 auto 140px" p="26px 40px 20px">
        <Tabbar
          width="330px"
          initialPage={0}
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
        {loadingStatus !== 'finished' && <Loading />}
        <Box minHeight="200px" position="relative">
          {tabName === 'account_txs' && (
            <TickersList {...data} onRowClick={onRowClick} onLoadMore={onLoadMore} />
          )}
          {tabName === 'account_modules' && (
            <ModulesList {...data} onRowClick={onRowClick} onLoadMore={onLoadMore} />
          )}
          {tabName === 'blobs' && <BlobsList {...data} />}
          {data.list?.length === 0 && (
            <EmptyData
              message={t('No Data')}
              position="absolute"
              left="calc(50% - 50px)"
              top="50px"
            />
          )}
        </Box>
      </MarketBox>
    </>
  );
}

export default withRouter(React.memo(AddressInformation));
