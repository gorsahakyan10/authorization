import React from 'react'

function objectToArray(obj) {
   const array = [];
   const multyArray = [ ...Object.values({...obj})]   
   
   for(let i = 0; i < multyArray.length; i++){
      array.push(...multyArray[i])
   }

   return array
}

export default objectToArray