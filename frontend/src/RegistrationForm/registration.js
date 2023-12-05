import { default as verification } from '../sendingUserDataToTheServer'
import { default as register } from '../sendingUserDataToTheServer'

function registration(userData) {
  const verifcationPath = '/verification';
  const registrationPath = '/registration'
  return new Promise(async (resolve) => {
    const errors = await verification({ ...userData }, verifcationPath)
    console.log(errors,999)
    if(errors.length === 0){
       resolve(await register({ ...userData }, registrationPath))
    }
       resolve(['registrationErr']) 
  })
}

export default registration