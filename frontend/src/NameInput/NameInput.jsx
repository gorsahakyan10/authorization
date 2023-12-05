import React from "react";

import ErrMessage from "../ErrMessage";

import inputHOC from "../highOrderComponents/inputHOC";

import checkingFullname from "./checkingFullname";

function NI({ handlerOnChange, errors, value, submited }) {
    return (
        <>
            <label htmlFor="Name">Name:</label>
            <input
                type="text"
                name="name"
                id="Name"
                value={value}
                onChange={handlerOnChange}
            />
            { submited.value && <ErrMessage errors={errors['NameInput']}/> }
        </>
    );
}

const NameInput = inputHOC(NI, checkingFullname, 'NameInput')

export default NameInput;
