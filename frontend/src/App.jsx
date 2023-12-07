import React, { useState } from "react";
import "./App.css";

import AbstractForm from "./AbstractForm";
import LoginForm from "./LoginForm";
import { loginInitialState, registrationInitialState } from "./AbstractForm/data";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import UserProfile from "./UserProfile";
import RegistrationForm from "./RegistrationForm";

import { useTranslation } from "react-i18next";

export const UserContext = React.createContext('default'); 
export const LanguageContext = React.createContext('default');

function App() {
  const [ authorizedUser, setAuthorizedUser ] = useState({});
  
  const { t, i18n } = useTranslation();

    return (
        <div className="App">
          <BrowserRouter>
            <UserContext.Provider value={{authorizedUser, setAuthorizedUser}}>
            <LanguageContext.Provider value={{t, i18n}}>
                <Routes>
                    <Route
                        path="/login"
                        element={
                            <AbstractForm
                                Form={LoginForm}
                                initialState={loginInitialState}
                            />
                        }
                    />
                     <Route
                        path="/registration"
                        element={
                            <AbstractForm
                                Form={RegistrationForm}
                                initialState={registrationInitialState}
                            />
                        }
                    />
                    <Route path={`/user/:id`} element={<UserProfile user={authorizedUser}/>} />
                </Routes>
            </LanguageContext.Provider>
            </UserContext.Provider>  
          </BrowserRouter>
        </div>
    );
}

export default App;
