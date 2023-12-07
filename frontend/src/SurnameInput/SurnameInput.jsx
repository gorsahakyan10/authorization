import React, { useContext } from "react";

import ErrMessage from "../ErrMessage";
import inputHOC from "../highOrderComponents/inputHOC";
import checkingFullname from "./checkingFullname";
import { LanguageContext } from "../App";

function SI({ handlerOnChange, errors, value, submited }) {
    const { t } = useContext(LanguageContext);
    return (
        <>
            <label htmlFor="Surname">{t('Surname')}:</label>
            <input
                type="text"
                name="surname"
                id="Surname"
                value={value}
                onChange={handlerOnChange}
            />
            {submited.value && <ErrMessage errors={errors["SurnameInput"]} />}
        </>
    );
}

const SurnameInput = inputHOC(SI, checkingFullname, 'SurnameInput')

export default SurnameInput;
