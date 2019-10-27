import axios from 'axios';
import qs from 'qs';
import Loading from '@src/components/Loading';

axios.defaults.baseURL = '';

// Add a request interceptor
axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    Loading.show();
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    Loading.hide();
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function(error) {
    Loading.hide();
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export async function getTransactionTXList(params = { currentPage: 1, sizePage: 10 }) {
  try {
    const resp = await axios.post(`/api/tx_api/txPage?${qs.stringify(params)}`, params);
    console.log('resp', resp);
    return resp;
  } catch (e) {
    // error
    console.error('e', e);
  }
}

export async function getAccountInfo(params = { address: '' }) {
  try {
    const resp = await axios.get(`/api/account_api/accountInfo?${qs.stringify(params)}`);
    if (resp.success) {
      return resp.data;
    }
  } catch (e) {
    // error
    console.error('e', e);
  }
}

export async function getAccountModules(params = { currentPage: 1, sizePage: 10 }) {
  try {
    const resp = await axios.post(
      `/api/account_api/account_modules?${qs.stringify(params)}`,
      params
    );
    return resp;
  } catch (e) {
    // error
    console.error('e', e);
  }
}

export async function getAccountTXS(params = { currentPage: 1, sizePage: 10 }) {
  try {
    const resp = await axios.post(`/api/account_api/account_txs?${qs.stringify(params)}`, params);
    return resp;
  } catch (e) {
    // error
    console.error('e', e);
  }
}

export async function getTXInfo(version) {
  try {
    const resp = await axios.get(`/api/tx_api/txInfo?${qs.stringify({ version })}`);
    return resp;
  } catch (e) {
    // error
    console.error('e', e);
  }
}
