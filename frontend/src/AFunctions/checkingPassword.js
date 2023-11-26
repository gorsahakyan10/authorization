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

     return errors
}

export default checkingPassword