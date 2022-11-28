import axios from "axios";
import { FC, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { AppLayout } from "../../components/shared/AppLayout";
import { login } from "../../redux/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";

const Signup: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const appDispatch = useAppDispatch();
  const navigate = useNavigate();

  const signup = () => {
    axios
      .post("http://localhost:8000/auth/register", {
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
      <h2>Sign Up</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" onClick={signup}>
          Sign Up
        </Button>
        <br /> <br />
        <Link to="/login">
          <span>Already have an account? Login here.</span>
        </Link>
      </Form>
    </AppLayout>
  );
};

export default Signup;
