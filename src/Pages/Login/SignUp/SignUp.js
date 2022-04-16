import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../Firebase.init";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
      ] = useCreateUserWithEmailAndPassword(auth);

      if(user){
        navigate("/home")
    }
    const handelEmailBlur = event =>{
        setEmail(event.target.value)
    }
    const handelPasswordBlur = event =>{
        setPassword(event.target.value)
    }
    const handelConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value)
    }
    const handelSubmit = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError("Password did't match!")
            return;
        }
        if(password.length < 6){
            setError("Password must be 6 characters or longer");
            return
        }
        
        createUserWithEmailAndPassword(email, password)
    }
  return (
    <div>
      <Container>
        <div
          style={{ width: "450px", background: "#3EB489" }}
          className="mx-auto my-5 shadow p-5 border rounded"
        >
          <h2 className="text-uppercase text-white">Register here</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control onBlur={handelEmailBlur} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control onBlur={handelPasswordBlur} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Control onBlur={handelConfirmPasswordBlur} type="password" placeholder="Confirm Password" />
            </Form.Group>
            <p className="text-danger">{error}</p>
            <Button onClick={handelSubmit} className="px-5" variant="light" type="submit">
              Sign Up
            </Button>
          </Form>
          <p className="mt-2 text-white">
            Already have account?{" "}
            <Link className="text-decoration-none text-warning" to={"/login"}>
              Login Now!
            </Link>
          </p>
          <SocialLogin />
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
