import React from 'react';
import { Box } from '@src/components/uikit';
import FormItem from '@src/components/FormItem';
import moment from 'moment';

function KnownType({ data }) {
  return (
    <Box width={['400px', '600px', '800px']} m="0 auto" pb="100px" bg="#fff" pt="50px">
      <Box textAlign="center" mb="80px">
        <Box fontSize="32px">{data.amount} LIB</Box>
        <Box color="#DA4931" mt="10px">
          This is a Testnet transaction that has no actual value
        </Box>
      </Box>
      <FormItem px="40px" mb="30px" labelWidth="200px" label="Version ID" help={null} status={null}>
        {data.version}
      </FormItem>
      <FormItem
        px="40px"
        mb="30px"
        labelWidth="200px"
        label="Expiration Time"
        help={null}
        status={null}
      >
        {moment(new Date(data.expire)).fromNow()}
      </FormItem>
      <FormItem px="40px" mb="30px" labelWidth="200px" label="TX Type" help={null} status={null}>
        {data.type}
      </FormItem>
      <FormItem px="40px" mb="30px" labelWidth="200px" label="From" help={null} status={null}>
        {data.from}
      </FormItem>
      <FormItem px="40px" mb="30px" labelWidth="200px" label="To" help={null} status={null}>
        {data.to}
      </FormItem>
      <FormItem
        px="40px"
        mb="30px"
        labelWidth="200px"
        label="Transaction Fee"
        help={null}
        status={null}
      ></FormItem>
      <FormItem
        px="40px"
        mb="30px"
        labelWidth="200px"
        label="Sequence Number"
        help={null}
        status={null}
      >
        {data.accountSeq}
      </FormItem>

      <Box height="1px" bg="#f7f8fa" mb="30px" />

      <FormItem px="40px" mb="30px" labelWidth="200px" label="Gas Used" help={null} status={null}>
        {data.gasUsed}
      </FormItem>
      <FormItem px="40px" mb="30px" labelWidth="200px" label="Gas Price" help={null} status={null}>
        {data.gasPrice}
      </FormItem>
      <FormItem
        px="40px"
        mb="30px"
        labelWidth="200px"
        label="Max Gas Price"
        help={null}
        status={null}
      >
        {data.maxGasPrice}
      </FormItem>

      <Box height="1px" bg="#f7f8fa" mb="30px" />

      <FormItem
        px="40px"
        mb="30px"
        labelWidth="200px"
        label="Signed Signature Hash"
        help={null}
        status={null}
      ></FormItem>
      <FormItem
        px="40px"
        mb="30px"
        labelWidth="200px"
        label="State Root Hash"
        help={null}
        status={null}
      >
        {data.stateRootHash}
      </FormItem>
      <FormItem
        px="40px"
        mb="30px"
        labelWidth="200px"
        label="Event Root Hash"
        help={null}
        status={null}
      >
        {data.eventRootHash}
      </FormItem>
    </Box>
  );
}

export default React.memo(KnownType);
