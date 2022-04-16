import React from "react";
import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../Firebase.init";
import GoogleLogo from '../../../images/google_logo.png';

const SocialLogin = () => {
    const [signInWithGoogle, error, user] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    if(user){
        navigate("/home")
    }
    if (error) {
        return (
          <div>
            <p className="text-danger">Error: {error.message}</p>
          </div>
        );
      }
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
      <Button onClick={handleGoogleSubmit} className="w-75 mx-auto d-block" variant="light"><img src={GoogleLogo} alt="" /><span>Login with Google</span></Button>
    </div>
  );
};

export default SocialLogin;
