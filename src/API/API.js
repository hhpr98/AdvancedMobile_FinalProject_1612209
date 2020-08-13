import URL from './HOST';


const API = {
  // authentication
  LOGIN: `${URL}/user/login`,
  REGISTER: `${URL}/user/register`,
  SEND_ACTIVE_EMAIL: `${URL}/user/send-active-email`,

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
  CHECK_JOIN_COURSE: `${URL}/user/check-own-course`,
};

export default API;