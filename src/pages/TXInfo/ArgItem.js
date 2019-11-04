import React from 'react';
import styled from 'styled-components';
import FormItem from '@src/components/FormItem';
import { Box, Flex } from '@src/components/uikit';
import Icon from '@src/components/Icon';
import { useTranslation } from 'react-i18next';

const ActionBox = styled(Box)`
  cursor: pointer;
`;

function ArgItem({ args = [] }) {
  const { t } = useTranslation();
  const [showMore, setShowMore] = React.useState(false);
  return (
    <Box>
      <Flex justifyContent="space-between" px="30px" mb="10px">
        <Box ml="10px">{t('Args List')}</Box>
        <ActionBox flex="0 0 100px" color="#215399" onClick={() => setShowMore(!showMore)}>
          {showMore ? t('Show Less') : t('Show More')}&nbsp;
          <Icon fontSize="12px" type={showMore ? 'angle-up' : 'angle-down'} />
        </ActionBox>
      </Flex>
      {showMore ? (
        args.map((arg, index) => (
          <>
            <FormItem
              px="40px"
              mb="30px"
              labelWidth="200px"
              label={t('Type')}
              help={null}
              status={null}
            >
              {arg.type}
            </FormItem>
            <FormItem
              px="40px"
              mb="30px"
              labelWidth="200px"
              label={t('Value')}
              help={null}
              status={null}
            >
              {arg.value}
            </FormItem>
            {index !== args.length - 1 && <Box height="1px" bg="#f7f8fa" mb="30px" />}
          </>
        ))
      ) : (
        <>
          <FormItem
            px="40px"
            mb="30px"
            labelWidth="200px"
            label={t('Type')}
            help={null}
            status={null}
          >
            {args[0]?.type}
          </FormItem>
          <FormItem
            px="40px"
            mb="30px"
            labelWidth="200px"
            label={t('Value')}
            help={null}
            status={null}
          >
            {args[0]?.value}
          </FormItem>
        </>
      )}
    </Box>
  );
}

export default React.memo(ArgItem);
