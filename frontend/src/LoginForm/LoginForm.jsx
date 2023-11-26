import React, { useRef, useState } from "react";
import "./LoginForm.css";

import ErrMessage from "../ErrMessage/ErrMessage";
import UsernameField from "../UsernameField/UsernameField";
import PasswordField from "../PasswordField/PasswordField";
import Button from "../Button/Button";
import Title from "../Title/Title";
import formHOC from "../highOrderComponents/formHOC";

function LF({
    state,
    handler,
    handlerOnSubmit,
    errors,
    inputRef,
    showErrors,
    getErrors,
}) {
    return (
        <div className="LoginForm">
            <Title title="Login" />
            <form onSubmit={handlerOnSubmit}>
                <ul>
                    <li>
                        <UsernameField
                            inputValue={state.username}
                            inputId="Username"
                            name="username"
                            handler={handler}
                            inputRef={inputRef}
                            showErrors={showErrors.value}
                        />
                    </li>
                    <li>
                        <PasswordField
                            inputValue={state.password}
                            inputId="Password"
                            name="password"
                            handler={handler}
                            showErrors={showErrors.value}
                        />
                    </li>
                    <li>
                        <Button name="Send" />
                    </li>
                    <li>
                        <ErrMessage err={errors} />
                    </li>
                </ul>
            </form>
        </div>
    );
}

const LoginForm = formHOC(LF);

export default LoginForm;
