import React from 'react';
import { Box, Button, Input } from '@src/components/uikit';
import libra from '@src/static/images/logo-white.png';
import { useSelector } from 'react-redux';
import store from '@src/store';
import { useDebounce } from 'react-use';

function BgCard(props) {
  const searchString = useSelector(state => state.home.searchString);
  const [val, setVal] = React.useState(searchString);
  useDebounce(
    () => {
      store.dispatch.home.setSearch(val);
    },
    300,
    [val]
  );

  return (
    <Box bg="#000" width="100%">
      <Box m="0 auto" pt="80px" textAlign="center">
        <img src={libra} alt="logo" />
      </Box>
      <Box width={['400px', '600px', '800px']} m="0 auto" pb="100px">
        <Input
          placeholder="Search Transactions, blocks, andresses, ENS…"
          value={val}
          id="test"
          ariaLabel="string"
          vertical={false}
          isActive={true}
          rtl={false}
          suffixAddon={
            <Button variant="primary" size="large">
              Search
            </Button>
          }
          onChange={e => {
            setVal(e.target.value);
          }}
          theme={{
            inputLabelTheme: {
              p: '20px',
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default React.memo(BgCard);
