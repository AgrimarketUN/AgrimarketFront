import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { PrivateGrid } from "@/common";

const ProfileUser: React.FC = () => {
  const navigate = useNavigate();
  return (
    <PrivateGrid>
      <h1>Actualizar Perfil</h1>

      <Box sx={{ width: "100%" }}>
        <Container maxWidth="xl">
          <Grid sx={{ mt: 2 }} container columnSpacing={2}>
            <Grid item xs={6}>
              <img
                src={
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                }
                style={{ width: "80%", borderRadius: "0.5em" }}
              />
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "left" }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "h5.fontSize" }}>
                {"Nombre"}
              </Typography>
              <Typography sx={{ mb: "1rem" }}>{"Nombres_Apellidos"}</Typography>

              <Typography sx={{ fontWeight: "bold", fontSize: "h5.fontSize" }}>
                {"Correo electronico"}
              </Typography>
              <Typography sx={{ mb: "1rem" }}>{"correo@domiio.com"}</Typography>

              <Typography sx={{ fontWeight: "bold", fontSize: "h5.fontSize" }}>
                {"Dirección"}
              </Typography>
              <TextField
                sx={{ mb: "1rem" }}
                id="standard-basic"
                variant="standard"
                defaultValue="Cll/Cra ..."
              />

              <Typography sx={{ fontWeight: "bold", fontSize: "h5.fontSize" }}>
                {"Teléfono"}
              </Typography>
              <TextField
                sx={{ mb: "1rem" }}
                id="standard-basic"
                variant="standard"
                type="number"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                defaultValue="300000000"
              />
            </Grid>
          </Grid>
          <Grid sx={{ mt: 2 }} container columnSpacing={2}>
            <Grid item xs={6}>
              <Button variant="contained">Cambiar foto</Button>
            </Grid>

            <Grid item xs={6} sx={{ textAlign: "left" }}>
              <Button variant="contained">Actualizar datos</Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </PrivateGrid>
  );
};

export default ProfileUser;
