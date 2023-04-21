import * as yup from 'yup';

const resetPasswordValidationSchema = yup.object({
  password: yup
    .string()
    .required('Ingresa una nueva contraseña')
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      'La contraseña debe contener al menos una letra mayúscula, una minúscula y un número'
    ),
  confirmPassword: yup
    .string()
    .required('Confirma la contraseña')
    .oneOf([yup.ref('password')], 'Las contraseñas no coinciden')
    .optional(),
});

export default resetPasswordValidationSchema;