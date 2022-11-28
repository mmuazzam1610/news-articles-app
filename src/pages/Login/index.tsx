import axios from "axios";
import { FC, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { AppLayout } from "../../components/shared/AppLayout";
import { login } from "../../redux/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";

const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const appDispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginUser = () => {
    axios
      .post("http://localhost:8000/auth/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        appDispatch(login({ accesstoken: res.data.accesstoken, user: email }));
        navigate("/");
      });
  };
  return (
    <AppLayout noNav>
      <h2>Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" onClick={loginUser}>
          Login
        </Button>
        <br /> <br />
        <Link to="/signup">
          <span>Or Signup if you don't have an account</span>
        </Link>
      </Form>
    </AppLayout>
  );
};

export default Login;
