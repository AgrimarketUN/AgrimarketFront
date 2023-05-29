import { SnackBarUtils } from "@/utils";
import { getValidationError } from "@/utils/validationErrors";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useSelector } from "react-redux";
export interface AxiosProps {}
import { store } from "@/redux";

const urlsCheck = ["cart", "order", "user", "store/create", "product/create", "product/update", "product/delete", "product/getprodsell"];

const AxiosInterceptor = () => {
  axios.interceptors.request.use((request) => {
    //console.log("url:", request.url);
    const token = sessionStorage.getItem("token");
    if (urlsCheck.some((url) => request.url?.includes(url))) {
      request.headers.Authorization = token ? `Bearer ${token}` : "";
			console.log("url:", request.url);
			console.log("headers: ", request.headers);
      //console.log("token adjuntado a request headers:", request.headers.Authorization);
    }
    return request;
  });

  /*axios.interceptors.response.use(
		(response) => {
			if(response.data.error) throw new Error(response.data.error);
			//SnackBarUtils.success('Operación exitosa');
			return response;
		},
		(error) => {
			//SnackBarUtils.error(getValidationError(error.code));
			console.log("error con interceptor", error);//getValidationError(error.code));
			return Promise.reject(error);
		}
	);*/
};

export default AxiosInterceptor;
