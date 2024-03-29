import React, { useState, useEffect } from "react";
import { api } from "@/common";
import { HomeGrid } from "@/components";
import { TextField } from "@mui/material";
import { FormWrapper, StyledButton, StyledTextButton } from "@/common";
import { useNavigate } from "react-router-dom";
import { AppStore, UserCredentials } from "@/models";
import { post } from "@/services";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/states/userState";
import { useSelector } from "react-redux";
import { inputsValidationSchema } from "@/utils";

export interface LoginProps {}

const height: string = "50px";
const width: string = "400px";
const margin: string = "20px";
const radius: string = "30px";

const LoginPage: React.FC<LoginProps> = () => {
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  const userState = useSelector((store: AppStore) => store.user);

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

    inputsValidationSchema
      .validate(formValues)
      .then((formValues) => {
        const authUser = async () => {
          const data = await post(api.login, formValues);
          return data;
        };

        const promise = authUser();
        promise
          .then((data) => {
            if (data.token) {
              sessionStorage.setItem("token", data.token);
              sessionStorage.setItem("role", data.role);
              dispatcher(
                setUser({
                  role: data.role,
                  token: data.token,
                  isSeller: data.isSeller,
                })
              );
              navigate("/dashboard");
            } else {
              throw new Error(data.error);
            }
          })
          .catch((error) => {
            console.log("Error:", error);
          });
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    
    <HomeGrid>
      <form onSubmit={handleSubmit} autoComplete="on">
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
          <StyledTextButton onClick={() => navigate("/forgotPassword")}>
            ¿Olvidó su password?
          </StyledTextButton>
          <StyledButton variant="contained" type="submit" name="login">
            Iniciar sesión
          </StyledButton>
          <StyledTextButton onClick={() => navigate("/signup")}>
            Registro
          </StyledTextButton>
          <StyledTextButton onClick={() => navigate("/signupSeller")}>
            ¿Quieres vender con nostros?
          </StyledTextButton>
        </FormWrapper>
      </form>
    </HomeGrid>
  );
};

export default LoginPage;
//agri