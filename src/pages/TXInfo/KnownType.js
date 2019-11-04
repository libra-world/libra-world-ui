import React from 'react';
import { Box } from '@src/components/uikit';
import moment from 'moment';
import { Link } from 'react-router-dom';
import FormItem from '@src/components/FormItem';
import { useTranslation } from 'react-i18next';

function KnownType({ data }) {
  const { t } = useTranslation();
  return (
    <Box width={['400px', '600px', '800px']} m="0 auto" pb="100px" bg="#fff" pt="50px">
      <Box textAlign="center" mb="80px">
        <Box fontSize="32px">{data.amount} LIB</Box>
        <Box color="#DA4931" mt="10px">
          {t('This is a Testnet transaction that has no actual value')}
        </Box>
      </Box>
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
      <FormItem px="40px" mb="30px" labelWidth="200px" label={t('From')} help={null} status={null}>
        <Link title={data.from} to={`/en/address-info/${data.from}`}>
          <Box color="#215399">{data.from}</Box>
        </Link>
      </FormItem>
      <FormItem px="40px" mb="30px" labelWidth="200px" label={t('To')} help={null} status={null}>
        <Link title={data.to} to={`/en/address-info/${data.to}`}>
          <Box color="#215399">{data.to}</Box>
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
        label={t('Max Gas Price')}
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
  );
}

export default React.memo(KnownType);
