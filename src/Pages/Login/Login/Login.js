import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../../../Firebase.init";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        createUserWithEmailAndPassword,
        user,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password);
    }
  return (
    <Container>
      <div
        style={{ width: "450px", background:"#7879FF"}}
        className="mx-auto my-5 shadow p-5 border rounded"
      >
        <h2 className="text-uppercase text-white">Login here</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control ref={passwordRef} type="password" placeholder="Password" />
          </Form.Group>
          <p className="text-danger">{error?.message}</p>
          <Button className="px-5" variant="light" type="submit">
            Login
          </Button>
        </Form>
        <p className="mt-2 text-white">
          New To Martin?{" "}
          <Link className="text-decoration-none text-warning" to={"/signup"}>
            Create Your Account!
          </Link>
        </p>
        <SocialLogin />
      </div>
    </Container>
  );
};

export default Login;
