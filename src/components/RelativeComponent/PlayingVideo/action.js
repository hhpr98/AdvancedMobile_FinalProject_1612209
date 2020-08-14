import API from "../../../API/API";

export const getLessonDetail = (token, courseId, lessonId) => {
    return fetch(`${API.GET_LESSON_DETAIL}/${courseId}/${lessonId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
};

export const getLessonVideo = (token, courseId, lessonId) => {
    return fetch(`${API.GET_LESSON_VIDEO}/${courseId}/${lessonId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
};