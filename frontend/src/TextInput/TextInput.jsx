import React from "react";
import ErrMessage from "../ErrMessage/ErrMessage";

function TextInput({ inputValue, 
                     inputId, 
                     name, 
                     handler, 
                     inputRef }) {
    let err = { err: false, errName: "" };
    const regExp = /[^a-zA-Z]/g;

    const maxLength = 24;

    if (inputValue.length > maxLength) {
        err = { err: true, errName: "lengthErr" };
    }
    if (inputValue.match(regExp)) {
        err = { err: true, errName: "symbolErr" };
    }

    return (
        <li>
            <label htmlFor={inputId}>{inputId}:</label>
            <input
                type="text"
                name={name}
                id={inputId}
                value={inputValue}
                onChange={handler}
                ref={inputRef}
            />
            <ErrMessage err={err} />
        </li>
    );
}

export default TextInput;
