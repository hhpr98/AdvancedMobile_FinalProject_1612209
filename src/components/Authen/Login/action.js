import API from "../../../API/API";

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