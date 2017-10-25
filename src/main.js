import React from 'react';
import { render } from 'react-dom';

import App from './containers/App/App';
import './styles/styles.scss';
import './styles/scss/style.scss';
// import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';

const dest = document.getElementById('react-container');
const service = { "something": "something"};

const init = function(dest, svc) {
  render(<App service={service} />, dest);
}

global.init = init;

init(dest, service);



//another option is to export using module.exports = init;
//then use reactapp.init (this works only locally)
