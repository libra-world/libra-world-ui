import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ThemeProvider from './theme/ThemeProvider';
import 'normalize.css';
import './static/css/override.css';
import './static/icon/iconfont.css';

import RootRouter from './router';
import store from './store';
// import '@src/config/i18n';

const rootElement = document.getElementById('root');

const App = () => (
  <Provider store={store}>
    <ThemeProvider>
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
