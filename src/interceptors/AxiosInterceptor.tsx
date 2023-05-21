import { store } from '@/redux';
import { SnackBarUtils } from '@/utils';
import { getValidationError } from '@/utils/validationErrors';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useSelector } from 'react-redux';
export interface AxiosProps {}

const AxiosInterceptor = () => {
	axios.interceptors.request.use((request) => {
		const token = sessionStorage.getItem('token');
		//const token = store.getState().user.token;
		if (request.url?.includes('product' || 'store')){
			request.headers.Authorization = token ? `Bearer ${token}` : '';
			//console.log("token adjuntado a request headers:", request.headers.Authorization);
		}
		return request;
	});
	/*
	axios.interceptors.response.use(
		(response) => {
			console.log("response:", response.data);
			SnackBarUtils.success('Operación exitosa');
			return response;
		},
		(error) => {
			SnackBarUtils.error(getValidationError(error.code));
			console.log("error", getValidationError(error.code));
			return Promise.reject(error);
		}
	);
	*/
};

export default AxiosInterceptor;
