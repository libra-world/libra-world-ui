import { getAccountInfo, getAccountModules, getAccountTXS } from '@src/util/request';
import get from 'lodash/get';

export default {
  state: {
    tabName: 'blobs',
    address: 'string', // 地址，对应页面的address
    amount: 0, // 该地址拥有的余额，对应libra balance
    authKey: 'string', //这个不需要展示
    blobs: [
      //用户的blob数据，页面下方的blobs的tab页上展示
      {
        data: [
          // 对应blobs的tab页面上的blob
          0,
        ],
        key: 'string', //对应tab页面上的key
      },
    ],
    receivedEventCount: 0, //表示该地址收到的event数量，对应页面的Received Events
    sentEventCount: 0, //表示该地址发送的event数量，对应页面的Sent Events
    seq: 0, //表示该地址发起的交易数量，对应页面上的Sent Txs和Sequence

    // txs
    txsData: {
      total: 0,
      list: [],
    },

    // modules
    modulesData: {
      total: 0,
      list: [],
    },
  },
  reducers: {
    setTxsData(prevState, payload) {
      return {
        ...prevState,
        txsData: payload,
      };
    },
    setModulesData(prevState, payload) {
      return {
        ...prevState,
        modulesData: payload,
      };
    },
    setFields(prevState, payload) {
      return {
        ...prevState,
        ...payload,
      };
    },
    setTab(prevState, payload) {
      return {
        ...prevState,
        tabName: payload,
      };
    },
  },
  effects: {
    async requestAccountInfo(payload) {
      const data = await getAccountInfo({ address: payload });
      this.setFields(data);
    },
    async requestTxsData(payload = { page: 1, pageSize: 10 }, rootState) {
      // 数据已经全部获取
      // if (rootState.addressInfoModel.txsData.list.length === rootState.addressInfoModel.txsData.total) return;
      const resp = await getAccountTXS({
        address: payload.address,
        currentPage: payload.page,
        sizePage: payload.pageSize,
      });
      console.log('ignoreStartIndex', payload.ignoreStartIndex);
      console.log('ignoreEndIndex', payload.ignoreEndIndex);

      const ignoreStartIndex = payload.ignoreStartIndex || 0;
      const ignoreEndIndex = payload.ignoreEndIndex || 10;

      console.log('resp', resp);
      // todo slice(0, payload.ignoreStartIndex) .length < ignoreStartIndex 时， 需要数据补全 or 迁至 imutable
      if (resp?.success) {
        this.setTxsData({
          total: get(resp, ['data', 'totalCount']),
          list: rootState.addressInfoModel.txsData.list
            .slice(0, ignoreStartIndex)
            .concat(get(resp, ['data', 'data']))
            .concat(rootState.addressInfoModel.txsData.list.slice(ignoreEndIndex - 1)),
        });
      }
    },
    async requestModulesData(payload = { page: 1, pageSize: 10 }, rootState) {
      // 数据已经全部获取
      // if (rootState.addressInfoModel.modulesData.list.length === rootState.addressInfoModel.modulesData.total) return;
      const resp = await getAccountModules({
        address: payload.address,
        currentPage: payload.page,
        sizePage: payload.pageSize,
      });
      console.log('ignoreStartIndex', payload.ignoreStartIndex);
      console.log('ignoreEndIndex', payload.ignoreEndIndex);
      // todo slice(0, payload.ignoreStartIndex) .length < ignoreStartIndex 时， 需要数据补全 or 迁至 imutable
      if (get(resp, ['data', 'success'])) {
        this.setModulesData({
          total: get(resp, ['data', 'data', 'totalCount']),
          list: rootState.addressInfoModel.modulesData.list
            .slice(0, payload.ignoreStartIndex)
            .concat(get(resp, ['data', 'data', 'data']))
            .concat(rootState.addressInfoModel.modulesData.list.slice(payload.ignoreEndIndex - 1)),
        });
      }
    },
  },
};
