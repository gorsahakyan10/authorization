import {default as authorization} from "../sendingUserDataToTheServer";

export async function getAuthorizedUser(userData){
   const loginPath = '/login';
   const user = await authorization({...userData}, loginPath);
   return user     
}
