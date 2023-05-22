export const api = {
  // server
  baseurl: import.meta.env.VITE_SERVER_URL,

  // sign
  login: import.meta.env.VITE_ENDPOINT_LOGIN,
  register: import.meta.env.VITE_ENDPOINT_REGISTER,

  // product
  getproducts: import.meta.env.VITE_ENDPOINT_GET_PRODUCTS,
  getproduct: import.meta.env.VITE_ENDPOINT_GET_PRODUCT,
  createproduct: import.meta.env.VITE_ENDPOINT_CREATE_PRODUCT,
  updateproduct: import.meta.env.VITE_ENDPOINT_UPDATE_PRODUCT,
  deleteproduct: import.meta.env.VITE_ENDPOINT_DELETE_PRODUCT,

  // order
  getorders: import.meta.env.VITE_ENDPOINT_GET_ORDERS,
  buyorder: import.meta.env.VITE_ENDPOINT_BUY,

  // password
  forgotpassword: import.meta.env.VITE_ENDPOINT_FORGOT_PASSWORD,
  resetpassword: import.meta.env.VITE_ENDPOINT_RESET_PASSWORD,

  // store
  getstore: import.meta.env.VITE_ENDPOINT_GET_STORE,
  createstore: import.meta.env.VITE_ENDPOINT_CREATE_STORE,

  // user
  getuser: import.meta.env.VITE_ENDPOINT_GET_USER,
  updateuser: import.meta.env.VITE_ENDPOINT_UPDATE_USER,
};