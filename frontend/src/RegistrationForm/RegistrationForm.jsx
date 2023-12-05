import React, { useContext, useRef, useState } from "react";
import UsernameInput from "../UsernameInput";
import PasswordInput from "../PasswordInput";
import NameInput from "../NameInput";
import SurnameInput from "../SurnameInput";
import { UserContext } from "../App";
import ErrMessage from "../ErrMessage";
import getAuthorizedUser from './getAuthorizedUser';
import useRedirect from "./customHooks/useRedirect";
import { ErrorContext } from "../AbstractForm/AbstractForm";

function RegistrationForm({ state }) {
  const { errors } = useContext(ErrorContext);

    const [submited, setSubmited] = useState({
        defaultValue: false,
        value: false,
    });

    const { setAuthorizedUser } = useContext(UserContext);

    const userRef = useRef({});

    useRedirect(userRef.current, submited);

    if (submited.defaultValue === true) {
        setSubmited({ defaultValue: false, value: true });
    }

    async function handlerOnSubmit(e) {
        e.preventDefault();
        if(errors.length > 0) { return };
        const user = await getAuthorizedUser(state.formData);
        userRef.current = user;
        setSubmited({ defaultValue: true, value: true });
        setAuthorizedUser(user);
    }
    return (
        <form onSubmit={handlerOnSubmit}>
            <ul>
                <li>
                    <NameInput
                        onChange={state.handlerOnChange}
                        value={state.formData["name"]}
                        submited={submited}
                    />
                </li>
                <li>
                    <SurnameInput
                        onChange={state.handlerOnChange}
                        value={state.formData["surname"]}
                        submited={submited}
                    />
                </li>
                <li>
                    <UsernameInput
                        onChange={state.handlerOnChange}
                        value={state.formData["username"]}
                        submited={submited}
                    />
                </li>
                <li>
                    <PasswordInput
                        onChange={state.handlerOnChange}
                        value={state.formData["password"]}
                        submited={submited}
                    />
                </li>
                <li>
                    <button type="submit">Send</button>
                </li>
                <li>
                    {(userRef.current.id === undefined &&
                        submited.value === true) && 
                            <ErrMessage errors={["registrationErr"]} />
                        }
                </li>
            </ul>
        </form>
    );
}

export default RegistrationForm;
