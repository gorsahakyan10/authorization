import React, { useRef, useState } from "react";
import './RegistrationForm.css'

import ErrMessage from "../ErrMessage/ErrMessage";
import TextInput from "../TextInput/TextInput";
import UsernameField from "../UsernameField/UsernameField";
import PasswordField from "../PasswordField/PasswordField";
import Button from "../Button/Button";
import Title from "../Title/Title";

import registration from "../functions/registration";

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
            <Title title='Registration'/>
            <form onSubmit={ handlerOnSubmit }>
                <ul>
                    <li>
                       <TextInput inputValue={ state.name }
                                  inputId='Name' 
                                  name='name'
                                  handler={handler}
                                  inputRef={inputRef}
                       />
                    </li>
                    <li>
                       <TextInput inputValue={ state.surname }
                                  inputId='Surname' 
                                  name='surname'
                                  handler={handler}
                       />
                    </li>
                    <li>
                       <UsernameField inputValue={state.username}
                                      inputId='Username'
                                      name='username'
                                      handler={handler}               
                       />
                    </li>
                    <li>
                       <PasswordField inputValue={state.password} 
                                      inputId='Password'
                                      name='password'
                                      handler={handler}
                       />
                    </li>
                    <li>
                       <Button name='Send'/>
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
