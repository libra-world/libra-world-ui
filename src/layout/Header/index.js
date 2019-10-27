import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Box, Flex, Input, Dropdown } from '@src/components/uikit';
import useHeader from './useHeader';
import Icon from '@src/components/Icon';

const HeaderBox = styled(Flex)`
  transition: all 0.5s;
`;

const NavBox = styled(Flex)`
  a {
    //color: #fff;
    margin: 0 20px;
  }
`;

function Header() {
  const { variant } = useHeader();
  const theme =
    variant === 'dark'
      ? {
          headerBg: 'black',
          headerColor: 'white',
          boxBg: '#222',
        }
      : {
          headerBg: 'white',
          headerColor: 'black',
          boxBg: 'rgba(247,248,250)',
        };
  return (
    <HeaderBox
      position="fixed"
      top="0"
      zIndex="10"
      bg={theme.headerBg}
      as="header"
      px="40px"
      height="100px"
      alignItems="center"
      width="100%"
      color={theme.headerColor}
    >
      <Box width="290px">logo</Box>
      <NavBox flex="1" justifyContent="center" alignItems="center">
        <Link to="/en">home</Link>
        <Link to="/en/address">address info</Link>
      </NavBox>
      <Flex width="350px" alignItems="center">
        <Dropdown
          trigger="click"
          overlay={
            <Box width="100px" bg={theme.boxBg}>
              <Box px="plus" py="xs">
                aaaa
              </Box>
              <Box px="plus" py="xs">
                aaaa
              </Box>
            </Box>
          }
        >
          <Box px="10px" lineHeight="40px" height="40px" width="100px" bg={theme.boxBg}>
            Mainnet <Icon type="down" />
          </Box>
        </Dropdown>
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
              background: theme.boxBg,
              border: 'none',
              bg: theme.boxBg,
              py: '12px',
              pl: '20px',
              mx: '10px',
              width: '240px',
            },
            inputTheme: {
              bg: theme.boxBg,
              color: '#fff',
            },
          }}
        />
      </Flex>
    </HeaderBox>
  );
}

export default React.memo(Header);
