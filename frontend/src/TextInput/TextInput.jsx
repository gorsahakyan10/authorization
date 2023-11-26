import React, { useEffect, useState } from "react";
import ErrMessage from "../ErrMessage/ErrMessage";
import checkingFullname from "../AFunctions/checkingFullname";

function TextInput({
    inputValue,
    inputId,
    name,
    handler,
    inputRef,
    showErrors,
}) {
    const [errors, setErrors] = useState([]);
    
    useEffect(() => {
        const errors = Array.from(new Set(checkingFullname(inputValue)));
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
                ref={inputRef}
            />
            {showErrors && <ErrMessage err={errors} />}
        </>
    );
}

export default TextInput;
