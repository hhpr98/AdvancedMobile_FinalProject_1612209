import API from "../../API/API";

export const getInformation = (token) => {
    return fetch(API.GET_INFORMATION, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
}

export const updateInformation = (token, name, avatar, phone) => {
    return fetch(API.UPDATE_INFORMATION, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            name: name,
            avatar: avatar,
            phone: phone
        })
    })
}