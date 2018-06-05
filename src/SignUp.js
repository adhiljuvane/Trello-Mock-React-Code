import React , { Component } from 'react' ;
import './SignUp.css'
import {Button , Input } from 'antd';


export default class SignUp extends Component{
  render(){
    return(
      <div className="maindiv">
          <div className="signUpForm">
              <div className="title"><b>Create a Trello Account</b></div>
              <div className="linkBelowTitle">or sign in to your account</div>
              <div className="nameText">Name</div>
              <Input placeholder="eg.,Dana Scully" className="input"/>
              <div className="nameText">Email</div>
              <Input placeholder="eg.,danscully@fbi.gov" className="input"/>
              <div className="nameText">Password</div>
              <Input placeholder="eg.,******" className="input"/>
              <Button className="button"><b>Create New Account</b></Button>
              <div className="googleSignIn">Sign up with Google</div>
          </div>
          
      </div>
    )
  }
}
