import React, { useEffect, useState } from 'react'

function inputHOC(Input, checkingFunc) {

  return function(props) {
    const [ errors, setErrors ] = useState([]); 

    useEffect(() => {
      const errors = checkingFunc(props.inputValue); 
      setErrors(errors);
    }, [ props.inputValue ]);

    return <Input errors={errors} { ...props }/>
  }
}

export default inputHOC