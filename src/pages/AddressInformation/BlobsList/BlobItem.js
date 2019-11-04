import React from 'react';
import { Box } from '@src/components/uikit';
import styled from 'styled-components';
import Icon from '@src/components/Icon';
import { useTranslation } from 'react-i18next';

const ActionBox = styled(Box)`
  cursor: pointer;
`;

const ShowMoreBox = styled(Box)`
  word-break: break-all;
`;

function BlobItem({ list = [] }) {
  const { t } = useTranslation();
  const [showMore, setShowMore] = React.useState(false);
  return (
    <Box position="relative" alignItems="flex-start">
      {showMore && Array.isArray(list) && (
        <ShowMoreBox mt="30px" mr="150px">
          [{list.join(',')}]
        </ShowMoreBox>
      )}
      {!showMore && Array.isArray(list) && (
        <Box mt="30px" className="ellipsis" mr="150px" width="600px">
          [{list.join(',')}]
        </Box>
      )}
      <ActionBox
        position="absolute"
        top="0"
        right="0"
        color="#215399"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? t('Show Less') : t('Show More')}
        &nbsp;
        <Icon fontSize="12px" type={showMore ? 'angle-up' : 'angle-down'} />
      </ActionBox>
    </Box>
  );
}

export default React.memo(BlobItem);
