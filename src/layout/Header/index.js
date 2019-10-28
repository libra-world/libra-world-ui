import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Box, Flex, Input, Dropdown } from '@src/components/uikit';
import useHeader from './useHeader';
import Icon from '@src/components/Icon';
import libraLight from '@src/static/images/logo-white.png';
import libraDark from '@src/static/images/logo-dark.png';
import useSearch from '@src/hooks/useSearch';

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
  const [val, setVal, onSearch] = useSearch(props.history);
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
      <Box width="90px">
        <img width="100%" src={variant === 'dark' ? libraLight : libraDark} alt="logo" />
      </Box>
      <NavBox flex="1" justifyContent="center" alignItems="center">
        <Link to="/en">Explorer</Link>
        <a href="">Compiler</a>
      </NavBox>
      <Flex width="350px" alignItems="center">
        <Dropdown
          trigger="click"
          overlay={
            <Box width="100px" bg={theme.boxBg}>
              <Box px="plus" py="xs">
                Testnet
              </Box>
            </Box>
          }
        >
          <Box px="10px" lineHeight="40px" height="40px" width="100px" bg={theme.boxBg}>
            Testnet <Icon type="angle-down" />
          </Box>
        </Dropdown>
        <Input
          placeholder="Search tx/block/address"
          value={val}
          id="test"
          ariaLabel="string"
          vertical={false}
          isActive={true}
          rtl={false}
          suffixAddon={
            <Box mx="8px" onClick={onSearch}>
              <Icon type="search" />
            </Box>
          }
          onChange={val => {
            setVal(val);
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
