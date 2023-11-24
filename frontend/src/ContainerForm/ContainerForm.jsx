import React, { useEffect, useState } from "react";

const formsInitialStates = {
    LoginForm: {
        username: "",
        password: "",
    },
    RegistrationForm: {
        name: "",
        surname: "",
        username: "",
        password: "",
    },
};

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
