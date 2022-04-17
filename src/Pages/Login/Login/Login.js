import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase.init";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  const navigateRegister = (event) => {
    navigate("/register");
  };
  return (
    <Container>
      <div className="shadow p-5 my-5 mx-auto" id="login-form">
        <h2>Login Here</h2>
        <form onSubmit={handleSubmit}>
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
          {
            loading && <p className="text-white">loading...</p>
          }
          <p className="text-warning">{error?.message}</p>
          <input type="submit" value="Login" className="input-submit" />
          <p className="text-white">
            Not a member?{" "}
            <Link
              className="text-decoration-none text-warning"
              to={"/signup"}
              onClick={navigateRegister}
            >
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
