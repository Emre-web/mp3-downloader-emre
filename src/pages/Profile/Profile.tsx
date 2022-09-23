import React from 'react';
import "./profile.css";
import {Nav, Navbar, Container, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";


function Profile() {
    return (
        <div className="custom-navbar">
            <Navbar>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Anasayfa</Nav.Link>
                    </Nav>
                    <Nav.Link href="#">Çıkış Yap</Nav.Link>
                </Container>
            </Navbar>
            <div className="container">
                <div className="col-md-6 my-5">
                    <h5 className="indirdiklerim-basligi">Daha önce indirdiklerim</h5>
                    <ListGroup as="ol" numbered>
                        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                    </ListGroup></div>
            </div>
        </div>
    );
}

export default Profile;