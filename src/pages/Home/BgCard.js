import React from 'react';
import { Box, Button, Input } from '@src/components/uikit';

function BgCard(props) {
  return (
    <Box bg="#000" height="400px" width="100%">
      <Box m="80px auto 0">
        <img src="" alt="logo" />
      </Box>
      <Box width={['400px', '600px', '800px']} m="0 auto">
        <Input
          placeholder="Search Transactions, blocks, andresses, ENS…"
          value=""
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
          onChange={val => {
            console.log(val);
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
