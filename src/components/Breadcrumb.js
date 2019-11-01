import React from 'react';
import { Box, Flex } from '@src/components/uikit';
import { Link } from 'react-router-dom';

function Breadcrumb({ list, ...rest }) {
  return (
    <Flex {...rest}>
      <Link to={`/en`}>
        <Box color="#C1C1C1">Home</Box>
      </Link>
      {list.map((item, index) =>
        index !== list.length - 1 ? (
          <Link to={item.to}>
            <Box color="#C1C1C1">> {item.label}&nbsp;</Box>
          </Link>
        ) : (
          <Box color="#333333">> {item.label}</Box>
        )
      )}
    </Flex>
  );
}

export default React.memo(Breadcrumb);
