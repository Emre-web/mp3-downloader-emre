import React, {useState} from 'react';
import {Card, Button, Form, Container} from "react-bootstrap";
import "./Login.css";
import {Link, useNavigate} from "react-router-dom";
import {RoutesEnum} from "../../App";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [check, setCheck] = useState(false)

    const handleEmailChange = (e: React.ChangeEvent<any>) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<any>) => {
        setPass(e.target.value);
    }

    return (
        <Container className="d-flex align-items-center justify-content-center custom-card-container">
            <div className="w-100 custom-card">
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Giriş Yap</h2>
                        <Form autoComplete="off">
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control value={email} name="mp3-email" type="email" required onChange={handleEmailChange}/>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Parola</Form.Label>
                                <Form.Control value={pass} name="mp3-password" type="password" required onChange={handlePasswordChange}/><br/>
                                <Form.Check checked={check} onChange={e => setCheck(e.target.checked)} type="checkbox" label="Beni hatırla"/>
                            </Form.Group>
                            <Button className="w-100 mt-4 giris-yap-buton" type="submit">Giriş
                                Yap</Button>
                        </Form>
                    </Card.Body>
                    <li>
                        <div className="w-100 text-center mt-2">
                            <Link to={RoutesEnum.REGISTER}>
                                Bir hesabın yok mu? O halde kayıt ol
                            </Link>
                        </div>
                    </li>
                </Card>
            </div>
        </Container>
    );
}

export default Login;
