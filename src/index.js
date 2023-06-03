import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-j1tej5i4gqsmy0nd.us.auth0.com"
    clientId="uAkyIoEW5BqDaZl7rBBrEpzzjMPdCcCP"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);

