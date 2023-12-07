import { useState } from "react";


function useFormData(initialState) {
    const [ formData, setFormData ] = useState(initialState);
    console.log(formData, '<<<<<<<666') 
    function handlerOnChange(e){
      const { name, value } = e.target;
     
         setFormData((prevState) => {
           return {
             ...prevState,
             [name]: value
           }
       })
    } 



    return { formData, handlerOnChange }
}

export default useFormData