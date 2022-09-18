import React from 'react';
import {Badge, Card, Button, Form, Container} from "react-bootstrap";
import "./Login.css";
import {Link,useNavigate} from "react-router-dom";

function Login (){
    const navigate = useNavigate();
    return (
        <>
            <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                <div className="w-100 custom-card" style={{maxWidth: "400px"}}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"  required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"  required /><br/>
                            <Form.Check type="checkbox" label="Beni hatırla"/>
                        </Form.Group>
                        <Button className="w-100 mt-4" type="submit">Log In</Button>
                    </Form>
                </Card.Body>
                <li onClick={() => navigate(-1)} className="girisYap">
                    <div className="w-100 text-center mt-2">
                        <Link to={""} style={{textDecoration:"none"}}>Already have'nt an account ? Sign In</Link>
                    </div>
                </li>
            </Card>
                </div>
            </Container>
        </>
    );
}

export default Login;