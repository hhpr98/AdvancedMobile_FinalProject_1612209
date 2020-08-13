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

export const getCourseWithLesson = (token, courseId) => {
    return fetch(`${API.GET_COURSE_DETAIL_WITH_LESSON}/${courseId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
};

export const getCourseWithLessonUserId = (token, courseId, userId) => {
    return fetch(`${API.GET_COURSE_DETAIL_WITH_USEID}/${courseId}/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
};

