import React from 'react';
import styled from 'styled-components';
import FormItem from '@src/components/FormItem';
import { Box, Flex } from '@src/components/uikit';
import Icon from '@src/components/Icon';

const ActionBox = styled(Box)`
  cursor: pointer;
`;

function ContactEvents({ events = [] }) {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <Box bg="#fff" pb="30px" mt="30px">
      <Flex justifyContent="space-between" px="40px" py="30px">
        <Box color="#C1C1C1">Contact events</Box>
        <ActionBox flex="0 0 100px" color="#215399" onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Show Less' : 'Show More'}
          <Icon fontSize="12px" type={showMore ? 'angle-up' : 'angle-down'} />
        </ActionBox>
      </Flex>
      {showMore ? (
        events.map(event => (
          <>
            <FormItem px="40px" mb="30px" labelWidth="200px" label="Key" help={null} status={null}>
              {event.key}
            </FormItem>
            <FormItem
              px="40px"
              mb="30px"
              labelWidth="200px"
              label="RawEvents"
              help={null}
              status={null}
            >
              {event.rawEvent}
            </FormItem>
            <FormItem
              px="40px"
              mb="30px"
              labelWidth="200px"
              label="Index"
              help={null}
              status={null}
            >
              {event.index}
            </FormItem>
            <Box height="1px" bg="#f7f8fa" mb="30px" />
          </>
        ))
      ) : (
        <>
          <FormItem px="40px" mb="30px" labelWidth="200px" label="Key" help={null} status={null}>
            {events[0]?.key}
          </FormItem>

          <FormItem px="40px" mb="30px" labelWidth="200px" label="Amount" help={null} status={null}>
            {events[0]?.rawEvent}
          </FormItem>
          <FormItem px="40px" mb="30px" labelWidth="200px" label="Index" help={null} status={null}>
            {events[0]?.index}
          </FormItem>
        </>
      )}
    </Box>
  );
}

export default React.memo(ContactEvents);
