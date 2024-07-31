import React, { useEffect, useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    const usersData = JSON.parse(localStorage.getItem('formData'));

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLoginInfo((prevLoginInfo) => ({
            ...prevLoginInfo,
            [name]: value
        }));
    };

    function compareSingleToMultiple(singleObj, multipleObjs) {
        return multipleObjs.filter(obj =>
            Object.keys(singleObj).every(key => singleObj[key] === obj[key])
        );
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const matchingObjects = compareSingleToMultiple(loginInfo, usersData);
        if (matchingObjects.length == 1) {
            setLoggedIn(true);
            navigate('/');
        }
        else {
            setLoggedIn(false);
            toast.error('Invalid Credentials.')
        }
    }

    useEffect(() => {
        if (loggedIn) {
            toast.success('Login Success.')
        }
    }, [loggedIn]);

    return (
        <div className='container my-5'>
            <h2 className="text-center mb-4">Login</h2>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" name='email' value={loginInfo.email} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" name='password' value={loginInfo.password} onChange={handleChange} />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100" onClick={handleLogin}>
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
            <ToastContainer />
        </div>
    )
}
