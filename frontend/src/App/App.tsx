import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ContainerForm from "../ContainerForm/ContainerForm";
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import UserProfile from "../UserProfile/UserProfile";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ContainerForm Form={LoginForm} />} />
                <Route
                    path="/registration"
                    element={<ContainerForm Form={RegistrationForm} />}
                />
                <Route path="/user/:id" element={<UserProfile/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
