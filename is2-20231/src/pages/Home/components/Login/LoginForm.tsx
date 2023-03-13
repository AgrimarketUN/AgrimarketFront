import React, { useState } from "react";
import FormState from "./LoginFormState";
import {TextField, Box} from "@mui/material";
import Button from "@mui/material/Button";
import { FormWrapper, StyledBox, StyledButton } from "../../Styles/layout.style.component";

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
		email: '',
		password: '',
	});
	
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
						value={formValues.email}
						onChange={handleChange}
					/>
				</div>
					
				<div>
					<TextField
						label="Contraseña"
						variant="outlined"
						type="password"
						value={formValues.password}
						onChange={handleChange}
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