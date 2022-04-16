import React from "react";
import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../Firebase.init";
import GoogleLogo from '../../../images/google_logo.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handleGoogleSubmit = () =>{
        signInWithGoogle()
    }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ width: "50%", height: "1px", background: "white" }}></div>
        <p className="text-white">or</p>
        <div style={{ width: "50%", height: "1px", background: "white" }}></div>
      </div>
      <p className="text-danger">{error?.message}</p>
      <Button onClick={handleGoogleSubmit} className="w-75 mx-auto d-block" variant="light"><img src={GoogleLogo} alt="" /><span>Login with Google</span></Button>
    </div>
  );
};

export default SocialLogin;
