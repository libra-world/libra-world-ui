import React from 'react';
import { Flex, Box } from '@src/components/uikit';
import BlobItem from './BlobItem';

function BlobsList({ list = [] }) {
  return list.map(item => (
    <Flex borderBottom="1px solid #f7f8fa" py="30px" alignItems="flex-start">
      <Box flex="0 0 200px">
        <Box>Key</Box>
        <Box mt="30px">Blob</Box>
      </Box>
      <Box flex="1">
        <Box>{item.key}</Box>
        <BlobItem list={item.data} />
      </Box>
    </Flex>
  ));
}

export default React.memo(BlobsList);
