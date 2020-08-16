import API from "../../API/API";

export const getLogin = (email, password) => {
    return fetch(API.LOGIN, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
};

export const getRegister = (username, email, password, phone) => {
    return fetch(API.REGISTER, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
            phone: phone
        })
    })
};

export const sendActivateEmail = (email) => {
    return fetch(API.SEND_ACTIVE_EMAIL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
        })
    })
};

export const acctivateEmail = (email, token) => {
    return fetch(API.ACTIVE_EMAIL, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            token: token,
        })
    })
};