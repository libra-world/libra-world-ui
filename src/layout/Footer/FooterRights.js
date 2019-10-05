import React from 'react';
import { Flex, Box } from '@src/components/uikit';

function FooterRights(props) {
  return (
    <Flex
      height="80px"
      width={['600px', '600px', '1200px']}
      m="0 auto"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>© 2019 LibraExplorer. All rights reserved.</Box>
      <Flex as="ul">
        <Box as="li" ml="40px">
          Twitter
        </Box>
        <Box as="li" ml="40px">
          Facebook
        </Box>
        <Box as="li" ml="40px">
          Wechat
        </Box>
      </Flex>
    </Flex>
  );
}

export default React.memo(FooterRights);
