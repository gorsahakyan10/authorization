import React from 'react'

function checkingRegistration(users) {
   if(users.length > 0){
     return JSON.stringify(['verificationErr'])
   }
     return JSON.stringify([])
}    

export default checkingRegistration