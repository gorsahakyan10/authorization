import React, { useState } from 'react'

function useErrors() {
    const [errors , setValidationErrors] = useState({});

    function setErrors(errors, name){
       setValidationErrors((prevState) => {
          return {
             ...prevState,
             [name]: errors
          }
       })
    }

    return {errors, setErrors}
}

export default useErrors