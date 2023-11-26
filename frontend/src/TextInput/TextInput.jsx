import React, { useEffect, useState } from "react";
import ErrMessage from "../ErrMessage/ErrMessage";
import checkingFullname from "../AFunctions/checkingFullname";
import inputHOC from "../highOrderComponents/inputHOC";

function TI({
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

const TextInput = inputHOC(TI);

export default TextInput;
