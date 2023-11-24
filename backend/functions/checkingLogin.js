import React from 'react'

function checkingLogin(users) {
   if(users.length > 0){
      return JSON.stringify({ err: false, errName: '' }) 
   }
      return JSON.stringify({ err: true, errName: 'loginErr' })
}

export default checkingLogin