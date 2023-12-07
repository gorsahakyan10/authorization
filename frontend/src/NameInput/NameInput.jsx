import React, { useContext } from "react";

import ErrMessage from "../ErrMessage";

import inputHOC from "../highOrderComponents/inputHOC";

import checkingFullname from "./checkingFullname";
import { LanguageContext } from "../App";

function NI({ handlerOnChange, errors, value, submited }) {
    const { t } = useContext(LanguageContext);
    return (
        <>
            <label htmlFor="Name">{t('Name')}:</label>
            <input
                type="text"
                name="name"
                id="Name"
                value={value}
                onChange={handlerOnChange}
            />
            { submited.value && <ErrMessage errors={errors['NameInput']}/> }
        </>
    );
}

const NameInput = inputHOC(NI, checkingFullname, 'NameInput')

export default NameInput;
