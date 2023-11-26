import React from "react";

import ErrMessage from "../ErrMessage/ErrMessage";
import inputHOC from "../highOrderComponents/inputHOC";

function PF({ 
    inputValue, 
    inputId, 
    name, 
    handler,
    showErrors,
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
            {showErrors && <ErrMessage err={errors} />}
        </>
    );
}

const PasswordField = inputHOC(PF)

export default PasswordField;
