import React from 'react';
import Header from './Header';

function Index({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default React.memo(Index);
