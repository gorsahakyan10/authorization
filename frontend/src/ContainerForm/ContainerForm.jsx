import React, { useState } from "react";
import formsInitialStates from "../js-object-data/formsInitialStates";


function ContainerForm({ Form }) {
    console.log(Form.name)
    const [state, setState] = useState({ ...formsInitialStates[Form.name] });

    const handler = (e) => {
       setState(previousState => ({
        ...previousState,
        [e.target.name]: e.target.value
     }))
    }
    
    return (
        <div className="ContainerForm">
            <Form state={state} handler={ handler }/>
        </div>
    );
}

export default ContainerForm;
