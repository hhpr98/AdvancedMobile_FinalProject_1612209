import API from "../../../API/API";

export const getAllInstructor = () => {
    return fetch(API.GET_ALL_INSTRUCTOR, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
}