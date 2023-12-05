import React from "react";

import ErrMessage from "../ErrMessage";
import inputHOC from "../highOrderComponents/inputHOC";
import checkingFullname from "./checkingFullname";

function SI({ handlerOnChange, errors, value, submited }) {
    return (
        <>
            <label htmlFor="Surname">Surname:</label>
            <input
                type="text"
                name="surname"
                id="Surname"
                value={value}
                onChange={handlerOnChange}
            />
            {submited.value && <ErrMessage errors={errors["SurnameInput"]} />}
        </>
    );
}

const SurnameInput = inputHOC(SI, checkingFullname, 'SurnameInput')

export default SurnameInput;
