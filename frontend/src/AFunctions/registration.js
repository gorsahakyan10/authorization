import { default as verification } from './sendingUserDataToTheServer'
import { default as register } from './sendingUserDataToTheServer'

function registration(userData, route) {
  return new Promise(async (resolve) => {
    const verifcationInfo = await verification({ ...userData }, '/verification')
    if(verifcationInfo.err === false){
       resolve(await register({ ...userData }, route))
    }
       resolve(['registrationErr']) 
  })
}

export default registration