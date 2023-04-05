import React, { useState } from "react";
import FormState from "./LoginFormState";
import { TextField, Box, Link } from "@mui/material";
import Button from "@mui/material/Button";
import {
  FormWrapper,
  StyledBox,
  StyledButton,
  StyledTextButton,
} from "@/common";
import { useNavigate } from "react-router-dom";

interface LoginFormValues {
  email: string;
  password: string;
}

const height: string = "50px";
const width: string = "400px";
const margin: string = "20px";
const radius: string = "30px";

const LoginForm: React.FC = () => {
  const [formValues, setFormValues] = useState<LoginFormValues>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
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
            label="Correo electrónico"
            variant="outlined"
            type="email"
            required
            value={formValues.email}
            onChange={handleChange}
          />
          <TextField
            label="Contraseña"
            variant="outlined"
            type="password"
            required
            value={formValues.password}
            onChange={handleChange}
          />
          <StyledTextButton onClick={() => navigate("forgotPassword")}>
            ¿Olvidó su contraseña?
          </StyledTextButton>
          <StyledButton variant="contained" type="submit">
            Iniciar sesión
          </StyledButton>
          <StyledButton variant="contained" type="submit">
            Continuar con Google
          </StyledButton>
          <StyledButton variant="contained" type="submit">
            Continuar con Facebook
          </StyledButton>
          <StyledTextButton onClick={() => navigate("signup")}>
            Registro
          </StyledTextButton>
        </Box>
      </StyledBox>
    </FormWrapper>
  );
};

export default LoginForm;
