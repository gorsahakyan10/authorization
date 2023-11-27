import React, { useRef, useState } from "react";
import "./LoginForm.css";

import ErrMessage from "../ErrMessage/ErrMessage";
import UsernameField from "../UsernameField/UsernameField";
import PasswordField from "../PasswordField/PasswordField";
import Title from "../Title/Title";
import formHOC from "../highOrderComponents/formHOC";
import CustomLink from "../CustomLink/CustomLink";

import { default as login } from "../AFunctions/sendingUserDataToTheServer";

function LF({ state, handler, handlerOnSubmit, errors, inputRef, submited }) {
    return (
        <div className="LoginForm">
            <Title title="Login" />
            <form>
                <ul>
                    <li>
                        <UsernameField
                            inputValue={state.username}
                            inputId="Username"
                            name="username"
                            handler={handler}
                            inputRef={inputRef}
                            submited={submited}
                        />
                    </li>
                    <li>
                        <PasswordField
                            inputValue={state.password}
                            inputId="Password"
                            name="password"
                            handler={handler}
                            submited={submited}
                        />
                    </li>
                    <li>
                        <button onClick={handlerOnSubmit}>Login</button>
                    </li>
                    <li>
                        <CustomLink path={`/registration`} name="Register" />
                    </li>
                    <li>
                        <ErrMessage err={errors} />
                    </li>
                </ul>
            </form>
        </div>
    );
}

const LoginForm = formHOC(LF, login, "/login", "/");

export default LoginForm;
