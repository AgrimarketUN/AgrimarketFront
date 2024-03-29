import { FormWrapper, StyledBox, StyledButton, StyledTextButton, api } from "@/common";
import { HomeGrid } from "@/components";
import { UserCreate } from "@/models";
import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "@/services";
import { inputsValidationSchema } from "@/utils";
export interface SignUpProps {}

const height: string = "50px";
const width: string = "400px";
const margin: string = "20px";
const radius: string = "30px";

const SignUpPage: React.FC<SignUpProps> = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState<UserCreate>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    isSeller: false,
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
    inputsValidationSchema
      .validate(formValues)
      .then((formValues) => {
        console.log("Validación correcta", formValues);
        const fetchAuth = async () => {
          const response = await post(api.register, formValues);
        };
        fetchAuth().then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        console.log("Validación incorrecta", error);
      });
  };

  return (
    <HomeGrid>
      <form onSubmit={handleSubmit} noValidate autoComplete="on">

        <FormWrapper
          className="childComponent"
          sx={{
            "& .MuiTextField-root": {
              marginBottom: margin,
              width: width,
              height: height,
            },
            "& button": { marginBottom: margin },
          }}
        >
          <TextField
            id="firstname"
            name="firstname"
            label="Nombre"
            type="text"
            value={formValues.firstname}
            onChange={handleChange}
            variant="outlined"
            required
          />
          <TextField
            id="lastname"
            name="lastname"
            label="Apellido"
            type="text"
            value={formValues.lastname}
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
            label="Teléfono"
            type="number"
            value={formValues.phone}
            onChange={handleChange}
            variant="outlined"
            required
          />
          <StyledButton variant="contained" type="submit">
            Crear cuenta
          </StyledButton>
          <StyledTextButton onClick={() => navigate("/")}>
            Volver
          </StyledTextButton>
        </FormWrapper>
      </form>
    </HomeGrid>
  );
};

export default SignUpPage;
