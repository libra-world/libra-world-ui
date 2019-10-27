import React from 'react';
import { Box, Flex } from '@src/components/uikit';
import styled from 'styled-components';
import Icon from '@src/components/Icon';

const ActionBox = styled(Box)`
  cursor: pointer;
`;

function BlobItem({ list = [] }) {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <Flex alignItems="flex-start">
      <Box flex="1" mt="15px">
        {showMore &&
          Array.isArray(list) &&
          list.map(blob => (
            <Box mt="15px" className="ellipsis">
              {blob}
            </Box>
          ))}
        {!showMore && Array.isArray(list) && (
          <Box mt="15px" className="ellipsis">
            {list[0]}
          </Box>
        )}
      </Box>
      <ActionBox flex="0 0 100px" mt="30px" color="#215399" onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Show Less ' : 'Show More '}
        <Icon fontSize="12px" type={showMore ? 'angle-up' : 'angle-down'} />
      </ActionBox>
    </Flex>
  );
}

export default React.memo(BlobItem);
