import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box, Flex } from '@src/components/uikit';
import { getTXInfo } from '@src/util/request';
import Loading from '@src/components/Loading';
import get from 'lodash/get';
import UnknowType from './UnknowType';
import KnownType from './KnownType';
import Breadcrumb from '@src/components/Breadcrumb';

function TXInfo(props) {
  const [data, setData] = React.useState({});
  const version = props.version || get(props, ['match', 'params', 'version']);
  React.useEffect(() => {
    getTXInfo(version).then(resp => {
      if (resp.success) {
        setData(resp.data);
      }
    });
  }, [version]);
  const type = data.type || props.txType || get(props, ['match', 'params', 'txType']);
  const isIndeterminate = type === 'indeterminate';
  const isKnown = /transfer|create|mint/.test(type);
  return (
    <Box bg="#f7f8fa">
      <Breadcrumb
        pt="20px"
        m="0 auto"
        width={['600px', '600px', '1200px']}
        list={[{ label: 'Address Information' }, { label: 'Transaction Details' }]}
      />
      <Flex width={['600px', '600px', '1200px']} m="56px auto" alignItems="flex-end">
        <Box as="h1" my="0" mr="10px">
          Transaction Details
        </Box>
        {!isKnown && (
          <Box color="#DA4931"> This is a Testnet transaction that has no actual value</Box>
        )}
      </Flex>
      <Box width={['600px', '600px', '800px']} m="0 auto" py="56px" minHeight="500px">
        {isIndeterminate ? (
          <Loading />
        ) : isKnown ? (
          <KnownType data={data} />
        ) : (
          <UnknowType data={data} />
        )}
      </Box>
    </Box>
  );
}

export default withRouter(React.memo(TXInfo));
