import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import { ProductProvider } from './context/ProductContext';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-sdogmt6pe8cfq28r.au.auth0.com"
  clientId="CZZNbKyG5O5WsU8VC7HbeEatn04PKRyS"
  authorizationParams={{
    redirect_uri: window.location.origin
  }} >
    <BrowserRouter>
    <ProductProvider>
    <App />
    </ProductProvider>
    </BrowserRouter>
    </Auth0Provider>
);

