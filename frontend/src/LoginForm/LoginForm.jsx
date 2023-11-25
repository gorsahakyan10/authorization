import React, { useRef, useState } from "react";
import './LoginForm.css'

import ErrMessage from "../ErrMessage/ErrMessage";
import UsernameField from "../UsernameField/UsernameField";
import PasswordField from "../PasswordField/PasswordField";

import {default as login} from "../functions/sendingUserDataToTheServer";
import Button from "../Button/Button";
import Title from "../Title/Title";

function LoginForm({ state, handler, clearInputFields }) {
    const [ err, setErr ] = useState({ err: false, errName: '' })
    const inputRef = useRef(null);

    const handlerOnSubmit = async (e) => {
        e.preventDefault();
        clearInputFields(LoginForm.name);
        setErr( await login(state, '/login') )
        inputRef.current.focus();
     }

    return (
        <div className="LoginForm">
            <Title title='Login'/>
            <form onSubmit={ handlerOnSubmit }>
                <ul>
                    <li>
                       <UsernameField inputValue={state.username}
                                      inputId='Username'
                                      name='username'
                                      handler={handler}
                                      inputRef={inputRef}
                       />
                    </li>
                    <li>
                       <PasswordField inputValue={state.password}
                                      inputId='Password'
                                      name='password'
                                      handler={handler}
                       />
                    </li>
                    <li>
                       <Button name='Send'/>
                    </li>
                    <li>
                       <ErrMessage err={ err }/>
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default LoginForm;
