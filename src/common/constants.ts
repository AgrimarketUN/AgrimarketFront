export const api = {
  // server
  baseUrl: import.meta.env.VITE_SERVER_URL,

  // sign
  login: import.meta.env.VITE_ENDPOINT_LOGIN,
  register: import.meta.env.VITE_ENDPOINT_REGISTER,

  // product
  getProducts: import.meta.env.VITE_ENDPOINT_GET_PRODUCTS,
  getProduct: import.meta.env.VITE_ENDPOINT_GET_PRODUCT,
  createProduct: import.meta.env.VITE_ENDPOINT_CREATE_PRODUCT,
  updateProduct: import.meta.env.VITE_ENDPOINT_UPDATE_PRODUCT,
  deleteProduct: import.meta.env.VITE_ENDPOINT_DELETE_PRODUCT,

  // order
  getOrders: import.meta.env.VITE_ENDPOINT_GET_ORDERS,
  buyOrder: import.meta.env.VITE_ENDPOINT_BUY,

  // password
  forgotPassword: import.meta.env.VITE_ENDPOINT_FORGOT_PASSWORD,
  resetPassword: import.meta.env.VITE_ENDPOINT_RESET_PASSWORD,

  // store
  getStore: import.meta.env.VITE_ENDPOINT_GET_STORE,
  createStore: import.meta.env.VITE_ENDPOINT_CREATE_STORE,

  // user
  getUser: import.meta.env.VITE_ENDPOINT_GET_USER,
  updateUser: import.meta.env.VITE_ENDPOINT_UPDATE_USER,

  // shopping cart
  getShoppingCart: import.meta.env.VITE_ENDPOINT_GET_CART,
  addItem: import.meta.env.VITE_ENDPOINT_ADD_ITEM,
  deleteItem: import.meta.env.VITE_ENDPOINT_DELETE_ITEM,
  buyCart: import.meta.env.VITE_ENDPOINT_BUY_CART,
  updateItem: import.meta.env.VITE_ENDPOINT_UPDATE_ITEM,
};