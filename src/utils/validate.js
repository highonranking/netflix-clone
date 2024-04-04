export const checkValidateData = (email, password) => {
    const isEmailVaild = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(!isEmailVaild && !isPasswordValid) return "❌ Email id and Password are not valid!";
    if(!isEmailVaild) return "❌ Email id is not valid!";
    if(!isPasswordValid) return "❌ Password is not valid! Password should contain atleast 8 characters, lowercase, uppercase, numbers and at least one special character (such as !, @, #, $, %, etc.)";

    return null;
};