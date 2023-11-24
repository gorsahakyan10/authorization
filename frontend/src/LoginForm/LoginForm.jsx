import React, { useRef, useState } from "react";
import './LoginForm.css'
import ErrMessage from "../ErrMessage/ErrMessage";
import sendingUserDataToTheServer from "../functions/sendingUserDataToTheServer";
import UsernameField from "../UsernameField/UsernameField";
import PasswordField from "../PasswordField/PasswordField";

function LoginForm({ state, handler, clearInputFields }) {
    const [ err, setErr ] = useState({ err: false, errName: '' })
    const inputRef = useRef(null);

    const handlerOnSubmit = async (e) => {
        e.preventDefault();
        clearInputFields(LoginForm.name);
        setErr( await sendingUserDataToTheServer(state, '/login') )
        inputRef.current.focus();
     }

    return (
        <div className="LoginForm">
            <div className="Title">
                <h2>Login</h2>
            </div>
            <form onSubmit={ handlerOnSubmit }>
                <ul>
                    <UsernameField inputValue={state.username}
                                   inputId='Username'
                                   name='username'
                                   handler={handler}
                                   inputRef={inputRef}
                    />
                    <PasswordField inputValue={state.password}
                                   inputId='Password'
                                   name='password'
                                   handler={handler}
                    />
                    <li>
                        <button>Send</button>
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
