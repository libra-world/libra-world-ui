import React, { Suspense, lazy, PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorBoundary from '@src/components/ErrorBoundary';
import Layout from '@src/layout';
import Loading from '@src/components/Loading';

// import FakeLogin from './pages/fakelogin';

const HomePage = lazy(() => import('./pages/Home'));
const AddressInformation = lazy(() => import('./pages/AddressInformation'));
const TXInfo = lazy(() => import('./pages/TXInfo'));

export default class RootRouter extends PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact={false} path="/fakelogin" component={FakeLogin} /> */}
          <ErrorBoundary>
            <Layout>
              <Suspense fallback={<Loading />}>
                <Route exact={true} path="/" component={HomePage} />
                <Route exact={true} path="/:locale" component={HomePage} />
                <Route path="/:locale/address-info/:address" component={AddressInformation} />
                <Route path="/:locale/tx-info/:txType/:version" component={TXInfo} />
              </Suspense>
            </Layout>
          </ErrorBoundary>
        </Switch>
      </Router>
    );
  }
}
