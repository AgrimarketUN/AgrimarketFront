import React, { useState } from "react";
import { HomeGrid } from "@/common";
import { TextField } from "@mui/material";
import { FormWrapper, StyledButton, StyledTextButton } from "@/common";
import { useNavigate } from "react-router-dom";
import resetPasswordValidationSchema from "./utils/resetPasswordValidationSchema";
import { post } from "@/services";

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

const [errorMessage, setErrorMessage] = useState<string | null>(null);

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  resetPasswordValidationSchema
    .validate(formValues)
    .then((formvalues) => {
      console.log("Validación correcta", formvalues);
      const resetPassword = async () => {
        try {
          const response = await post("reset-password", formvalues);
          console.log(response);
          setShowMessage(true);
        } catch (error) {
          console.log(error);
          setErrorMessage("Hubo un error al restablecer la contraseña. Por favor, inténtalo de nuevo más tarde.");
        }
      };
      resetPassword();
    })
    .catch((error) => {
      console.log("Validación incorrecta", error);
      setErrorMessage("Por favor, completa los campos requeridos correctamente.");
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
      {errorMessage ? (
        <p style={{ color: "red" }}>{errorMessage}</p>
      ) : null}
      <StyledButton variant="contained" type="submit" name="reset">
        Restablecer contraseña
      </StyledButton>
    </FormWrapper>
  </HomeGrid>
);
};

export default ResetPasswordPage;
