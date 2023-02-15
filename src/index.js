import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { store, persistor } from 'redux/Store';
import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
    </PersistGate>
  </Provider>
);
