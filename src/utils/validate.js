export const checkValiData = (email, password) => {
    //return true or false depending on the regex
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);

    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);


    if(!isEmailValid) return "Email id is not valid"
    else if(!isPasswordValid) return "Password is not valid"

    return null;
}