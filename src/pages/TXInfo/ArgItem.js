import React from 'react';
import styled from 'styled-components';
import FormItem from '@src/components/FormItem';
import { Box, Flex } from '@src/components/uikit';
import Icon from '@src/components/Icon';

const ActionBox = styled(Box)`
  cursor: pointer;
`;

function ArgItem({ args = [] }) {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <Box>
      <Flex justifyContent="space-between" px="30px">
        <Box color="#C1C1C1">Args List</Box>
        <ActionBox
          flex="0 0 100px"
          mt="30px"
          color="#215399"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show Less' : 'Show More'}
          <Icon fontSize="12px" type={showMore ? 'angle-up' : 'angle-down'} />
        </ActionBox>
      </Flex>
      {showMore ? (
        args.map((arg, index) => (
          <>
            <FormItem px="40px" mb="30px" labelWidth="200px" label="Type" help={null} status={null}>
              {arg.type}
            </FormItem>
            <FormItem
              px="40px"
              mb="30px"
              labelWidth="200px"
              label="Value"
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
          <FormItem px="40px" mb="30px" labelWidth="200px" label="Type" help={null} status={null}>
            {args[0]?.type}
          </FormItem>
          <FormItem px="40px" mb="30px" labelWidth="200px" label="Value" help={null} status={null}>
            {args[0]?.value}
          </FormItem>
        </>
      )}
    </Box>
  );
}

export default React.memo(ArgItem);
