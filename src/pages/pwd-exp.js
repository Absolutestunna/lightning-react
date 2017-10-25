import React, { Component } from 'react';

export default class PassExpComponent extends Component {
  render(){
    return (
      <div className="login-wrap">
          <div className="main-content">
            <div className="dx-col">
              <div className="message-area">
                <div className="dx-col">
                  <div className="message-hd">Your password is expired&nbsp;/ not&nbsp;set</div>
                  <div className="message-text">
                    <p> It&#39;s the same password that you use on your desktop.</p>
                    <p>Reset your password by clicking CTRL + ALT + DELETE on your computer and select "change password". Then, try logging back into <i>Contact</i> </p>
                  </div>
                  <div className="message-items">
                    <div className="item">
                      <label> Still need help?</label>
                      <div className="item-content">
                        <p>
                          Your password is case sensitive. If you have typed it
                          correctly and still cannot log-in, you can try <a href>resetting your password</a> or you can call your local <a href>IT Help Desk</a>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        </div>
    );
  }

}
