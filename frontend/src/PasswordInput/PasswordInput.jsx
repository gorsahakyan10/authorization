import React from "react";

import ErrMessage from "../ErrMessage";
import inputHOC from "../highOrderComponents/inputHOC";
import checkingPassword from "./checkingPassword";

function PI({ handlerOnChange, errors, value, submited }) {  
    return (
        <>
            <label htmlFor="Password">Password:</label>
            <input
                type="password"
                name="password"
                id="Password"
                value={value}
                onChange={handlerOnChange}
            />
            {submited.value && <ErrMessage errors={errors['PasswordInput']}/> }
        </>
    );
}

const PasswordInput = inputHOC(PI, checkingPassword, 'PasswordInput')

export default PasswordInput;
