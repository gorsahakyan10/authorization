import React from "react";

import ErrMessage from "../ErrMessage/ErrMessage";

import checkingPassword from '../AFunctions/checkingPassword';

import inputHOC from "../highOrderComponents/inputHOC";

function PF({ 
    inputValue, 
    inputId, 
    name, 
    handler,
    submited,
    errors 
    }){
    return (
        <>
            <label htmlFor={inputId}>{inputId}:</label>
            <input
                type="text"
                name={name}
                id={inputId}
                value={inputValue}
                onChange={handler}
            />
            {submited && <ErrMessage err={errors} />}
        </>
    );
}

const PasswordField = inputHOC(PF, checkingPassword)

export default PasswordField;
