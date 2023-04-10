import React, { useState } from "react";
import { HomeGrid } from "@/common";
import { TextField } from "@mui/material";
import { FormWrapper, StyledButton, StyledTextButton } from "@/common";
import { useNavigate } from "react-router-dom";
import { forgotPasswordValidationSchema } from "./utils/forgotPasswordValidationSchema";
import { authService } from "@/services";
import post from "@/services/axiosService";

export interface ForgotPasswordProps {}

const height: string = "50px";
const width: string = "400px";
const margin: string = "20px";
const radius: string = "30px";

const ForgotPasswordPage: React.FC<ForgotPasswordProps> = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
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
    forgotPasswordValidationSchema
      .validate(formValues)
      .then((values) => {
        console.log("Validación correcta", values);
        const fetchResetPassword = async () => {
          const response = await post("password/reset", values);
          console.log(response);
          navigate("login");
        };

        fetchResetPassword();
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
          id="email"
          name="email"
          label="Correo electrónico"
          variant="outlined"
          type="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <StyledButton variant="contained" type="submit" name="reset">
          Restablecer contraseña
        </StyledButton>
        <StyledTextButton onClick={() => navigate("login")}>
          Iniciar sesión
        </StyledTextButton>
      </FormWrapper>
    </HomeGrid>
  );
};

export default ForgotPasswordPage;