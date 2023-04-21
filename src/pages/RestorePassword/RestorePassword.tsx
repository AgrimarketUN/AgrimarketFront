import React, { useState } from "react";
import { HomeGrid } from "@/common";
import { TextField } from "@mui/material";
import { FormWrapper, StyledButton, StyledTextButton } from "@/common";
import { useNavigate } from "react-router-dom";
import resetPasswordValidationSchema from "./utils/resetPasswordValidationSchema";
import { authService } from "@/services";
import post from "@/services/axiosService";

export interface ResetPasswordProps {}

const height: string = "50px";
const width: string = "400px";
const margin: string = "20px";
const radius: string = "30px";

const ResetPasswordPage: React.FC<ResetPasswordProps> = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    password: "",
    confirmPassword: "",
  });

  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    resetPasswordValidationSchema
      .validate(formValues)
      .then((values) => {
        console.log("Validación correcta", values);
        const resetPassword = async () => {
          try {
            const response = await post("reset-password", values);
            console.log(response);
            setShowMessage(true);
          } catch (error) {
            console.log(error);
          }
        };
        resetPassword();
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
          id="password"
          name="password"
          label="Nueva contraseña"
          variant="outlined"
          type="password"
          value={formValues.password}
          onChange={handleChange}
        />
        <TextField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirmar contraseña"
          variant="outlined"
          type="password"
          value={formValues.confirmPassword}
          onChange={handleChange}
        />
        {showMessage ? (
          <p>Tu contraseña se ha actualizado con éxito.</p>
        ) : null}
        <StyledButton variant="contained" type="submit" name="reset">
          Restablecer contraseña
        </StyledButton>
      </FormWrapper>
    </HomeGrid>
  );
};

export default ResetPasswordPage;
