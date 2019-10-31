import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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

const DisableFlex = styled(Flex)`
  cursor: not-allowed;
`;

function Header(props) {
  const [val, setVal, onSearch] = useSearch(props.history);
  const { variant } = useHeader();
  const theme =
    variant === 'dark'
      ? {
          headerBg: 'black',
          headerColor: 'white',
          boxBg: '#222',
          boxShadow: 'none',
        }
      : {
          headerBg: 'white',
          headerColor: 'black',
          boxBg: 'rgba(247,248,250)',
          boxShadow: '0px 2px 20px 0px rgba(66,49,140,0.1)',
        };
  return (
    <HeaderBox
      position="fixed"
      top="0"
      zIndex="10"
      bg={theme.headerBg}
      as="header"
      px="18px"
      height="50px"
      alignItems="center"
      width="100%"
      color={theme.headerColor}
      boxShadow={theme.boxShadow}
    >
      <Box width="70px" position="relative">
        <Link to="/en">
          <Box
            as="img"
            position="relative"
            top="10px"
            width="100%"
            src={variant === 'dark' ? libraLight : libraDark}
            alt="logo"
          />
        </Link>
      </Box>
      <NavBox flex="1" alignItems="center">
        <Link to="/en">Explorer</Link>
        <a href="https://libra-x.io/ide">Compiler</a>
      </NavBox>
      <Flex width="350px" alignItems="center">
        {/* <Dropdown
          trigger="click"
          overlay={
            <Box width="100px" bg={theme.boxBg}>
              <Box px="plus" py="xs">
                Testnet
              </Box>
            </Box>
          }
        >
          <Flex justifyContent="space-between" px="10px" lineHeight="32px" height="32px" width="100px" bg={theme.boxBg}>
            Testnet <Icon fontSize="12px" type="angle-down" />
          </Flex>
        </Dropdown>*/}
        <DisableFlex
          justifyContent="space-between"
          px="10px"
          lineHeight="32px"
          height="32px"
          width="100px"
          bg={theme.boxBg}
        >
          Testnet <Icon fontSize="12px" type="angle-down" />
        </DisableFlex>
        <Input
          placeholder="Search tx/address"
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
          onChange={e => {
            setVal(e.target.value);
          }}
          theme={{
            inputLabelTheme: {
              background: theme.boxBg,
              border: 'none',
              bg: theme.boxBg,
              py: '8px',
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

export default withRouter(React.memo(Header));
