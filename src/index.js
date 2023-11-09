import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {persistor, store} from './Redux/store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { QueryClient, QueryClientProvider } from 'react-query'


const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      {/* <React.StrictMode> */}
        <QueryClientProvider client={queryClient}>
           <App  />
        </QueryClientProvider>
      {/* </React.StrictMode> */}
  </Provider>
);

