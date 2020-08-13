import API from "../../API/API";

export const checkOwnerCourse = (token, courseId) => {
    return fetch(`${API.CHECK_JOIN_COURSE}/${courseId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
};