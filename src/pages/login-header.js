import React from 'react';
import logo from './../styles/scss/images/aig-brand-blue.svg';

const LoginHeader = ({handleLanguageDropdownFunc}) => {
  return (
    <div className="page-header">
      <img src={logo} className="logo" />
      <div className="language-menu" onClick={handleLanguageDropdownFunc}>
        <div id="menu-dropdown">
          <div className="lang">English</div>
          <div className="change">Change</div>
        </div>
        <div id="menuDiv-dropdown" className="invisible">
          <ul>
            <li><a href>日本語</a></li>
            <li><a href>Français</a></li>
            <li><a href>繁體中文</a></li>
            <li><a href>简体中文</a></li>
            <li><a href>한국어</a></li>
            <li><a href>ภาษาไทย</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LoginHeader;
