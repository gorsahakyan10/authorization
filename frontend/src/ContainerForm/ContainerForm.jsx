import React, { useState } from "react";

const ContainerForm = ({ Form }) => {
    const [state, setState] = useState({name: '', surname:'', username:'', password: ''});

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
