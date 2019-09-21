import React from 'react';
import { Link } from 'react-router-dom';

function Index({ children }) {
  return (
    <div className="wrapper">
      <header>
        <ul>
          <Link to="/en">home</Link>
          <Link to="/en/address">address info</Link>
        </ul>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default React.memo(Index);
