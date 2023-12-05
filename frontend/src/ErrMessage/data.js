export const errUI = {
    registrationErr: (
       <>
         <p>A user with the same username already exists.</p>
         <p>Please enter a different username.</p>
       </> 
    ),
    loginErr: (
       <>
         <p>Wrong username or password.</p>
         <p>Please try again.</p>
       </> 
    ),
    lengthErr: <p>Maximum number of characters 24.</p>,
    symbolErr: <p>This field must contain only Latin letters.</p>,
    usernameErr: <p>This field must contain only Latin letters, numbers and underscores.</p>,
    minLengthErr: <p>Password must contain at least 8 characters*.</p>,
    passwordErr: <p>The password must not contain spaces*.</p>,
    emptyErr: <p>You left this field blank. Please fill it out.</p>
 }