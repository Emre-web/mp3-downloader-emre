import React from "react";
import {Link} from "react-router-dom";
import "../components/Input/input.css";
import Input from "../components/Input/Input";
import Form from "../components/Form/Form";
import {register} from "../firebase";
import {Button} from "react-bootstrap";

function Login() {
    return (
        <>
            <ul className="back">
                <li>
                    <Link className="link-geri" to="/">Geri</Link>
                </li>
            </ul>
            <div className="login">
                <h2>Giriş yap</h2>
                <Form>
                    <Input/>
                    <Button className="btn-danger">Kayıt Ol</Button>
                </Form>
            </div>
        </>
    );
}

export default Login;
