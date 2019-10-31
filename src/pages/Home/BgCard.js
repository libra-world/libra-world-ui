import React from 'react';
import { withRouter } from 'react-router-dom';
import useSearch from '@src/hooks/useSearch';
import { Box, Button, Input } from '@src/components/uikit';
import libra from '@src/static/images/logo-white.png';

function BgCard(props) {
  const [val, setVal, onSearch] = useSearch(props.history);
  return (
    <Box bg="#000" width="100%">
      <Box width="150px" m="0 auto" pt="60px" textAlign="center">
        <Box as="img" width="100%" src={libra} alt="logo" />
      </Box>
      <Box width={['400px', '600px', '800px']} m="0 auto" pb="40px">
        <Input
          placeholder="Search Transactions, addresses"
          value={val}
          id="test"
          ariaLabel="string"
          vertical={false}
          isActive={true}
          rtl={false}
          suffixAddon={
            <Button width="160px" variant="primary" size="large" onClick={onSearch}>
              Search
            </Button>
          }
          onChange={e => {
            setVal(e.target.value);
          }}
          theme={{
            inputLabelTheme: {
              p: '16px',
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default withRouter(React.memo(BgCard));
