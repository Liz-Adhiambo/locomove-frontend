
function validate(data: string, type: string) {
    if  (type === 'email') {
        const re = /\S+@\S+\.\S+/;
        return re.test(data);
    }

    if (type === 'password') {
        return true;
    }

    if (type === 'username') {
        return true;
    }

    if (type === 'phone') {
        return true;
    }

    return false;
}

function validateSignUp(data: any) {
    if (data.email === '' || data.password === '' || data.username === '' || data.phone === '') {
        return false;
    }

    if (!validate(data.email, 'email')) {
        return false;
    }

    if (!validate(data.password, 'password')) {
        return false;
    }

    if (!validate(data.username, 'username')) {
        return false;
    }

    if (!validate(data.phone, 'phone')) {
        return false;
    }

    if (data.password !== data.cpassword) {
        return false;
    }

    return true;
}

function validateLogin(data: any) {
    if (data.username === '' || data.password === '') {
        return false;
    }

    if (!validate(data.username, 'username')) {
        return false;
    }

    if (!validate(data.password, 'password')) {
        return false;
    }

    return true;
}

export { validate, validateSignUp, validateLogin };
