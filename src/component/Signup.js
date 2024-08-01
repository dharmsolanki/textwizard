import React, { useEffect, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [signUpInfo, setSignUpInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // console.log(signUpInfo)
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signUpInfo.password !== signUpInfo.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    } else {
      setFormSubmitted(true);
    }

    const storedFormData = JSON.parse(localStorage.getItem("formData")) || [];
    storedFormData.push(signUpInfo);
    localStorage.setItem("formData", JSON.stringify(storedFormData));

    setSignUpInfo({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setFormSubmitted(true);
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpInfo((prevSignInfo) => ({
      ...prevSignInfo,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (formSubmitted) {
      toast.success("form submitted");
    }
  }, [formSubmitted]);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Sign Up</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={signUpInfo.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={signUpInfo.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={signUpInfo.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={signUpInfo.confirmPassword}
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
}
