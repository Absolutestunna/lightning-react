import React, { Component } from 'react';
import LoginHeader from './../../pages/login-header';
import LoginFooter from './../../pages/login-footer';
import NotesAreaComp from './../../pages/notes-area';
import HelpAreaComp from './../../pages/help-area';
import LoginFormComp from './../../pages/login-form';



// "window.location.href='_English-2-email-check-successful.html'"
// NOTE: CHECK LINE 5O TO ATTACH FUNCTION FOR RENDER EMAIL CHECK SUCCESSFUL FUNCTIONALITY

export default class Login extends Component {
  constructor(props){
    super();
    this.state = {
      userNameState: false,
      passwordState: false
    };

    this.handleLanguageDropdownFunc = this.handleLanguageDropdownFunc.bind(this);
    this.checkParentFunc = this.checkParentFunc.bind(this);
    this.passwordToggleFunc = this.passwordToggleFunc.bind(this);
    this.handleUserNameState = this.handleUserNameState.bind(this);
  }

  passwordToggleFunc(){

        const password = document.querySelector('.dx-password')

        if (password.type === 'password') {
          password.type = 'text'
        } else {
          password.type = 'password'
        }
        password.focus();

  }

  handleUserNameState(){
    // const employeeID = document.getElementsByClassName("dx-custom-input");
    // const dropdownMenuDiv = document.getElementById("menuDiv-dropdown");
    //
    // console.log('dropdownMenuDiv', dropdownMenuDiv);
    // console.log('employeeID', employeeID.classList);
    //
    // console.log('this.state', this.state);
    // this.state.userNameState ? employeeID.classList.add("has-error") : employeeID.classList.add("eid-check-successful");

  }

  componentDidMount(){
    this.handleUserNameState();

  }

  componentWillReceiveProps(nextProps){

  }


  handleLanguageDropdownFunc(e){
    e.preventDefault();
    const dropdownMenuDiv = document.getElementById("menuDiv-dropdown");
    const dropdownMenu = document.getElementById("menu-dropdown");

  	var target = (e && e.target) || (event && event.srcElement);

  	if (!this.checkParentFunc(target, dropdownMenuDiv)) {
  		if (this.checkParentFunc(target, dropdownMenu)) {
  			if (dropdownMenuDiv.classList.contains("invisible")) {
  				dropdownMenuDiv.classList.remove("invisible");
  			} else {dropdownMenuDiv.classList.add("invisible");}
  		} else {
  			dropdownMenuDiv.classList.add("invisible");
  		}
  	}
  }

  checkParentFunc(t, elm) {
  	while(t.parentNode) {
  		if( t == elm ) {return true;}
  		t = t.parentNode;
  	}
  	return false;
  }
  render(){
    const { userNameState, passwordState } = this.state;
    return (
      <div className="login-wrap">
        <LoginHeader handleLanguageDropdownFunc={this.handleLanguageDropdownFunc}/>
        <div className="main-content">
          <div className="dx-col">
            <LoginFormComp
              passwordToggleFunc={this.passwordToggleFunc}
              userNameState={userNameState}
              passwordState={passwordState}
            />
            <NotesAreaComp />
            <HelpAreaComp />
          </div>
        </div>
        <LoginFooter />
      </div>
    )
  }
}
