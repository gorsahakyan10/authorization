import React, { useContext } from "react";
import { ErrorContext } from "../AbstractForm/AbstractForm";

function inputHOC(InputComponent, checkingFunc, name) {
    return function (props) {
        const { errors, setErrors } = useContext(ErrorContext);

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
