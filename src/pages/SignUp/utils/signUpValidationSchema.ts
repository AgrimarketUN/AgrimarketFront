import { number, object, string } from "yup";

export const signUpValidationSchema = object().shape({
  name: string().required("Campo requerido"),
  lastName: string().required("Campo requerido"),
  email: string()
    .email("Correo electrónico inválido")
    .required("Campo requerido"),
  password: string().required("Campo requerido").min(8, "La contraseña debe contener mínimo 8 caracteres"),
  address: string().required("Campo requerido"),
  phone: string()
    .matches(/^\d{10}$/, 'El número de teléfono debe tener 10 dígitos')
    .required("Campo requerido"),
});
