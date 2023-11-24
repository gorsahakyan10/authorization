import React from 'react'
import ErrMessage from '../ErrMessage/ErrMessage';

function PasswordField({inputValue, 
                        inputId, 
                        name, 
                        handler}) {
  let err = { err: false, errName: '' };
  
  const minLength = 8;
  const regExp = /[\s]/gi;

  if(inputValue.match(regExp)){
     err = { err: true, errName: 'passwordErr' }
  }

  if(inputValue !== '' && inputValue.length < minLength){
     err = { err: true, errName: 'minLengthErr' }
  }
  return (
    <li>
        <label htmlFor={inputId}>{inputId}:</label>
        <input
            type="text"
            name={name}
            id={inputId}
            value={inputValue}
            onChange={handler}
        />
        <ErrMessage err={err} />
    </li>
  )
}

export default PasswordField