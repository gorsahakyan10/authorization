import { default as login } from "../AFunctions/sendingUserDataToTheServer";
import registration from "../AFunctions/registration";
import onFocus from "../AFunctions/onFocus";
import { useRef, useState } from "react";


function formHOC(Form) {
    const route = Form.name === "LF" ? "/login" : "/registration";
    const action = Form.name === "LF" ? login : registration;

   return function(props){
        const [showErrors, setShowErrors] = useState({ value: false });
        const [errors, setErrors] = useState([]);
        const inputRef = useRef(null);

        const handlerOnSubmit = async (e) => {
            e.preventDefault();
            setErrors(await action(props.state, route));
            setShowErrors({ value: true });
            onFocus(inputRef.current);
        };
        return (
            <Form
                showErrors={showErrors}
                inputRef={inputRef}
                errors={errors}
                handlerOnSubmit={handlerOnSubmit}
                {...props}
            />
        );
    };
}

export default formHOC;
