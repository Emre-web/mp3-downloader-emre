import React from "react";
import {Link} from "react-router-dom";

function Home() {
    return (
        <nav className="navbar navbar-expand-lg bg-danger">
            <div className="container-fluid">
                <Link to="/"><span className="navbar-brand" style={{color: "white"}}>Navbar</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="position-absolute top-0 end-0" style={{marginRight: "30px", paddingTop: "5px"}}>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="login"><span className="nav-link active" aria-current="page"
                                                   style={{color: "white"}}>Giriş yap</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )

}

export default Home;