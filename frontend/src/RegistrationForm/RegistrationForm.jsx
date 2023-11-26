import React, { useRef, useState } from "react";
import "./RegistrationForm.css";

import ErrMessage from "../ErrMessage/ErrMessage";
import TextInput from "../TextInput/TextInput";
import UsernameField from "../UsernameField/UsernameField";
import PasswordField from "../PasswordField/PasswordField";
import Button from "../Button/Button";
import Title from "../Title/Title";

import formHoc from "../highOrderComponents/formHoc";

function RF({
    state,
    handler,
    handlerOnSubmit,
    errors,
    inputRef,
    showErrors,
}) {
    // const [showErrors, setShowErrors] = useState({ value: false });
    // const [errors, setErrors] = useState([]);
    // const inputRef = useRef(null);

    // const handlerOnSubmit = async (e) => {
    //     e.preventDefault();
    //     setErrors(await registration(state));
    //     setShowErrors({ value: true });
    //     onFocus(inputRef.current)
    // };

    console.log(state)
    return (
        <div className="RegistrationForm">
            <Title title="Registration" />
            <form onSubmit={handlerOnSubmit}>
                <ul>
                    <li>
                        <TextInput
                            inputValue={state.name || ''}
                            inputId="Name"
                            name="name"
                            handler={handler}
                            inputRef={inputRef}
                            showErrors={showErrors.value}
                        />
                    </li>
                    <li>
                        <TextInput
                            inputValue={state.surname || ''}
                            inputId="Surname"
                            name="surname"
                            handler={handler}
                            showErrors={showErrors.value}
                        />
                    </li>
                    <li>
                        <UsernameField
                            inputValue={state.username || ''}
                            inputId="Username"
                            name="username"
                            handler={handler}
                            showErrors={showErrors.value}
                        />
                    </li>
                    <li>
                        <PasswordField
                            inputValue={state.password || ''}
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

const RegistrationForm = formHoc(RF);

export default RegistrationForm;
