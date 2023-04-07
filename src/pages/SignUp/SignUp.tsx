import { FormWrapper, HomeGrid, StyledBox, StyledButton } from "@/common";
import { UserCreate } from "@/models";
import { Box, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { signUpValidationSchema } from "./utils/signUpValidationSchema";
import post from "@/services/axiosService";
export interface SignUpProps {}

const height: string = "50px";
const width: string = "400px";
const margin: string = "20px";
const radius: string = "30px";

const SignUpPage: React.FC<SignUpProps> = () => {
  const [formValues, setFormValues] = useState<UserCreate>({
    name: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    phone: null,
    });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
      signUpValidationSchema
        .validate(formValues)
        .then((values) => {
          console.log("Validación correcta", values);
          const fetchAuth = async () => {
            const response = await post("sign/register", values);
            console.log(response);
          };
          
          useEffect(() => {
            try {
              fetchAuth();
            } catch (error) {}
          }, [])
        })
        .catch((error) => {
          console.log("Validación incorrecta", error);
        });
  };

  return (
    <HomeGrid>
      <FormWrapper
        component="form"
        noValidate
        autoComplete="off"
        className="childComponent"
        sx={{
          "& .MuiTextField-root": {
            marginBottom: margin,
            width: width,
            height: height,
          },
          "& button": { marginBottom: margin },
        }}
        onSubmit={handleSubmit}
      >
            <TextField
              id="name"
              name="name"
              label="Nombre"
              type="text"
              value={formValues.name}
              onChange={handleChange}
              variant="outlined"
              required
            />
            <TextField
              id="lastName"
              name="lastName"
              label="Apellido"
              type="text"
              value={formValues.lastName}
              onChange={handleChange}
              variant="outlined"
              required
            />
            <TextField
              id="email"
              name="email"
              label="Correo electrónico"
              type="email"
              variant="outlined"
              value={formValues.email}
              onChange={handleChange}
              required
            />
            <TextField
              id="password"
              name="password"
              label="Contraseña"
              variant="outlined"
              type="password"
              value={formValues.password}
              onChange={handleChange}
              required
            />
            <TextField
              id="address"
              name="address"
              label="Dirección"
              type="text"
              value={formValues.address}
              onChange={handleChange}
              variant="outlined"
              required
            />
            <TextField
              id="phone"
              name="phone"
              label="Telefono"
              type="number"
              value={formValues.phone}
              onChange={handleChange}
              variant="outlined"
              required
            />
            <StyledButton variant="contained" type="submit">
              Crear cuenta
            </StyledButton>
      </FormWrapper>
    </HomeGrid>
  );
};

export default SignUpPage;
