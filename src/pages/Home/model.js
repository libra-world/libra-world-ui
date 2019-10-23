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
    async requestTransactionTXList(payload = { currentPage: 1, sizePage: 10 }, rootState) {
      const resp = await getTransactionTXList({
        ...payload,
        search: rootState.home.searchString,
      });
      if (get(resp, ['data', 'success'])) {
        this.setData({
          total: get(resp, ['data', 'data', 'totalCount']),
          list: rootState.home.data.list
            .slice(0, payload.currentPage * payload.sizePage - 1)
            .concat(get(resp, ['data', 'data', 'data']))
            .concat(
              rootState.home.data.list.slice((payload.currentPage + 1) * payload.sizePage - 1)
            ),
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
            total: get(resp, ['data', 'data', 'totalCount']),
            list: get(resp, ['data', 'data', 'data']),
          },
        });
      }
    },
  },
};
