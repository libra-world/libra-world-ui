import React from 'react';
import Header from './Header';
import Footer from '@src/layout/Footer';

function Index({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default React.memo(Index);
