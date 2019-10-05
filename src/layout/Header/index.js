import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Box, Flex, Input } from '@src/components/uikit';

const NavBox = styled(Flex)`
  a {
    color: #fff;
    margin: 0 20px;
  }
`;

function Header() {
  return (
    <Flex
      bg="black"
      as="header"
      px="40px"
      height="100px"
      alignItems="center"
      width="100%"
      color="white"
    >
      <Box width="290px">logo</Box>
      <NavBox flex="1" justifyContent="center" alignItems="center">
        <Link to="/en">home</Link>
        <Link to="/en/address">address info</Link>
      </NavBox>
      <Flex width="290px" alignItems="center">
        mainnet
        <Input
          placeholder="Search tx/block/address"
          value=""
          id="test"
          ariaLabel="string"
          vertical={false}
          isActive={true}
          rtl={false}
          suffixAddon={<Box mx="8px">.com</Box>}
          onChange={val => {
            console.log(val);
          }}
          theme={{
            inputLabelTheme: {
              border: '1px solid #222',
              bg: '#222',
              py: '12px',
              pl: '20px',
              mx: '10px',
            },
          }}
        />
      </Flex>
    </Flex>
  );
}

export default React.memo(Header);
