import React, { useState, useEffect } from "react";
import { api } from "@/common";
import { HomeGrid} from "@/components";
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
            return data;
          };
          const promise = authUser();
          promise.then((data) => {
            if(data !== "BAD"){
              sessionStorage.setItem("token", data.token);
              console.log("Token:", sessionStorage.getItem("token"));
              if(sessionStorage.getItem("token") !== 'undefined'){
                navigate("dashboard");
              }
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
