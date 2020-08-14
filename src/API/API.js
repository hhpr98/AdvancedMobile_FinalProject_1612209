import URL from './HOST';


const API = {
  // authentication
  LOGIN: `${URL}/user/login`,
  REGISTER: `${URL}/user/register`,
  SEND_ACTIVE_EMAIL: `${URL}/user/send-active-email`,

  // user

  // infor
  GET_INTRO_PAGE: `${URL}/user/intro-page`,

  // course
  // mới nhất
  GET_NEW_COURSE: `${URL}/course/top-new`,
  // Yêu thích
  GET_MY_FAVORITE: `${URL}/user/get-favorite-courses`,
  // rate cao nhất
  GET_TOP_RATE: `${URL}/course/top-rate`,
  // mua nhiều nhất
  GET_TOP_SELL: `${URL}/course/top-sell`,
  // check xem đã mua/tham gia khóa học chưa?
  CHECK_JOIN_COURSE: `${URL}/user/check-own-course`, // /courseId
  // lấy thông tin khóa học với bài học
  GET_COURSE_DETAIL_WITH_LESSON: `${URL}/course/detail-with-lesson`, // /courseId
  // lấy thông tin khóa học với bài học + user
  GET_COURSE_DETAIL_WITH_USEID: `${URL}/course/get-course-detail`, // /courseId/userId
  // người dùng like khóa học
  USER_LIKE_COURSE: `${URL}/user/like-course`,

  // lesson
  // thông tin bài học
  GET_LESSON_DETAIL: `${URL}/lesson/detail`, // /courseId/lessonId
  // thông tin video bài học 
  GET_LESSON_VIDEO: `${URL}/lesson/video`, // /courseId/lessonId

  // payment
  // đăng kí khóa học
  GET_FREE_COURSE: `${URL}/payment/get-free-courses`

};

export default API;