import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {
  return (
    <Container>
      <div
        style={{ width: "450px", background:"#7879FF"}}
        className="mx-auto my-5 shadow p-5 border rounded"
      >
        <h2 className="text-uppercase text-white">Login here</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
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
