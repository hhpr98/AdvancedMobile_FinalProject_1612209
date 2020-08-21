import API from "../../../API/API";


export const searchWithKeyword = (token, keyword) => {

    const sort = JSON.stringify({
        attribute: "price",
        rule: "ASC"
    });

    const opt = JSON.stringify({
        sort: sort,
        category: [],
        time: [],
        price: []
    });

    // console.log(opt);

    return fetch(API.SEARCH_V2, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            token: token,
            keyword: keyword,
            opt: opt,
            limit: 100,
            offset: 0
        })
    })
}

export const searchWithCourseId = (token, pathId) => {

    const sort = JSON.stringify({
        attribute: "price",
        rule: "ASC"
    });

    const opt = JSON.stringify({
        sort: sort,
        category: [pathId],
        time: [],
        price: []
    });

    // console.log(opt);

    return fetch(API.SEARCH_V2, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            token: token,
            keyword: "",
            opt: opt,
            limit: 100,
            offset: 0
        })
    })
}

export const getHistorySearch = (token) => {

    return fetch(API.HISTORY_SEARCH, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
}

export const deleteAnSearchHistory = (token, id) => {

    return fetch(`${API.DELETE_HISTORY_SEARCH}/{id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
}