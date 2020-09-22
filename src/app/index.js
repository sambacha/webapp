/* eslint-disable react/state-in-constructor */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import netlifyIdentity from 'netlify-identity-widget';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

window.netlifyIdentity = netlifyIdentity;
// You must run this once before trying to interact with the widget
netlifyIdentity.init();

ReactDOM.render(<App />, document.getElementById(`root`));
// registerServiceWorker();
