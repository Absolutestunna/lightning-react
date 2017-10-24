import React from 'react';
import ReactDOM from 'react-dom';

import DemoComponent from './DemoComponent';
import '../styles/styles.scss';
import '../styles/scss/style.scss';
// import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';

const dest = document.getElementById('react-container');
const service = { "something": "something"};

const init = function(dest, svc) {
  ReactDOM.render(<DemoComponent service={service} />, dest);
}

window.init = init;

init(dest, service);
