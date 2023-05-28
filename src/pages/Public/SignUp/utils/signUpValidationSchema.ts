import { object, string } from "yup";

export const signUpValidationSchema = object().shape({
  firstname: string().required("Nombre requerido"),
  lastname: string().required("Apellido requerido"),
  email: string()
    .required("Correo requerido")
    .email("Correo electrónico inválido"),
  password: string().required("Contraseña requerido").min(8, "La contraseña debe contener mínimo 8 caracteres"),
  address: string().required("Dirección requerido"),
  phone: string()
    .required("Telefono requerido")
    .matches(/^\d{10}$/, 'El número de teléfono debe tener 10 dígitos'),
});
