import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box, Flex } from '@src/components/uikit';
import { getTXInfo } from '@src/util/request';
import get from 'lodash/get';
import UnknowType from './UnknowType';
import KnownType from './KnownType';

function TXInfo(props) {
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    getTXInfo(get(props, ['match', 'params', 'version'])).then(resp => {
      if (resp.success) {
        setData(resp.data);
      }
    });
  }, []);
  const isKnown = /transfer|create|mint/.test(get(props, ['match', 'params', 'txType']));
  return (
    <Box bg="#f7f8fa">
      {/* <BreadCrumb /> */}
      <Flex width={['600px', '600px', '1200px']} m="56px auto" pt="56px" alignItems="flex-end">
        <Box as="h1" my="0" mr="10px">
          Transaction Details
        </Box>
        {!isKnown && (
          <Box color="#DA4931"> This is a Testnet transaction that has no actual value</Box>
        )}
      </Flex>
      <Box width={['600px', '600px', '800px']} m="0 auto" py="56px">
        {isKnown ? <KnownType data={data} /> : <UnknowType data={data} />}
      </Box>
    </Box>
  );
}

export default withRouter(React.memo(TXInfo));
