import React from 'react';
import styled from 'styled-components';
import { Box } from '@src/components/uikit';

const ModuleRowStyled = styled.div`
  font-size: 18px;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
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

export default React.memo(function ModuleRow({ ticker }) {
  return (
    <ModuleRowStyled>
      <Box className="seq" color="#215399">
        Module
      </Box>
      <Box title={'ssss'} className="module">
        97380cd7ebf9a173a3
      </Box>
    </ModuleRowStyled>
  );
});
