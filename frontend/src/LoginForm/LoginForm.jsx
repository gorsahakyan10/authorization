import React, { useEffect, useRef, useState, useContext } from "react";
import useRedirect from "./customHooks/useRedirect";

import { getAuthorizedUser } from "./service-functions";

import { UserContext } from "../App";

import ErrMessage from "../ErrMessage";
import UsernameInput from "../UsernameInput";
import PasswordInput from "../PasswordInput";
import Title from "../Title";

function LoginForm({ state }) {
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
        const user = await getAuthorizedUser(state.formData);
        userRef.current = user;
        setSubmited({ defaultValue: true, value: true });
        setAuthorizedUser(user);
    }

    return (
        <form className="LoginForm" onSubmit={handlerOnSubmit}>
            <Title title="Login" />
            <ul>
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
                    {userRef.current.id === undefined &&
                        submited.value === true && (
                            <ErrMessage errors={["loginErr"]} />
                        )}
                </li>
            </ul>
        </form>
    );
}

export default LoginForm;
