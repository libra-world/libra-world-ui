import React from 'react';
import { withRouter } from 'react-router-dom';
import FooterNav from './FooterNav';
import FooterRights from './FooterRights';

function Footer({ location }) {
  return (
    <>
      {!location.pathname.includes('tx-info') && <FooterNav />}
      <FooterRights />
    </>
  );
}

export default withRouter(Footer);
