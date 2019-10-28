import React from 'react';
import { useDebounce } from 'react-use';
import isNumber from 'lodash/isNumber';

export default function useSearch(history) {
  const [val, setVal] = React.useState('');
  const valRef = React.useRef();
  useDebounce(
    () => {
      valRef.current = val;
    },
    300,
    [val]
  );

  const onSearch = React.useCallback(() => {
    const searchString = valRef.current;
    if (!searchString) return;
    console.log('searchString', searchString);
    console.log('isNumber', /^[\d]+$/.test(searchString));
    const isInterger = /^[\d]+$/.test(searchString);
    if (isInterger) {
      history.push(`/en/tx-info/indeterminate/${searchString}`);
    } else {
      history.push(`/en/address-info/${searchString}`);
    }
  }, [history, valRef]);

  return [val, setVal, onSearch];
}
