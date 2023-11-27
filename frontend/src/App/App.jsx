import React, { useCallback, useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import ContainerForm from "../ContainerForm/ContainerForm";
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import UserProfile from "../UserProfile/UserProfile";

export const MyContext = React.createContext('default');

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ContainerForm Form={LoginForm}/>} />
                <Route
                    path="/registration"
                    element={<ContainerForm Form={RegistrationForm} />}
                />
                <Route path="/user" element={<UserProfile/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
