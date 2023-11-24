import React from 'react'

import { default as verification } from './sendingUserDataToTheServer'
import { default as register } from './sendingUserDataToTheServer'

function registration(userData) {
  return new Promise(async (resolve) => {
    const verifcationInfo = await verification({ ...userData }, '/verification')
    if(verifcationInfo.err === false){
       resolve(await register({ ...userData }, '/registration'))
    }
       resolve({ err: true, errName: 'registrationErr' }) 
  })
}

export default registration