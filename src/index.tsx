import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'styles/milligram.css';

import { store } from 'store';
import { Provider } from 'react-redux';

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
