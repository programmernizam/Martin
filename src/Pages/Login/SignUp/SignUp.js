import React, { useEffect, useRef, useState } from "react";
import "./SignUp.css";
import { Container } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase.init";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const [errors, setErrors] = useState("");

  let from = location.state?.from?.pathname || "/";

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      setErrors("Password did't match");
      return;
    }
    if (password.length < 6) {
      setErrors("Enter password at last 6 character");
      return;
    }
    setErrors("")
    createUserWithEmailAndPassword(email, password, name);
  };

  const navigateLogin = () => {
    navigate("/login");
  };
  return (
    <Container>
      <div className="shadow p-5 my-5 mx-auto" id="login-form">
        <h2>Login Here</h2>
        <form onSubmit={handleSubmit}>
          <input
            ref={nameRef}
            className="input-filed"
            type="text"
            name="name"
            placeholder="Full Name"
            required
          />
          <input
            ref={emailRef}
            className="input-filed"
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <input
            ref={passwordRef}
            className="input-filed"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <input
            ref={confirmPasswordRef}
            className="input-filed"
            type="password"
            name="ConfirmPassword"
            placeholder="Confirm Password"
            required
          />
          <p className="text-warning">{error?.message}</p>
          <p className="text-danger">{errors}</p>
          <input
            type="submit"
            value="SignUP"
            className="input-submit"
          />
          <p className="text-white">
            Not a member?{" "}
            <Link
              className="text-decoration-none text-warning"
              to={"/login"}
              onClick={navigateLogin}
            >
              Login
            </Link>
          </p>
          <SocialLogin />
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
