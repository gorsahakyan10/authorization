function checkingPassword(text) {
    const minLength = 8;
    const regExp = /[\s]/gi;

    const errors = [];

    if(text.match(regExp)){
       errors.push('passwordErr')
    }
    if(text.length < minLength){
       errors.push('minLengthErr');
    }

    if(text.length === 0) {
      errors.push('emptyErr')
    }

     return errors
}

export default checkingPassword