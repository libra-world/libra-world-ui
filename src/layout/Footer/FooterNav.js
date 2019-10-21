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
              <a href="https://libra.org/en-US/learn-faqs/" target="_blank">
                What is Libra?
              </a>
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              <a href="https://libra.org/en-US/white-paper/" target="_blank">
                Official White Paper
              </a>
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              <a href="https://libra.org/en-US/about-currency-reserve/#the_reserve" target="_blank">
                Understanding The Libra Reserve
              </a>
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              <a href="https://libra.org/en-US/association/#goals_organization" target="_blank">
                The Role Of Libra Association
              </a>
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              <a href="https://libra.org/en-US/white-paper" target="_blank">
                Official White Paper
              </a>
            </Box>
          </ul>
        </Box>
        <Box>
          <Box mb="32px" color="#232D3D">
            Getting Started
          </Box>
          <ul>
            <Box as="li" color="#9ca6b4" mb="lg">
              <a href="https://libra.org/en-US/open-source-developers/" target="_blank">
                Develop with Libra
              </a>
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              <a href="https://github.com/libra/libra" target="_blank">
                Contribute to Open Source
              </a>
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              <a href="https://developers.libra.org/docs/move-paper" target="_blank">
                Learning The Move Language
              </a>
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              <a
                href="https://community.libra.org/t/libexplorer-com-a-new-libra-blockchain-explorer-launches/1135"
                target="_blank"
              >
                Join The Discussion
              </a>
            </Box>
          </ul>
        </Box>
        <Box>
          <Box mb="32px" color="#232D3D">
            In The News
          </Box>
          <ul>
            <Box as="li" color="#9ca6b4" mb="lg">
              <a href="https://techcrunch.com/2019/06/18/facebook-libra/" target="_blank">
                All You Need To Know About Libra
              </a>
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              <a
                href="https://www.theverge.com/2019/6/26/18716326/facebook-libra-cryptocurrency-blockchain-irs-starbucks"
                target="_blank"
              >
                Libra Explained & Demystified
              </a>
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              <a
                href="https://www.coindesk.com/billion-dollar-returns-the-upside-of-facebooks-libra-cryptocurrency"
                target="_blank"
              >
                What Is Libra Token?
              </a>
            </Box>
            <Box as="li" color="#9ca6b4" mb="lg">
              <a
                href="https://blog.usejournal.com/10-questions-about-libra-facebooks-new-digital-currency-db4715c6a240"
                target="_blank"
              >
                10 Questions About Libra
              </a>
            </Box>
          </ul>
        </Box>
      </Flex>
    </Box>
  );
}

export default React.memo(FooterNav);
