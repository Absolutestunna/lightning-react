import React from 'react';
import plusCloseLogo from './../styles/scss/images/plus-close.svg';

const HelpAreaComp = (props) => {
  return (
    <div className="help-area">
      <div className="dx-col">
        <div className="help-hd">Need Help Signing In?</div>
        <div className="help-items">
          <div className="item">
            <input id="help-item-01" type="checkbox" />
            <label htmlFor="help-item-01">
              Why do I need to enter my ID/password?
              <img src={plusCloseLogo} type="image/svg+xml" />
            </label>
            <div className="item-content">
              <p>
                The system presents this login page if the user has not fully
                completed the registration steps previously by successfully logging
                onto Contact or the user is trying to access a direct link to the
                SSO application (via vanity url or an email link to an application
                page) without going through Contact site. Once you have
                successfully logged onto Contact and validated your Contact
                password, you should no longer see the login screen when accessing
                application via Contact page.
              </p>
            </div>
          </div>
          <div className="item">
            <input id="help-item-02" type="checkbox" />
            <label htmlFor="help-item-02">
              SSO Advisory for Consumer User
              <img src={plusCloseLogo} type="image/svg+xml" />
            </label>
            <div className="item-content">
              <p>
                As part of the decommissioning of legacy software products,
                password synch functionality on Contact will be turned off for
                Consumer Domains (SunAmerica-LA, WNL, Valic &amp; Advisor). As such,
                Consumer users who have not yet migrated to R1-CORE will have their
                SSO password expire every 90 days. If the SSO password happens to
                expire before the user is migrated to R1-Core, users will be
                prompted by AIG Contact to change their SSO. This will repeat every
                90 days until the user is migrated to R1-Core.
              </p>
            </div>
          </div>
          <div className="item">
            <input id="help-item-03" type="checkbox" />
            <label htmlFor="help-item-03">
              What is my Employee ID?
              <img src={plusCloseLogo} type="image/svg+xml" />
            </label>
            <div className="item-content">
              <p>
                Your Employee ID is a seven-digit number.	In many countries, it can
                be found on your paycheck stub or direct deposit advice.	If you
                need further assistance, please contact Human Resources.
              </p>
            </div>
          </div>
          <div className="item">
            <input id="help-item-04" type="checkbox" />
            <label htmlFor="help-item-04">
              What is my Consultant Enterprise ID?
              <img src={plusCloseLogo} type="image/svg+xml" />
            </label>
            <div className="item-content">
              <p>
                Your manager should have received your consultant EID during the
                onboarding process and passed it along to you. If you don&#39;t know
                your EID and your manager does not know your EID, ask your manager
                to contact the local IT Help Desk and they can assist with
                verifying your EID by checking the AIG Contact user listing.
              </p>
            </div>
          </div>
          <div className="item">
            <input id="help-item-05" type="checkbox" />
            <label htmlFor="help-item-05">
              Where do I enter my password?
              <img src={plusCloseLogo} type="image/svg+xml" />
            </label>
            <div className="item-content">
              <p>
                On the next screen, you will be prompted to enter your password.
                If you need to create or reset your password, or if your account
                has been locked or disabled, you will receive a message with
                instructions on how to resolve your login issue.
              </p>
            </div>
          </div>
          <div className="item">
            <input id="help-item-06" type="checkbox" />
            <label htmlFor="help-item-06">
              What if I still need help?
              <img src={plusCloseLogo} type="image/svg+xml" />
            </label>
            <div className="item-content">
              <p>
                Your password is case sensitive.	If you have typed it correctly
                and still cannot log-in, you can try resetting your password or
                you can call your local IT Help Desk.
              </p>
            </div>
          </div>
          <div className="item">
            <input id="help-item-07" type="checkbox" />
            <label htmlFor="help-item-07">
              How does the improved sign in process works?
              <img src={plusCloseLogo} type="image/svg+xml" />
            </label>
            <div className="item-content">
              <p>
                Here&#39;s how the one time registration/login process works:
              </p>
              <ul>
                <li>You enter your EID and click Continue.</li>
                <li>The system will check for an active password in your profile and present you with Password screen so you can continue with the login process.</li>
                <li>If login system recognizes that your password is currently expired, locked, or disabled, you will be presented with a contextual message screen guiding you through the resolution steps.</li>
                <li>Once you have successfully logged in and completed a "behind-the-scenes" one time registration process, the system will identify you automatically on future visits.</li>
              </ul>
            </div>
          </div>
          <div className="item">
            <input id="help-item-08" type="checkbox" />
            <label htmlFor="help-item-08">
              Privacy and Information Handling Notification
              <img src={plusCloseLogo} type="image/svg+xml" />
            </label>
            <div className="item-content">
              <p>
                Information contained herein may be considered Confidential
                Employee Information. This information should only be handled by
                or shared with individuals on a "need to know" basis in order to
                perform their job duties. The unauthorized use, collection,
                retention/storage, access, processing, viewing, disclosure,
                transfer and disposal of information in a manner inconsistent
                with the provisions of the AIG Global Information Handling Policy
                is strictly prohibited. All incidents involving the unauthorized
                handling of confidential information should be reported to a
                member of the AIG Privacy Team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default HelpAreaComp;
