import React, { useState } from "react";
import FormState from "./LoginFormState";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormWrapper, StyledBox, StyledButton } from "../../Styles/layout.style.component";

const height: string = "50px";
const width: string = "400px";
const margin: string = "20px";
const radius: string = "30px";

const LoginForm = () => {
  return (
    <FormWrapper>
		<StyledBox>
			<Box
				component="form"
				noValidate
				autoComplete="off"
				className="childComponent"
				sx={{'& .MuiTextField-root': {
					marginBottom: margin,
					width: width,
                    height: height,
				}, '& button':{marginBottom: margin}}}
			>
				<div>
					<TextField
						id="outlined-basic"
						label="Correo electrónico"
						type="email"
					/>
				</div>
					
				<div>
					<TextField
						label="Contraseña"
						variant="outlined"
						type="password"
					/>
				</div>
				<StyledButton 
					variant="contained" 
					type="submit"
				>
					Iniciar sesión
				</StyledButton>
				<StyledButton 
					variant="contained" 
					type="submit" 
                >
					Continuar con Google
				</StyledButton>
				<StyledButton 
					variant="contained" 
					type="submit" 
                >
					Continuar con Facebook
				</StyledButton>
			</Box>
		</StyledBox>
    </FormWrapper>
  );
}

export default LoginForm;