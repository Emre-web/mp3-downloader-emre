import React from "react";
import {Link} from "react-router-dom";
import {InputGroup, Form, FormControl} from "react-bootstrap";
import "./home.css";


function Home() {
    return (
        <>
            <nav className=" container-fluid navbar navbar-expand-lg  custom-navbar">
                <div className="container-fluid">
                    <Link to="/"><span className="navbar-brand">MP3DOWNLOADER</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="position-absolute top-0 end-0" style={{marginRight: "30px", paddingTop: "5px"}}>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link to="Register"><span className="nav-link active"
                                                          aria-current="page">Giriş yap</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="col-md-7 container-fluid input-area">
                <h2 className="baslik-link">Youtube video linkini aşağı yapıştırın</h2>
                <InputGroup className="input-place" size="lg">
                    <Form.Control
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                    />
                </InputGroup>
                <div className="button button-download">İNDİR</div>

            </div>
        </>
    )
}

export default Home;