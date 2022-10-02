import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";

import './App.css';
import Navbar from "./components/Navbar/Navbar";

export enum RoutesEnum {
    HOME = "/",
    LOGIN = "/login",
    REGISTER = "/register",
    PROFILE = "/profile",
}

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path={RoutesEnum.HOME} element={<Home/>}/>
                <Route path={RoutesEnum.REGISTER} element={<Register/>}/>
                <Route path={RoutesEnum.LOGIN} element={<Login/>}/>
                <Route path={RoutesEnum.PROFILE} element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
