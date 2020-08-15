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

export const getFreeCourse = (token, courseId) => {
    return fetch(API.GET_FREE_COURSE, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            courseId: courseId
        })
    })
}

export const userLikeCourse = (token, courseId) => {
    return fetch(API.USER_LIKE_COURSE, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            courseId: courseId
        })
    })
}

export const getLikeCourseStatus = (token, courseId) => {
    return fetch(API.GET_LIKE_STATUS, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
}