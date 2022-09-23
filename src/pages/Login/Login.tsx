import React, {useState} from 'react';
import {Card, Button, Form, Container} from "react-bootstrap";
import "./Login.css";
import {Link, useNavigate} from "react-router-dom";

function Login() {

    const [email, setEmail] = useState({email: ''})
    const [pass, setPass] = useState({pass: ''})

    const handleEmailChange = (e: React.ChangeEvent<any>) => {
        //   setEmail(e.target.value)
        if (e.target.type === "email") {
            setEmail({email: e.target.value});
            console.log(email);
        }
    }
    const handlePasswordChange = (e: React.ChangeEvent<any>) => {
        if (e.target.type === "password") {
            setPass({pass: e.target.value});
            console.log(pass);
        }
    }

    const navigate = useNavigate();
    return (
        <>
            <Container className="d-flex align-items-center justify-content-center custom-card-container">
                <div className="w-100 custom-card">
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Giriş Yap</h2>
                            <Form>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" required onChange={handleEmailChange}/>
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Parola</Form.Label>
                                    <Form.Control type="password" required onChange={handlePasswordChange}/><br/>
                                    <Form.Check type="checkbox" label="Beni hatırla"/>
                                </Form.Group>
                                <Button className="w-100 mt-4 giris-yap-buton" type="submit">Giriş
                                    Yap</Button>
                            </Form>
                        </Card.Body>
                        <li onClick={() => navigate(-1)}>
                            <div className="w-100 text-center mt-2">
                                <Link to={""}>
                                    Bir hesabın yok mu? O halde kayıt ol
                                </Link>
                            </div>
                        </li>
                    </Card>
                </div>
            </Container>
        </>
    );
}

export default Login;