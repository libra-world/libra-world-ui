import { getTransactionTXList } from '@src/util/request';
import get from 'lodash/get';

export default {
  state: {
    data: {
      total: 0,
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
      const resp = await getTransactionTXList({
        currentPage: payload.page,
        sizePage: payload.pageSize,
      });
      if (get(resp, ['success'])) {
        this.setData({
          total: get(resp, ['data', 'totalCount']),
          list: get(resp, ['data', 'data']),
        });
      }
    },
  },
};
