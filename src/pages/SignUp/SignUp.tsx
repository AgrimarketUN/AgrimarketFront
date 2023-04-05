import { FormWrapper, HomeGrid, StyledBox, StyledButton } from "@/common";
import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
export interface SignUpProps {}

interface LoginFormValues {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
}

const height: string = "50px";
const width: string = "400px";
const margin: string = "20px";
const radius: string = "30px";

const SignUpPage: React.FC<SignUpProps> = () => {
  const [formValues, setFormValues] = useState<LoginFormValues>({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <HomeGrid>
      <FormWrapper>
        <StyledBox>
          <Box
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
          >
            <TextField
              id="name"
              label="Nombre"
              type="text"
              value={formValues.name}
              onChange={handleChange}
              variant="outlined"
              required
            />
            <TextField
              id="lastName"
              label="Apellido"
              type="text"
              value={formValues.lastName}
              onChange={handleChange}
              variant="outlined"
              required
            />
            <TextField
              id="phone"
              label="Telefono"
              type="text"
              value={formValues.phone}
              onChange={handleChange}
              variant="outlined"
              required
            />
            <TextField
              id="outlined-basic"
              label="Correo electrónico"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              required
            />
            <TextField
              label="Contraseña"
              variant="outlined"
              type="password"
              value={formValues.password}
              onChange={handleChange}
              required
            />
            <StyledButton variant="contained" type="submit">
              Crear cuenta
            </StyledButton>
          </Box>
        </StyledBox>
      </FormWrapper>
    </HomeGrid>
  );
};

export default SignUpPage;
