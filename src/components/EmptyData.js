import React from 'react';
import { Box } from '@src/components/uikit';
import norecord from '@src/static/images/norecord.svg';

function EmptyData({ message = 'No Data', ...rest }) {
  return (
    <Box color="lightBlack" textAlign="center" {...rest}>
      <Box display="inline-block" width="100px">
        <img src={norecord} alt="icon" />
      </Box>
      <Box fontSize="12px">{message}</Box>
    </Box>
  );
}

export default React.memo(EmptyData);
