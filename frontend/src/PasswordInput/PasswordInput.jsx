import React, { useContext } from "react";

import ErrMessage from "../ErrMessage";
import inputHOC from "../highOrderComponents/inputHOC";
import checkingPassword from "./checkingPassword";
import { LanguageContext } from "../App";

function PI({ handlerOnChange, errors, value, submited }) {
    const { t } = useContext(LanguageContext);
    return (
        <>
            <label htmlFor="Password">{t('Password')}:</label>
            <input
                type="password"
                name="password"
                id="Password"
                value={value}
                onChange={handlerOnChange}
            />
            {submited.value && <ErrMessage errors={errors['PasswordInput']}/> }
        </>
    );
}

const PasswordInput = inputHOC(PI, checkingPassword, 'PasswordInput')

export default PasswordInput;
