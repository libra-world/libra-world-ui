import React from 'react';
import { Box, Button, Input } from '@src/components/uikit';
import libra from '@src/static/images/libra.jpeg';

function BgCard(props) {
  return (
    <Box bg="#000" width="100%">
      <Box m="0 auto" pt="80px" textAlign="center">
        <img src={libra} alt="logo" />
      </Box>
      <Box width={['400px', '600px', '800px']} m="0 auto" pb="100px">
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
