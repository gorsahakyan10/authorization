import React, { useState } from 'react'
import useFormData from './customHooks/useFormData'
import useErrors from './customHooks/useErrors';
import Header from '../Header.jsx/Header';

export const ErrorContext = React.createContext('default');

function AbstractForm({Form, initialState}) {
  const { formData, handlerOnChange } = useFormData(initialState);
  const { errors, setErrors } = useErrors();

  return (
      <>
         <Header/>
         <ErrorContext.Provider value={{errors, setErrors}}>
            <Form state={{formData, handlerOnChange}}/>
         </ErrorContext.Provider>
      </>
  )
}

export default AbstractForm