import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router";

function useRedirect(errors, initialRoute) {

   const [submit, setSubmit] = useState({ value: false }); 
   const navigate = useNavigate();

   useEffect(() => {
    if(errors.length > 0 && submit.value === true) {
        navigate(initialRoute)
     }
     
    if(errors.length === 0 && submit.value === true) {
       navigate('/user') 
    }
}, [ errors.length, submit.value, navigate, initialRoute ])  
     
   const output = {
      submitValue : submit.value, 
      setSubmit: setSubmit
   };
   
   return output
}

export default useRedirect