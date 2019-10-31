import React from 'react';
import styled from 'styled-components';
import { Box } from '@src/components/uikit';

const ModuleRowStyled = styled.div`
  font-size: 14px;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid #f7f8fa;
  .seq {
    flex: 0 0 110px;
    overflow: hidden;
  }
  .module {
    flex: 1;
    padding-left: 8px;
  }
  & > div {
    display: flex;
    align-items: center;
    overflow: hidden;
  }
`;

export default React.memo(function ModuleRow({ ticker = {} }) {
  return (
    <ModuleRowStyled>
      <Box className="seq" color="#215399">
        {ticker.module}
      </Box>
      <Box title={ticker.seq} className="module">
        {ticker.seq}
      </Box>
    </ModuleRowStyled>
  );
});
