import React from "react";
import Button from "@mui/material/Button";

import LogoApp from "../assets/images/logo/paseo-literario.png";
import { Box, Container, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

import LocationPattern from "../assets/images/patterns/locations.png";

const styles = {
  paperContainer: {
    background: "#202945",
    backgroundImage: `linear-gradient(180deg, rgba(0, 109, 130, 1) 35%, rgba(177, 212, 205, 0.82) 95%), url(${LocationPattern})`,
    width: "100%",
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: 0,
    backgroundColor: "#cccccc",
    backgroundPosition: "center",
  },
};

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <Paper elevation={0} style={styles.paperContainer}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            paddingTop: 20,
            paddingBottom: 24,
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <img
            src={LogoApp}
            alt="Logo de Paseo Alcalde"
            width="250px"
            height="auto"
          />
        </Box>
        <Button
          type="button"
          fullWidth
          variant="contained"
          size="large"
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
          sx={{ mt: 2 }}
          onClick={() => navigate("register")}
        >
          Registrarse
        </Button>
      </Container>
    </Paper>
  );
};

export default WelcomeScreen;
