import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import auth from "../../../Firebase.init";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);

    if(user){
        navigate("/home")
    }
  const handelEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handelPasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handelUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <Container>
      <div
        style={{ width: "450px", background: "#3EB489" }}
        className="mx-auto my-5 shadow p-5 border rounded"
      >
        <h2 className="text-uppercase text-white">Login here</h2>
        <Form>
          <input
            onBlur={handelEmailBlur}
            className="d-block w-100 p-2 my-3 rounded border-0"
            type="email"
            name="email"
            placeholder="Email address"
            id=""
          />
          <input
            onBlur={handelPasswordBlur}
            className="d-block w-100 p-2 my-3 rounded border-0"
            type="password"
            name="password"
            placeholder="Password"
            id=""
          />
          <p className="text-danger">{error?.message}</p>
          <input
            onClick={handelUserSignIn}
            className="btn btn-light px-5"
            type="submit"
            value="Login"
          />
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
