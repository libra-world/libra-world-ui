import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
// import ThemeProvider from '@src/components/ThemeProvider';

import RootRouter from './router';
import store from './store';
// import '@src/config/i18n';

const rootElement = document.getElementById('root');

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={{ color: 'mediumseagreen' }}>
      <RootRouter />
    </ThemeProvider>
  </Provider>
);

render(<App />, rootElement);
// if (rootElement.hasChildNodes()) {
//   hydrate(<App />, rootElement);
// } else {
// }
// render(<App />, document.getElementById('root'));
