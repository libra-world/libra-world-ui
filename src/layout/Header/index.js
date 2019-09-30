import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex } from '@libra-world-uikit/uikit';

function Header() {
  return (
    <Flex display="flex" as="header" px="40px" height="100px" alignItems="center" width="100%">
      <Box>logo</Box>
      <Flex display="flex" flex="1" justifyContent="center">
        <ul>
          <Link to="/en">home</Link>
          <Link to="/en/address">address info</Link>
        </ul>
      </Flex>
      <Flex>mainnet textfield</Flex>
    </Flex>
  );
}

export default React.memo(Header);
