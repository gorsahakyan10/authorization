import React, { useState } from "react";
import "./App.css";
import Form from "./AbstractForm";
import AbstractForm from "./AbstractForm";
import LoginForm from "./LoginForm";
import { loginInitialState, registrationInitialState } from "./AbstractForm/data";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import UserProfile from "./UserProfile";
import RegistrationForm from "./RegistrationForm";

export const UserContext = React.createContext('default'); 

function App() {
  const [ authorizedUser, setAuthorizedUser ] = useState({});
  const id = authorizedUser.id || '';

    return (
        <div className="App">
          <BrowserRouter>
            <UserContext.Provider value={{setAuthorizedUser}}>
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
            </UserContext.Provider>  
          </BrowserRouter>
        </div>
    );
}

export default App;
