import React, {useState, useMemo} from "react";
import {Link} from "react-router-dom";
import "../../components/Input/input.css";
import "./Register.css";
import {Badge, Button, Form, Card, Container} from "react-bootstrap";
import {RoutesEnum} from "../../App";

const Register = () => {
    const [emailAddress, setEmailAddress] = useState("")
    const isValidEmailAddress = useMemo(() => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)
    }, [emailAddress])

    const [passwordLogin, setPassword] = useState("")
    const isValidPassword = useMemo(() => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(passwordLogin)
    }, [passwordLogin])

    const handleRegister = async () => {
    }

    const login = async () => {
    }

    const logout = async () => {
    }

    return (
        <div className="SignIn">
            <Container className="d-flex align-items-center justify-content-center kayit-ol-container">
                <div className="w-100 kayit-ol-div">
                    <Card>
                        <Card.Body>
                            <Form className="Form">
                                <h2 className="SignInTitle">Kayıt Ol</h2>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email adresi</Form.Label>
                                    <Form.Control type="email" placeholder="Email girin"
                                                  onChange={(e) => setEmailAddress(e.target.value)}
                                    />
                                    <Form.Text className="text-muted">
                                        E-postanızı asla başkalarıyla paylaşmayacağız.
                                    </Form.Text>
                                </Form.Group>
                                {!isValidEmailAddress && emailAddress !== "" &&
                                    <Badge>Lütfen geçerli bir email adresi giriniz!</Badge>}
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Parola</Form.Label>
                                    <Form.Control type="password" placeholder="Parola"
                                                  onChange={(e) => setPassword(e.target.value)}/>
                                    <Form.Text className="text-muted">
                                        Parolanız büyük harf, küçük harf, sayı ve sembol içermelidir.
                                    </Form.Text>
                                </Form.Group>
                                {!isValidPassword && passwordLogin !== "" &&
                                    <Badge>Lütfen geçerli bir parola giriniz!</Badge>}
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Button onClick={handleRegister} disabled={!isValidEmailAddress} className="w-100 mt-4 kayit-ol-buton">Kayıt Ol</Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                        <Link to={RoutesEnum.LOGIN} className="girisYap">
                            <div className="w-100 text-center mt-2">
                                Zaten bir hesabın var mı? O halde giriş yap
                            </div>
                        </Link>
                    </Card>

                </div>
            </Container>
        </div>
    );
}

export default Register;
