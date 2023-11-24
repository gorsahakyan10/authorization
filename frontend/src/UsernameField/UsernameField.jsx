import React from 'react'
import ErrMessage from '../ErrMessage/ErrMessage';

function UsernameField({ inputValue,
                         inputId, 
                         name, 
                         handler, 
                         inputRef }) {
  let err = { err: false, errName: '' };

  const regExp = /[^\d\w_]/;
  const maxLength = 24;
   
  if(err.length > maxLength){
    err = { err: true, errName: 'lengthErr' }
  }

  if(inputValue.match(regExp)){
     err = { err: true, errName: 'usernameErr' }
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
            ref={inputRef}
        />
        <ErrMessage err={err} />
    </li>
  )
}

export default UsernameField