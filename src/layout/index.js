import React from 'react';
import { Box } from '@src/components/uikit';
import Footer from '@src/layout/Footer';
import Header from './Header';

const routerShowMap = {
  'tx-info': false, // todo
};

function Index({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <Box as="main" mt="100px">
        {children}
      </Box>
      <Footer />
    </div>
  );
}

export default React.memo(Index);
