import React, { useEffect, useState } from 'react'
import checkingPassword from '../AFunctions/checkingPassword';
import checkingUsername from '../AFunctions/checkingUsername';
import checkingFullname from '../AFunctions/checkingFullname';

function inputHOC(Input) {
    let checkingField;

    switch(Input.name){
       case 'UF': 
          checkingField = checkingUsername;
          break;
       case 'PF': 
          checkingField = checkingPassword;
          break;
       default: 
          checkingField = checkingFullname;
    }
    
  return function(props) {
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const errors = Array.from(new Set(checkingField(props.inputValue)));
        setErrors(errors);
    }, [props.inputValue, props.setErrors]);

    return <Input errors={errors} { ...props }/>
  }
}

export default inputHOC