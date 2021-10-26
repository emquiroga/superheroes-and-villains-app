import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./sass/index.scss";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorkerRegistration.register();


