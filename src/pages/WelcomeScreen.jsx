import React from "react";
import Button from "@mui/material/Button";

import Logo from "../assets/logo/blue/paseo-alcalde.png";
import { Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          paddingTop: 20,
          paddingBottom: 5,
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <img
          src={Logo}
          alt="Logo de Paseo Alcalde"
          width="120px"
          height="auto"
        />
      </Box>
      <Button
        type="button"
        fullWidth
        variant="contained"
        size="large"
        sx={{ mt: 3, mb: 2 }}
        style={{
          backgroundColor: "white",
          color: "#353F5F",
        }}
        onClick={() => navigate("login")}
      >
        Iniciar Sesión
      </Button>
      <Button
        type="button"
        fullWidth
        variant="contained"
        size="large"
        color="primary"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => navigate("register")}
      >
        Registrarse
      </Button>
    </Container>
  );
};

export default WelcomeScreen;
