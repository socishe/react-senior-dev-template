export const isEmail = (email: string): boolean => {
    const atIndex = email.indexOf("@");
    const dotIndex = email.lastIndexOf(".");
    if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= email.length) {
        return false;
    }
    return true;
};


export const isValidPassword = (password: string): boolean => {
    const lowerCase = /[a-z]/;
    const upperCase = /[A-Z]/;
    const number = /[0-9]/;
    const symbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (!password.match(lowerCase)) {
        return false;
    }
    if (!password.match(upperCase)) {
        return false;
    }
    if (!password.match(number)) {
        return false;
    }
    if (!password.match(symbol)) {
        return false;
    }
    if (password.length < 6) {
        return false;
    }
    return true;
};
