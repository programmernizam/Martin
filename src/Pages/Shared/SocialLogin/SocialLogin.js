import React from "react";
import { Button } from "react-bootstrap";
import GoogleLogo from '../../../images/google_logo.png';

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ width: "50%", height: "1px", background: "white" }}></div>
        <p className="text-white">or</p>
        <div style={{ width: "50%", height: "1px", background: "white" }}></div>
      </div>
      <Button className="w-75 mx-auto d-block" variant="light"><img src={GoogleLogo} alt="" /><span>Login with Google</span></Button>
    </div>
  );
};

export default SocialLogin;
