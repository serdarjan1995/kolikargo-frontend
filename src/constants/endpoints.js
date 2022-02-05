export const baseURL = "https://kolaykargo.herokuapp.com/api";
export const ENDPOINTS = {
  POST: {
    REGISTER: `${baseURL}/register/`,
    LOGIN: `${baseURL}/token/`,
    CHECKOUT: `${baseURL}/checkout/`,
    ADD_SERVICE: `${baseURL}/basket/add-service/`,
    USER_ADDRESSES: `${baseURL}/useraddresses/`,
  },
  GET: {
    SERVICES: `${baseURL}/services/`,
    SEARCH: `${baseURL}/search/`,
    BASKET: `${baseURL}/basket/`,
    USER_ADDRESSES: `${baseURL}/useraddresses/`,
    ORDERS: `${baseURL}/orders/`,
  },
};
