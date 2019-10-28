import { getTransactionTXList } from '@src/util/request';
import get from 'lodash/get';

export default {
  state: {
    searchString: '',
  },
  reducers: {
    setFields(prevState, payload) {
      return {
        ...prevState,
        ...payload,
      };
    },
  },
  effects: {
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
