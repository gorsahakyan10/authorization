import React from 'react'

function checkingRegistration(users) {
   if(users.length > 0){
     return JSON.stringify({ err: true, errName: 'registrationErr' })
   }
     return JSON.stringify({ err: false, errName: '' })
}    

export default checkingRegistration