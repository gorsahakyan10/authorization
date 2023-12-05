import {default as authorization} from "../sendingUserDataToTheServer";

export async function getAuthorizedUser(userData){
   const loginPath = '/login';
   const errors = await authorization({...userData}, loginPath);
   return errors     
}
