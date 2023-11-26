import React, { useEffect, useState } from "react";

import ErrMessage from "../ErrMessage/ErrMessage";

import checkingPassword from "../AFunctions/checkingPassword";

function PasswordField({ inputValue, inputId, name, handler, showErrors }) {
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const errors = Array.from(new Set(checkingPassword(inputValue)));
        setErrors(errors);
    }, [inputValue, setErrors]);

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

export default PasswordField;
