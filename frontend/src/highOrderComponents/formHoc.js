import {useRef, useState } from "react";

import useRedirect from "../CustomHooks/useRedirect";

import onFocus from "../AFunctions/onFocus";

function formHOC(Form, action, route, initialRoute) {

    return function (props) {
        const [ errors, setErrors ] = useState([]);
        const inputRef = useRef(null);

        const { submitValue, setSubmit } = useRedirect(errors, initialRoute);
   

        const handlerOnSubmit = async (e) => {
            e.preventDefault();
            setErrors( await action(props.state, route) );
            setSubmit({ value: true });
            onFocus(inputRef.current);
        };
        return (
            <Form
                submited={submitValue}
                inputRef={inputRef}
                errors={errors}
                handlerOnSubmit={handlerOnSubmit}
                {...props}
            />
        );
    };
}

export default formHOC;
