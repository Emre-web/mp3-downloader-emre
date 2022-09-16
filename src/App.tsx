import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home";
import Login from "./pages/Login";
import Register from "./Register";


function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="src/pages/Login" element={<Login />} />
            <Route path="Register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
