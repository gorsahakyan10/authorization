import React, { useContext, useEffect } from "react";
import { ErrorContext } from "../AbstractForm/AbstractForm";

function inputHOC(InputComponent, checkingFunc, name) {
    return function (props) {
        const { errors, setErrors } = useContext(ErrorContext);

        useEffect(() => setErrors(checkingFunc(props.value),name), [])

        function handlerOnChange(e) {
            const { value } = e.target;
            const errors = checkingFunc(value);
            setErrors(errors, name);
            props.onChange(e);
        }

        return (
            <InputComponent
                handlerOnChange={handlerOnChange}
                errors={errors}
                {...props}
            />
        );
    };
}

export default inputHOC;
