import React from "react";
import {InputGroup, Form} from "react-bootstrap";

import "./home.css";

function Home() {
    return (
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
    )
}

export default Home;
