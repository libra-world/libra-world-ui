import React from 'react';
import { withRouter } from 'react-router-dom';
import useSearch from '@src/hooks/useSearch';
import { Box, Button, Input } from '@src/components/uikit';
import libra from '@src/static/images/logo-white.png';

function BgCard(props) {
  const [val, setVal, onSearch] = useSearch(props.history);
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
            <Button variant="primary" size="large" onClick={onSearch}>
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

export default withRouter(React.memo(BgCard));
