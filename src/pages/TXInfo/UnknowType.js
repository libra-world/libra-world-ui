import React from 'react';
import { Box } from '@src/components/uikit';
import FormItem from '@src/components/FormItem';
import moment from 'moment';
import ArgItem from '@src/pages/TXInfo/ArgItem';
import ContactEvents from '@src/pages/TXInfo/ContactEvents';

function UnknownType({ data }) {
  return (
    <Box width={['400px', '600px', '800px']} m="0 auto" pb="100px">
      <Box bg="#fff" py="30px">
        <FormItem
          px="40px"
          mb="30px"
          labelWidth="200px"
          label="Version ID"
          help={null}
          status={null}
        >
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
        <FormItem
          px="40px"
          mb="30px"
          labelWidth="200px"
          label="Transaction Fee"
          help={null}
          status={null}
        >
          {data.gasUsed}
        </FormItem>
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

        <ArgItem args={data.args} />

        <Box height="1px" bg="#f7f8fa" mb="30px" />

        <FormItem px="40px" mb="30px" labelWidth="200px" label="Gas Used" help={null} status={null}>
          {data.gasUsed}
        </FormItem>
        <FormItem
          px="40px"
          mb="30px"
          labelWidth="200px"
          label="Gas Price"
          help={null}
          status={null}
        >
          {data.gasPrice}
        </FormItem>
        <FormItem
          px="40px"
          mb="30px"
          labelWidth="200px"
          label="Max Gas Amount"
          help={null}
          status={null}
        >
          {data.maxGasAmount}
        </FormItem>
        <FormItem
          px="40px"
          mb="30px"
          labelWidth="200px"
          label="Signed Signature Hash"
          help={null}
          status={null}
        >
          {data.sigHash}
        </FormItem>
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
      <ContactEvents events={data.events} />
    </Box>
  );
}

export default React.memo(UnknownType);
