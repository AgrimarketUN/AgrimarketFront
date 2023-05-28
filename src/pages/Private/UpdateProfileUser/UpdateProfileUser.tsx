import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { PrivateGrid } from "@/common";
import { useSelector } from "react-redux";
import { AppStore, UserInfo } from "@/models";
import { useDispatch } from "react-redux";
import { EmptyUserState } from "@/redux/states/userState";
import { fetchUserInfo, inputsValidationSchema } from "@/utils";
import { updateUser } from "./Utils/updateUser";
import { useNavigate } from "react-router-dom";

const ProfileUser: React.FC = () => {
  const navigate = useNavigate();
  const [userUpdate, setUserUpdate] = React.useState<UserInfo>({} as UserInfo);
  const userInfo = useSelector((state: AppStore) => state.user);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (userInfo === EmptyUserState) fetchUserInfo(dispatch);
  }, [userInfo]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserUpdate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    inputsValidationSchema
      .validate(userUpdate)
      .then((userUpdate) => {
        updateUser(userUpdate as UserInfo);
        navigate("/profile");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <PrivateGrid>
      <h1>Actualizar Perfil</h1>

      <Box sx={{ width: "100%" }}>
        <Container maxWidth="xl">
          <form onSubmit={handleSubmit}>
            <Grid sx={{ mt: 2 }} container columnSpacing={2}>
              <Grid item xs={6}>
                <img
                  src={
                    userInfo?.image ||
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  style={{ width: "80%", borderRadius: "0.5em" }}
                />
              </Grid>
              <Grid item xs={6} sx={{ textAlign: "left" }}>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: "h5.fontSize" }}
                >
                  {"Nombre"}
                </Typography>
                <Typography sx={{ mb: "1rem" }}>
                  {userInfo.firstname}
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: "h5.fontSize" }}
                >
                  {"Apellido"}
                </Typography>
                <Typography sx={{ mb: "1rem" }}>{userInfo.lastname}</Typography>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: "h5.fontSize" }}
                >
                  {"Correo electronico"}
                </Typography>
                <TextField
                  name="email"
                  sx={{ mb: "1rem" }}
                  variant="standard"
                  onChange={handleChange}
                  defaultValue={userInfo.email}
                />

                <Typography
                  sx={{ fontWeight: "bold", fontSize: "h5.fontSize" }}
                >
                  {"Dirección"}
                </Typography>
                <TextField
                  name="address"
                  sx={{ mb: "1rem" }}
                  variant="standard"
                  onChange={handleChange}
                  defaultValue={userInfo.address}
                />

                <Typography
                  sx={{ fontWeight: "bold", fontSize: "h5.fontSize" }}
                >
                  {"Teléfono"}
                </Typography>
                <TextField
                  name="phone"
                  sx={{ mb: "1rem" }}
                  variant="standard"
                  onChange={handleChange}
                  type="number"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  defaultValue={userInfo.phone}
                />
              </Grid>
            </Grid>
            <Grid sx={{ mt: 2 }} container columnSpacing={2}>
              <Grid item xs={6}>
                <Button variant="contained">Cambiar foto</Button>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: "left" }}>
                <Button variant="contained" type="submit">
                  Actualizar datos
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>
    </PrivateGrid>
  );
};

export default ProfileUser;
