import * as Yup from 'yup';

export const forgotPasswordValidationSchema = Yup.object({
  email: Yup.string()
    .email('Correo electrónico inválido')
    .required('Campo requerido'),
});
