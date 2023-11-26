import React from 'react'

function checkingLogin(users) {
   if(users.length > 0){
      return JSON.stringify([]) 
   }
      return JSON.stringify(['loginErr'])
}

export default checkingLogin