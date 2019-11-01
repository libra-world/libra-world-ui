import React from 'react';
import get from 'lodash/get';
import TXInfo from '../TXInfo';
import AddressInformation from '../AddressInformation';

function Index(props) {
  const searchString = get(props, ['match', 'params', 'searchString']);
  const isInterger = /^[\d]+$/.test(searchString);

  return isInterger ? (
    <TXInfo txType="indeterminate" version={searchString} />
  ) : (
    <AddressInformation address={searchString} />
  );
}

export default React.memo(Index);
