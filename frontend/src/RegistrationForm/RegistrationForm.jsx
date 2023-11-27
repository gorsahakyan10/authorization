import React from "react";
import "./RegistrationForm.css";

import ErrMessage from "../ErrMessage/ErrMessage";
import TextInput from "../TextInput/TextInput";
import UsernameField from "../UsernameField/UsernameField";
import PasswordField from "../PasswordField/PasswordField";
import Title from "../Title/Title";

import registration from "../AFunctions/registration";

import formHOC from "../highOrderComponents/formHOC";

function RF({ state, handler, handlerOnSubmit, errors, inputRef, submited }) {
    return (
        <div className="RegistrationForm">
            <Title title="Registration" />
            <form onSubmit={handlerOnSubmit}>
                <ul>
                    <li>
                        <TextInput
                            inputValue={state.name}
                            inputId="Name"
                            name="name"
                            handler={handler}
                            inputRef={inputRef}
                            submited={submited}
                        />
                    </li>
                    <li>
                        <TextInput
                            inputValue={state.surname}
                            inputId="Surname"
                            name="surname"
                            handler={handler}
                            submited={submited}
                        />
                    </li>
                    <li>
                        <UsernameField
                            inputValue={state.username}
                            inputId="Username"
                            name="username"
                            handler={handler}
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
                        <button onClick={handlerOnSubmit}>Registration</button>
                    </li>
                    <li>
                        <ErrMessage err={errors} />
                    </li>
                </ul>
            </form>
        </div>
    );
}

const RegistrationForm = formHOC(
    RF,
    registration,
    "/registration",
    "/registration"
);

export default RegistrationForm;
