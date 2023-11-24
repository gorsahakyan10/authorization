import React, { useRef, useState } from "react";
import './RegistrationForm.css'
import ErrMessage from "../ErrMessage/ErrMessage";
import registration from "../functions/registration";
import TextInput from "../TextInput/TextInput";
import UsernameField from "../UsernameField/UsernameField";
import PasswordField from "../PasswordField/PasswordField";

function RegistrationForm({ state, handler, clearInputFields }) {
     const [ err, setErr ] = useState({ err: false, errName: '' })
     const inputRef = useRef(null);

    const handlerOnSubmit = async (e) => {
       e.preventDefault();
       setErr( await registration(state) );
       clearInputFields(RegistrationForm.name);
       inputRef.current.focus();
    }

    return (
        <div className="RegistrationForm">
            <div className="Title">
                <h2>Registration</h2>
            </div>
            <form onSubmit={ handlerOnSubmit }>
                <ul>
                    <TextInput inputValue={ state.name }
                               inputId='Name' 
                               name='name'
                               handler={handler}
                               inputRef={inputRef}
                    />
                    <TextInput inputValue={ state.surname }
                               inputId='Surname' 
                               name='surname'
                               handler={handler}
                    />
                    <UsernameField inputValue={state.username}
                                   inputId='Username'
                                   name='username'
                                   handler={handler}               
                    />
                    <PasswordField inputValue={state.password} 
                                   inputId='Password'
                                   name='password'
                                   handler={handler}
                    />
                    <li>
                        <button>Send</button>
                    </li>
                    <li>
                       <ErrMessage err={ err }/>
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default RegistrationForm;
