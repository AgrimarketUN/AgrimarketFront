import React, { useState } from "react";
import { HomeGrid } from "@/components";
import { TextField } from "@mui/material";
import { FormWrapper, StyledButton, StyledTextButton, api } from "@/common";
import { useNavigate } from "react-router-dom";
import { forgotPasswordValidationSchema } from "./utils/forgotPasswordValidationSchema";
import { post } from "@/services";

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

  const [showMessage, setShowMessage] = useState(false); // Nuevo estado para mostrar mensaje

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
          const response = await post(api.forgotpassword, values);
          console.log(response);
          setShowMessage(true); // Actualizar estado para mostrar mensaje
        };

        fetchResetPassword();
      })
      .catch((error) => {
        console.log("Validación incorrecta", error);
      });
  };

  return (
    <HomeGrid>
      <form onSubmit={handleSubmit} noValidate>
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
          <StyledButton variant="contained" type="submit" name="reset">
            Restablecer contraseña
          </StyledButton>
          {showMessage && ( // Mostrar mensaje cuando showMessage es verdadero
            <p>
              Se ha enviado un correo electrónico de restablecimiento de
              contraseña.
            </p>
          )}
          <StyledTextButton
            onClick={() => navigate("/?mtail=${formValues.email}")}
          >
            Volver
          </StyledTextButton>
        </FormWrapper>
      </form>
    </HomeGrid>
  );
};

export default ForgotPasswordPage;
