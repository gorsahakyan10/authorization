import React, { useState } from "react";
import formsInitialStates from "../js-object-data/formsInitialStates";


function ContainerForm({ Form }) {
    const [state, setState] = useState({ ...formsInitialStates[Form.name] });
    
    const handler = (e) => {
       setState({
          ...state,
          [e.target.name]: e.target.value
       })
    }

    const clearInputFields = (nameComonent) => {
       setState({ ...formsInitialStates[ nameComonent ] })
    }
    
    return (
        <div className="ContainerForm">
            <Form state={ { ...state } } handler={ handler } clearInputFields={ clearInputFields }/>
        </div>
    );
}

export default ContainerForm;
