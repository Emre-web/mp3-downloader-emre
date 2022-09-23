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
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="Register" element={<Register/>}/>
                <Route path="Register/Login" element={<Login/>}/>
                <Route path="Register/Login/Profile" element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
