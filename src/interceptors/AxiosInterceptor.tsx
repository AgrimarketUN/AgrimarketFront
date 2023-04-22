import { SnackBarUtils } from '@/utils';
import { getValidationError } from '@/utils/validationErrors';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
export interface AxiosProps {}

const AxiosInterceptor = () => {

	axios.interceptors.request.use((request) => {
		const token = localStorage.getItem('token');
		if (request.url?.includes('publico')){
			request.headers.Authorization = token ? `Bearer ${token}` : '';
		}
		return request;
	});

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
};

export default AxiosInterceptor;
