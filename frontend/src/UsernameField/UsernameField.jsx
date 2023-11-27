import React from "react";

import ErrMessage from "../ErrMessage/ErrMessage";

import checkingUsername from '../AFunctions/checkingUsername';

import inputHOC from "../highOrderComponents/inputHOC";

function UF({
    inputValue,
    inputId,
    name,
    handler,
    inputRef,
    submited,
    errors
}) {
    return (
        <>
            <label htmlFor={inputId}>{inputId}:</label>
            <input
                type="text"
                name={name}
                id={inputId}
                value={inputValue}
                onChange={handler}
                ref={inputRef}
            />
            {submited && <ErrMessage err={errors} />}
        </>
    );
}

const UsernameField = inputHOC(UF, checkingUsername);

export default UsernameField;
