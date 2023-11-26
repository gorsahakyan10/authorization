function checkingUsername(text) {
    const regExp = /[^\d\w_]/;
    const maxLength = 24;
    
    const errors = [];

    if(text.length > maxLength){
        errors.push('lengthErr')
    }

    if(text.match(regExp)){
        errors.push('usernameErr')
    }

    return errors
}

export default checkingUsername