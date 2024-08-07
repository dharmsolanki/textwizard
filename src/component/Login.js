import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [spinner, setSpinner] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const usersData = JSON.parse(localStorage.getItem("formData"));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginInfo((prevLoginInfo) => ({
      ...prevLoginInfo,
      [name]: value,
    }));
  };

  const compareSingleToMultiple = (singleObj, multipleObjs) => {
    return multipleObjs?.filter((obj) =>
      Object.keys(singleObj).every((key) => singleObj[key] === obj[key]),
    );
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const matchingObjects = compareSingleToMultiple(loginInfo, usersData);
    if (matchingObjects.length === 1) {
      toast.success("Login Success.");
      localStorage.setItem("isLoggedIn", true);
      setSpinner(true);
      setTimeout(() => {
        navigate("user/home");
      }, 2000);
    } else {
      toast.error("Invalid Credentials.");
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Login</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={loginInfo.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={loginInfo.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100"
              onClick={handleLogin}
            >
              {spinner ? (
                <div class="spinner-border text-light" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              ) : (
                "Login"
              )}
            </Button>
          </Form>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
}
