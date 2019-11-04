import React from 'react';
import { Flex, Box } from '@src/components/uikit';
import BlobItem from './BlobItem';
import { useTranslation } from 'react-i18next';

function BlobsList({ list = [] }) {
  const { t } = useTranslation();
  return list.map(item => (
    <Flex borderBottom="1px solid #f7f8fa" py="30px" alignItems="flex-start">
      <Box flex="0 0 200px">
        <Box>{t('Key')}</Box>
        <Box mt="30px">{t('Blob')}</Box>
      </Box>
      <Box flex="1">
        <Box>{item.key}</Box>
        <BlobItem list={item.data} />
      </Box>
    </Flex>
  ));
}

export default React.memo(BlobsList);
