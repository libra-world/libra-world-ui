import React from 'react';
import { Box } from '@src/components/uikit';
import FormItem from '@src/components/FormItem';
import moment from 'moment';
import ArgItem from '@src/pages/TXInfo/ArgItem';
import ContactEvents from '@src/pages/TXInfo/ContactEvents';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function UnknownType({ data }) {
  const { t } = useTranslation();
  return (
    <Box width={['400px', '600px', '800px']} m="0 auto" pb="100px">
      <Box bg="#fff" py="30px">
        <FormItem
          px="40px"
          mb="30px"
          labelWidth="200px"
          label={t('Version ID')}
          help={null}
          status={null}
        >
          {data.version}
        </FormItem>
        <FormItem
          px="40px"
          mb="30px"
          labelWidth="200px"
          label={t('Expiration Time')}
          help={null}
          status={null}
        >
          {data.expire ? `${moment(new Date(data.expire)).fromNow()}(${data.expire})` : ''}
        </FormItem>
        <FormItem
          px="40px"
          mb="30px"
          labelWidth="200px"
          label={t('TX Type')}
          help={null}
          status={null}
        >
          {data.type}
        </FormItem>
        <FormItem
          px="40px"
          mb="30px"
          labelWidth="200px"
          label={t('From')}
          help={null}
          status={null}
        >
          <Link title={data.from} to={`/en/address-info/${data.from}`}>
            <Box color="#215399">{data.from}</Box>
          </Link>
        </FormItem>
        <FormItem
          px="40px"
          mb="30px"
          labelWidth="200px"
          label={t('Transaction Fee')}
          help={null}
          status={null}
        >
          {data.gasUsed}
        </FormItem>
        <FormItem
          px="40px"
          mb="30px"
          labelWidth="200px"
          label={t('Sequence Number')}
          help={null}
          status={null}
        >
          {data.accountSeq}
        </FormItem>

        <Box height="1px" bg="#f7f8fa" mb="30px" />

        <ArgItem args={data.args} />

        <Box height="1px" bg="#f7f8fa" mb="30px" />

        <FormItem
          px="40px"
          mb="30px"
          labelWidth="200px"
          label={t('Gas Used')}
          help={null}
          status={null}
        >
          {data.gasUsed}
        </FormItem>
        <FormItem
          px="40px"
          mb="30px"
          labelWidth="200px"
          label={t('Gas Price')}
          help={null}
          status={null}
        >
          {data.gasPrice}
        </FormItem>
        <FormItem
          px="40px"
          mb="30px"
          labelWidth="200px"
          label={t('Max Gas Amount')}
          help={null}
          status={null}
        >
          {data.maxGasAmount}
        </FormItem>
        <FormItem
          px="40px"
          mb="30px"
          labelWidth="200px"
          label={t('Signed Signature Hash')}
          help={null}
          status={null}
        >
          {data.sigHash}
        </FormItem>
        <FormItem
          px="40px"
          mb="30px"
          labelWidth="200px"
          label={t('State Root Hash')}
          help={null}
          status={null}
        >
          {data.stateRootHash}
        </FormItem>
        <FormItem
          px="40px"
          mb="30px"
          labelWidth="200px"
          label={t('Event Root Hash')}
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
