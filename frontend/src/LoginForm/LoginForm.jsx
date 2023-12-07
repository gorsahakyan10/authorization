import React, {useState, useContext } from "react";

import useRedirect from "../useRedirect";

import { getAuthorizedUser } from "./service-functions";

import { LanguageContext, UserContext } from "../App";

import { Link } from "react-router-dom";

import ErrMessage from "../ErrMessage";
import UsernameInput from "../UsernameInput";
import PasswordInput from "../PasswordInput";
import Title from "../Title";

function LoginForm({ state }) {
    const { t } = useContext(LanguageContext)
    const { authorizedUser, setAuthorizedUser } = useContext(UserContext); 

    const [submited, setSubmited] = useState({
        defaultValue: false,
        value: false,
    });
    
    useRedirect(authorizedUser, submited);

    if(submited.defaultValue === true){
        setSubmited({ defaultValue: false, value: true });
        return
    }

    async function handlerOnSubmit(e) {
        e.preventDefault();
        const authorizedUser = await getAuthorizedUser(state.formData);
        setSubmited({ defaultValue: true, value: true });
        setAuthorizedUser(authorizedUser);
    }

    return (
        <form className="LoginForm" onSubmit={handlerOnSubmit}>
            <Title title={t('Login')} />
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
                    <button type="submit">{t('Login')}</button>
                </li>
                <li>
                    <Link to={'/registration'}><button>{t('Register')}</button></Link>
                </li>
                <li>
                    {authorizedUser.id === undefined &&
                     submited.value === true && (
                            <ErrMessage errors={["loginErr"]} />
                        )}
                </li>
            </ul>
        </form>
    );
}

export default LoginForm;
