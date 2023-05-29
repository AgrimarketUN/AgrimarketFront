import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { PrivateGrid } from "@/common";
import { AppStore, UserInfo } from "@/models";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchUserInfo } from "@/utils";

const ProfileUser: React.FC = () => {
  const userInfo = useSelector((state: AppStore) => state.user);
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetchUserInfo(dispatch);
  }, []);

  const navigate = useNavigate();
  return (
    <PrivateGrid>
      <h1>Mi Perfil</h1>

      <Box sx={{ width: "100%" }}>
        <Container maxWidth="xl">
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
              <Typography sx={{ fontWeight: "bold", fontSize: "h5.fontSize" }}>
                {"Nombre"}
              </Typography>
              <Typography sx={{ mb: "1rem" }}>
                {userInfo.firstname + " " + userInfo.lastname}
              </Typography>

              <Typography sx={{ fontWeight: "bold", fontSize: "h5.fontSize" }}>
                {"Correo electronico"}
              </Typography>
              <Typography sx={{ mb: "1rem" }}>{userInfo.email}</Typography>

              <Typography sx={{ fontWeight: "bold", fontSize: "h5.fontSize" }}>
                {"Dirección"}
              </Typography>
              <Typography sx={{ mb: "1rem" }}>{userInfo.address}</Typography>

              <Typography sx={{ fontWeight: "bold", fontSize: "h5.fontSize" }}>
                {"Teléfono"}
              </Typography>
              <Typography sx={{ mb: "1rem" }}>{userInfo.phone}</Typography>
            </Grid>
          </Grid>
          <Grid sx={{ mt: 2 }} container columnSpacing={2}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                onClick={() => navigate("/updateProfile")}
              >
                Actualizar datos
              </Button>
            </Grid>

            <Grid item xs={6} sx={{ textAlign: "left" }}>
              <Button
                variant="contained"
                onClick={() => navigate("/forgotPassword")}
              >
                Cambiar contraseña
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </PrivateGrid>
  );
};

export default ProfileUser;
