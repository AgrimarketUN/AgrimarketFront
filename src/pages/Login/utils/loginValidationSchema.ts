import {object, string} from 'yup';

export const loginValidationSchema = object().shape({
  email: string().email('Correo electrónico inválido').required('Campo requerido'),
  password: string().required('Campo requerido').min(8, 'Mínimo 8 caracteres'),
});