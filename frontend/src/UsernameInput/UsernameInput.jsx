import React, { useContext } from "react";

import { LanguageContext } from "../App";

import ErrMessage from "../ErrMessage";

import inputHOC from "../highOrderComponents/inputHOC";

import checkingUsername from "./checkingUsername";

function UI({ handlerOnChange, errors, value, submited }) {
    const { t } = useContext(LanguageContext);
    return (
        <>
            <label htmlFor="Username">{t('Username')}:</label>
            <input
                type="text"
                name="username"
                id="Username"
                value={value}
                onInput={handlerOnChange}
            />
            {submited.value && <ErrMessage errors={errors['UsernameInput']}/> }
        </>
    );
}

const UsernameInput = inputHOC(UI, checkingUsername, 'UsernameInput')

export default UsernameInput;
