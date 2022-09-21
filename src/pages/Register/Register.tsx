import React, {useState, useMemo} from "react";
import {Link} from "react-router-dom";
import "../components/Input/input.css";
import "./Register.css";
import {register} from "../firebase";
import {Badge, Button, Form,Card,Container} from "react-bootstrap";



const Register = () => {
    const [emailAddress, setEmailAddress] = useState("")
    const isValidEmailAddress = useMemo(() => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)
    }, [emailAddress])

    const [passwordLogin, setPassword] = useState("")
    const isValidPassword = useMemo(() => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(passwordLogin)
    }, [passwordLogin])


    return (
        <>
            <ul className="back">
                <li>
                    <Link className="link-geri" to="/">Geri</Link>
                </li>
            </ul>

            <div className="SignIn">
                <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                    <div className="w-100 custom-card" style={{maxWidth: "400px"}}>
                <Card>
                    <Card.Body>
                <Form className="Form">
                    <h2 className="SignInTitle">Sıgn In</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                                      onChange={(e) => setEmailAddress(e.target.value)}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    {!isValidEmailAddress && emailAddress !== "" &&
                        <Badge>Please Enter a Valid Email Address!</Badge>}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                                      onChange={(e) => setPassword(e.target.value)}/>
                        <Form.Text className="text-muted">
                            Your password must contain uppercase, lowercase, numbers and symbols.
                        </Form.Text>
                    </Form.Group>
                    {!isValidPassword && passwordLogin !== "" &&
                        <Badge>Please Enter a Valid Password!</Badge>}
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Button disabled={!isValidEmailAddress} className="w-100 mt-4 custom-button" type="submit">Kayıt Ol</Button>
                    </Form.Group>
                </Form>
                    </Card.Body>
                    <Link to="Login" className="girisYap" >
                        <div className="w-100 text-center mt-2">
                            Already have an account ? Log In
                        </div>
                    </Link>
                </Card>

                    </div>
                </Container>
            </div>

        </>
    );
}

export default Register;
