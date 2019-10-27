import { getTransactionTXList } from '@src/util/request';
import get from 'lodash/get';

export default {
  state: {
    test: "it's a test value",
    searchString: '',
    data: {
      total: 10,
      list: [],
    },
  },
  reducers: {
    setData(prevState, payload) {
      console.log('prevState', prevState);
      console.log('payload', payload);
      return {
        ...prevState,
        data: payload,
      };
    },
    setFields(prevState, payload) {
      return {
        ...prevState,
        ...payload,
      };
    },
  },
  effects: {
    async requestTransactionTXList(payload = { page: 1, pageSize: 10 }, rootState) {
      // 数据已经全部获取
      if (rootState.home.data.list.length === rootState.home.data.total) return;
      const resp = await getTransactionTXList({
        currentPage: payload.page,
        sizePage: payload.pageSize,
        search: rootState.home.searchString,
      });
      console.log('ignoreStartIndex', payload.ignoreStartIndex);
      console.log('ignoreEndIndex', payload.ignoreEndIndex);
      // todo slice(0, payload.ignoreStartIndex) .length < ignoreStartIndex 时， 需要数据补全 or 迁至 imutable
      if (get(resp, ['success'])) {
        this.setData({
          total: get(resp, ['data', 'totalCount']),
          list: rootState.home.data.list
            .slice(0, payload.ignoreStartIndex)
            .concat(get(resp, ['data', 'data']))
            .concat(rootState.home.data.list.slice(payload.ignoreEndIndex - 1)),
        });
      }
    },
    async setSearch(payload, rootState) {
      this.setFields({ searchString: payload });
      const resp = await getTransactionTXList({
        currentPage: 1,
        sizePage: 10,
        search: payload,
      });
      if (get(resp, ['data', 'success'])) {
        this.setFields({
          data: {
            total: get(resp, ['data', 'totalCount']),
            list: get(resp, ['data', 'data']),
          },
        });
      }
    },
  },
};
