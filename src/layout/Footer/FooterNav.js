import React from 'react';
import { Flex, Box } from '@src/components/uikit';

function FooterNav(props) {
  return (
    <Box bg="#f7f8fa">
      <Flex
        width={['600px', '600px', '1200px']}
        m="0 auto"
        justifyContent="space-between"
        pt="54px"
        pb="80px"
        alignItems="flex-start"
      >
        <Box>
          <Box mb="32px" color="#232D3D">
            About Libra
          </Box>
          <ul>
            <Box as="li" color="#9ca6b4" mb="lg">
              What is Libra?
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              Official White Paper
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              Understanding The Libra Reserve
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              {' '}
              The Role Of Libra Association
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              {' '}
              Official White Paper
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              Understanding The Libra Reserve
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              The Role Of Libra Association
            </Box>
          </ul>
        </Box>
        <Box>
          <Box mb="32px" color="#232D3D">
            About Libra
          </Box>
          <ul>
            <Box as="li" color="#9ca6b4" mb="lg">
              what is libra
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              what is libra
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              what is libra
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              what is libra
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              what is libra
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              what is libra
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              what is libra
            </Box>
          </ul>
        </Box>
        <Box>
          <Box mb="32px" color="#232D3D">
            Getting Started
          </Box>
          <ul>
            <Box as="li" color="#9ca6b4" mb="lg">
              Develop with Libra
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              Learning The Move Language
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              Contribute to Open Source
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              Join The Discussion
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              Contribute to Open Source
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              Join The Discussion
            </Box>
          </ul>
        </Box>
        <Box>
          <Box mb="32px" color="#232D3D">
            In The News
          </Box>
          <ul>
            <Box as="li" color="#9ca6b4" mb="lg">
              All You Need To Know About Libra{' '}
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              Libra Explained & Demystified
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              What Is Libra Token?
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              10 Questions About Libra
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              All You Need To Know About Libra
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              Libra Explained & Demystified
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              What Is Libra Token?
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              10 Questions About Libra
            </Box>
          </ul>
        </Box>
      </Flex>
    </Box>
  );
}

export default React.memo(FooterNav);
