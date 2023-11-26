import React from "react";

import ErrMessage from "../ErrMessage/ErrMessage";

import inputHOC from "../highOrderComponents/inputHOC";

function UF({
    inputValue,
    inputId,
    name,
    handler,
    inputRef,
    showErrors,
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
            {showErrors && <ErrMessage err={errors} />}
        </>
    );
}

const UsernameField = inputHOC(UF);

export default UsernameField;
