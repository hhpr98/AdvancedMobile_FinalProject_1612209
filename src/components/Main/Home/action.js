import API from "../../../API/API";

export const getNewCourse = (limit, page) => {
    return fetch(API.GET_NEW_COURSE, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            limit: limit,
            page: page
        })
    })
};

export const getMyFavoriteCourse = (token, limit, page) => {
    return fetch(API.GET_MY_FAVORITE, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            limit: limit,
            page: page
        })
    })
};

export const getTopRateCourse = (limit, page) => {
    return fetch(API.GET_TOP_RATE, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            limit: limit,
            page: page
        })
    })
};

export const getTopSellCourse = (limit, page) => {
    return fetch(API.GET_TOP_SELL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            limit: limit,
            page: page
        })
    })
};