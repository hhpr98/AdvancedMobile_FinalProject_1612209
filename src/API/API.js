import URL from './HOST';


const API = {
  // authentication
  LOGIN: `${URL}/user/login`,
  REGISTER: `${URL}/user/register`,
  SEND_ACTIVE_EMAIL: `${URL}/user/send-active-email`,

  // infor
  GET_INTRO_PAGE: `${URL}/user/intro-page`,

};

export default API;