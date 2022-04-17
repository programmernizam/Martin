import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../Firebase.init";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const handleEmail = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid Email" });
    }
  };

  const handlePassword = (e) => {
    const passwordRegex = /.{6}/;
    const validPassword = passwordRegex.test(e.target.value);
    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({
        ...errors,
        password: "Password Must Be  contain 6 characters",
      });
    }
  };
  if (user) {
    navigate("/");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
  };
  // useEffect(() => {
  //   if (error) {
  //     toast(error?.message);
  //   }
  // }, [error]);

  const handleResetPassword = () => {
    sendPasswordResetEmail(userInfo.email);
    alert("Email send");
  };

  return (
    <Container>
      <div className="shadow p-5 my-5 mx-auto" id="login-form">
        <h2>Login Here</h2>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleEmail}
            className="input-filed"
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          {errors?.email && (
            <p className="text-warning my-3 fw-bold">{errors?.email}</p>
          )}
          <input
            onChange={handlePassword}
            className="input-filed"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          {errors?.password && (
            <p className="text-warning my-3 fw-bold">{errors?.password}</p>
          )}
          {loading && <p className="text-white">loading...</p>}
          <p className="text-warning">{error?.message}</p>
          <p className="text-white">Forget Password? <Link className="text-decoration-none text-warning" to="/login" onClick={handleResetPassword}>Reset Password</Link></p> 
          <input type="submit" value="Login" className="input-submit" />
          <p className="text-white">
            Not a member?
            <Link className="text-decoration-none text-warning" to={"/signup"}>
              SignUP
            </Link>
          </p>
          <SocialLogin />
        </form>
      </div>
    </Container>
  );
};

export default Login;
