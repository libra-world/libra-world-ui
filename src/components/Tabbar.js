import * as React from 'react';
import styled from 'styled-components';
import { Box } from '@src/components/uikit';
import { Tabs } from 'rmc-tabs';
import 'rmc-tabs/assets/index.css';

const StyledTabs = styled(Box)`
  padding: 0;
  //border-bottom: 1px solid #000;
  .rmc-tabs-tab-bar-bottom {
    border-top: 0;
    background-color: transparent !important;

    .rmc-tabs-tab-bar-tab {
      padding-top: ${({ theme }) => theme.space[2]}px;
    }
  }
  .rmc-tabs-tab-bar-tab {
    color: ${({ theme }) => theme.colors.tabFontColor};
    line-height: 22px;
    //height: 32px;
    font-size: 18px;
    cursor: pointer;
    //padding-right: 32px !important;
    a {
      color: #212833;
    }
  }
  .rmc-tabs-tab-bar {
    z-index: 0;
  }

  .rmc-tabs-tab-bar-tab-active {
    color: #000;
    a {
      color: #000;
    }
  }
  .rmc-tabs-tab-bar-content {
    background-color: #fff;
  }
  .rmc-tabs-tab-bar-underline {
    border: 1px solid #000;
    //width: 56px !important;
    transform: scaleX(${({ scaleX }) => scaleX}px);
  }
`;

const Tabbar = ({ children, width, m, scaleX = 1, ...restProps }) => (
  <Box borderBottom="1px solid #F7F8FA" mx="-20px">
    <StyledTabs width={width} m={m} scaleX={scaleX}>
      <Tabs {...restProps} tabBarPosition="bottom">
        {children}
      </Tabs>
    </StyledTabs>
  </Box>
);

export default Tabbar;
