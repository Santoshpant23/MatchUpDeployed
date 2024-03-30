import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
//import './fonts/retropix.ttf';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-i7tf84nnffp4uopc.us.auth0.com"
    clientId="yJzlxFYh6p5ZLvsrdGdAuqkhdV3zZ26n"
    authorizationParams={{
      redirect_uri: 'http://localhost:3000/games'
    }}
  >
     <App />
  </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();