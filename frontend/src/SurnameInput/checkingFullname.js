function checkingFullname(text) {
    const regExp = /[^a-zA-Z]/g;
    const maxLength = 24;

    const errors = [];

    if (text.length > maxLength) {
       errors.push('lengthErr');
    }
    if (text.match(regExp)) {
       errors.push('symbolErr'); 
    }

    if(text.length === 0) {
       errors.push('emptyErr')
    }

    return errors
}

export default checkingFullname