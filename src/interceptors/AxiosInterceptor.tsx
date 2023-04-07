import { SnackBarUtils } from '@/utils';
import { getValidationError } from '@/utils/validationErrors';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
export interface AxiosProps {}

const AxiosInterceptor = () => {
	const updateHeader = (request: AxiosRequestConfig) => {
		const token = localStorage.getItem('token');
		const newHeaders = {
			Authorization: token,
			'Content-Type': 'application/json',
		};
		request.headers = newHeaders;
		return request;
	};

	axios.interceptors.request.use((request) => {
		if (request.url?.includes('publico')) return request;
		return updateHeader(request);
	});

	axios.interceptors.response.use(
		(response) => {
			console.log(response);
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
