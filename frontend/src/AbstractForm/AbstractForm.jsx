import React, { useState } from 'react'
import useFormData from './customHooks/useFormData'
import useErrors from './customHooks/useErrors';

export const ErrorContext = React.createContext('default');

function AbstractForm({Form, initialState}) {
  const { formData, handlerOnChange } = useFormData(initialState);
  const { errors, setErrors } = useErrors();
  console.log(AbstractForm.name)



  return (
      <>
         <ErrorContext.Provider value={{errors, setErrors}}>
            <Form state={{formData, handlerOnChange}}/>
         </ErrorContext.Provider>
      </>
  )
}

export default AbstractForm