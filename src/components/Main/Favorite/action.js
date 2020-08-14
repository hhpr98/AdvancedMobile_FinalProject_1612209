import API from "../../../API/API";

export const getMyFavoriteCourse = (token) => {
    return fetch(API.GET_MY_FAVORITE, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
};