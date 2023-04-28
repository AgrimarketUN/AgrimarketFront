import React, { useState, useEffect } from "react";
import { HomeGrid, api } from "@/common";
import { TextField } from "@mui/material";
import { FormWrapper, StyledButton, StyledTextButton } from "@/common";
import { useNavigate } from "react-router-dom";
import { loginValidationSchema } from "./utils/loginValidationSchema";
import { UserCredentials } from "@/models";
import { post } from "@/services";

export interface LoginProps {}

const height: string = "50px";
const width: string = "400px";
const margin: string = "20px";
const radius: string = "30px";

const LoginPage: React.FC<LoginProps> = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState<UserCredentials>({
    email: "",
    password: "",
  });
  
  // Leer el valor del correo electrónico de la URL
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email") || "";

  // Establecer el valor del correo electrónico en el estado local
  useEffect(() => {
    setFormValues((prevState) => ({
      ...prevState,
      email,
    }));
  }, [email]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (event.currentTarget.name === "google") {
      console.log("Google");
    } else if (event.currentTarget.name === "facebook") {
      console.log("Facebook");
    } else {
      loginValidationSchema
        .validate(formValues)
        .then((formValues) => {
          const authUser = async () => {
            const data = await post(api.login, formValues);
            sessionStorage.setItem("token", data.token);
            return data;
          };
          const promise = authUser();
          promise.then((data) => {
            console.log("Data:", data);
            if(sessionStorage.getItem("token")){
              navigate("dashboard");
            }
          })
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }
  };

  return (
    <HomeGrid>
      <FormWrapper
        component="form"
        noValidate
        autoComplete="on"
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
        <TextField
          id="password"
          name="password"
          label="Contraseña"
          variant="outlined"
          type="password"
          value={formValues.password}
          onChange={handleChange}
        />
        <StyledTextButton onClick={() => navigate("forgotPassword")}>
          ¿Olvidó su password?
        </StyledTextButton>
        <StyledButton variant="contained" type="submit" name="login">
          Iniciar sesión
        </StyledButton>
        <StyledButton variant="contained" type="submit" name="google">
          Continuar con Google
        </StyledButton>
        <StyledButton variant="contained" type="submit" name="facebook">
          Continuar con Facebook
        </StyledButton>
        <StyledTextButton onClick={() => navigate("signup")}>
          Registro
        </StyledTextButton>
      </FormWrapper>
    </HomeGrid>
  );
};

export default LoginPage;
