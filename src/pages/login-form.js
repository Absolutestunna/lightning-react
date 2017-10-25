import React from 'react';
import eyeOnLogo from './../styles/scss/images/eye-on.svg';
import eyeOffLogo from './../styles/scss/images/eye-off.svg';
import emailCheck from './../styles/scss/images/email-check.svg';

const LoginForm = ({
  passwordToggleFunc
}) => {
  return (
    <div className="login-area">
      <div className="login">
        <div className="dx-col">
          <div className="login-hd">Please Sign In</div>
          <div className="login-input">
            <div className="dx-custom-input">
              <div className="input-area">
                <input type="text" name defaultValue id="employee-id" placeholder required autoComplete="off" spellCheck="false" />
                <label className="label" htmlFor="employee-id"> Employee/Consultant ID (EID) </label>
                <img src={emailCheck} className="email-check" />
              </div>
              <div className="has-error-text" style={{display: 'none'}}>
                Please enter a correct email address.
                Please enter a correct email address; showing how an error would look with long text.
              </div>
            </div>
          </div>
          <div className="login-input">
            <div className="dx-custom-input dx-password-area">
              <div className="input-area">
                <input className="dx-password-toggle" id="password-visibility-toggle" type="checkbox" onChange={passwordToggleFunc}/>
                <label className="label-visibility-toggle" htmlFor="password-visibility-toggle">
                  <img src={eyeOffLogo} className="eye-off" />
                  <img src={eyeOnLogo} className="eye-on" />
                </label>
                <input type="password" className="dx-password" name defaultValue id="password" placeholder required autoComplete="off" spellCheck="false" />
                <label className="label" htmlFor="password"> Password </label>
              </div>
              <div className="has-error-text" style={{display: 'none'}}>
                Password is not correct.
              </div>
            </div>
          </div>
          <button className="orange">Continue</button>
        </div>
      </div>
    </div>
  )


}

export default LoginForm;
