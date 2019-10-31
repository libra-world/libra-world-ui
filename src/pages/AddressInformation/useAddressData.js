import React from 'react';
import { useSelector } from 'react-redux';
import store from '@src/store';

function useAddressData(tabName, address) {
  const [loading, setLoading] = React.useState('waiting');
  const txsData = useSelector(state => state.addressInfoModel.txsData);
  const modulesData = useSelector(state => state.addressInfoModel.modulesData);
  const blobs = useSelector(state => state.addressInfoModel.blobs);

  const blobsData = React.useMemo(() => {
    return {
      total: blobs.length,
      list: blobs,
    };
  }, blobs);

  const onLoadMore = async params => {
    console.log('tabName', tabName);
    setLoading('requesting');
    if (tabName === 'blobs') {
      // 初始时请求
      return;
    }
    const paramss = {
      ...params,
      address: address,
    };
    if (tabName === 'account_txs') {
      await store.dispatch.addressInfoModel.requestTxsData(paramss);
    }

    if (tabName === 'account_modules') {
      await store.dispatch.addressInfoModel.requestModulesData(paramss);
    }
    setLoading('finished');
  };

  React.useEffect(() => {
    async function forLoading() {
      // const params = {
      //   address,
      //   page: 1,
      //   pageSize: 10,
      // };
      store.dispatch.addressInfoModel.requestAccountInfo(address);
      // store.dispatch.addressInfoModel.requestModulesData(params);
      // setLoading('requesting');
      // await store.dispatch.addressInfoModel.requestTxsData(params);
      // setLoading('finished');
    }
    forLoading();
  }, [address]);

  let addressData;
  switch (tabName) {
    case 'account_txs': {
      addressData = txsData;
      break;
    }
    case 'blobs': {
      addressData = blobsData;
      break;
    }
    case 'account_modules': {
      addressData = modulesData;
      break;
    }
    default: {
      addressData = {
        total: 0,
        data: [],
      };
    }
  }

  return [addressData, onLoadMore, loading];
}

export default useAddressData;
