import { boolean, number, object, string } from "yup";

export const inputsValidationSchema = object().shape({
  firstname: string(),
  lastname: string(),
  email: string().email("Correo electrónico inválido"),
  password: string().min(8, "La contraseña debe contener mínimo 8 caracteres"),
  address: string(),
  phone: string().matches(
    /^\d{10}$/,
    "El número de teléfono debe tener 10 dígitos"
  ),
  role: string(),
  isSeller: boolean(),
  image: string(),
  id: number(),
});
