import React, { useContext, useState } from "react";

import useRedirect from "../useRedirect";

import { ErrorContext } from "../AbstractForm/AbstractForm";
import { UserContext } from "../App";
import { LanguageContext } from "../App";

import getAuthorizedUser from "./getAuthorizedUser";
import objectToArray from "./objectToArray";

import { Link } from "react-router-dom";

import Title from "../Title";
import UsernameInput from "../UsernameInput";
import PasswordInput from "../PasswordInput";
import NameInput from "../NameInput";
import SurnameInput from "../SurnameInput";
import ErrMessage from "../ErrMessage";

function RegistrationForm({ state }) {
    const { t } = useContext(LanguageContext);
    const { errors } = useContext(ErrorContext);
    const {authorizedUser, setAuthorizedUser } = useContext(UserContext);

    const [submited, setSubmited] = useState({
        defaultValue: false,
        value: false,
    });

    useRedirect(authorizedUser, submited);

    if (submited.defaultValue === true) {
        setSubmited({ defaultValue: false, value: true });
    }

    async function handlerOnSubmit(e) {
        e.preventDefault(); 

        if (objectToArray(errors).length > 0) {
            setSubmited({ defaultValue: true, value: true });
            return;
        }

        const authorizedUser = await getAuthorizedUser({...state.formData});

        setSubmited({defaultValue: true, value: true});
        setAuthorizedUser(authorizedUser);
    }
    return (
        <form onSubmit={handlerOnSubmit}>
            <Title title={t('Registration')} />
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
                    <button type="submit">{t('Register')}</button>
                </li>
                <li>
                    <Link to='/login'></Link>
                </li>
                <li>
                    {authorizedUser.alreadyExist && (
                            <ErrMessage errors={["registrationErr"]}/>
                        )}
                </li>
            </ul>
        </form>
    );
}

export default RegistrationForm;
