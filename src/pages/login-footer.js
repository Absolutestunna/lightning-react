import React from 'react';

const LoginFooter = (props) => {
  return (
    <footer>
      <div className="dx-col">
        <div className="privacy-info"> Privacy and Information Handling Notification stuff goes&nbsp;here. </div>
        <div className="copyright-info" style={{display: 'inline-block'}}> © AIG All rights reserved.	</div>
        <div className="footer-links">
          <ul>
            <li><a href="https://contact.aig.net/">AIG Contact Home</a></li>
            <li><a href="http://www.aigcorporate.com/termsofuse/privacy.html">Privacy</a></li>
            <li><a href="http://www.aigcorporate.com/termsofuse/terms_use.html">Terms of Use</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )

}

export default LoginFooter;
