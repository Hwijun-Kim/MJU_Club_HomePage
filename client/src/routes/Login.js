import React from "react";
import {isMobile} from "react-device-detect";
import LoginForm from '../components/Auth/LoginForm';
import '../style/Login.css'

function Login() {
  
  // header
  // side box
  
  // body  
  if (isMobile) { //모바일일때
    console.log("this is mobile");
    return(
      <>
      <LoginForm />
      </>
    );
  } else { //desktop일때
    console.log("this is desktop");
    return (
      <>
      <div className="login-pc">
        <div className="title">로그인</div>
        <LoginForm />
      </div>
      </>
    );
  }
  // footer
}

export default Login;