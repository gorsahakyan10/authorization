import React from "react";

import ErrMessage from "../ErrMessage";
import inputHOC from "../highOrderComponents/inputHOC";
import checkingUsername from "./checkingUsername";
;

function UI({ handlerOnChange, errors, value, submited }) {
    return (
        <>
            <label htmlFor="Username">Username:</label>
            <input
                type="text"
                name="username"
                id="Username"
                value={value}
                onInput={handlerOnChange}
            />
            {submited.value && <ErrMessage errors={errors['UsernameInput']}/> }
        </>
    );
}

const UsernameInput = inputHOC(UI, checkingUsername, 'UsernameInput')

export default UsernameInput;
