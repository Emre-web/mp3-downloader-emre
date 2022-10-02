import {Link} from "react-router-dom";
import React from "react";
import {RoutesEnum} from "../../App";

const Navbar = () => {
    return (
        <nav className="container-fluid navbar navbar-expand-lg custom-navbar">
            <div className="container-fluid">
                <Link to={RoutesEnum.HOME}><span className="navbar-brand">MP3DOWNLOADER</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="position-absolute top-0 end-0" style={{marginRight: "30px", paddingTop: "5px"}}>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="login"><span className="nav-link active">Giriş yap</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
