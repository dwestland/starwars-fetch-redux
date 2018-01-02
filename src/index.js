import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './configureStore'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore()

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


