import React from "react";
import Button from "@mui/material/Button";

import LogoTitle from "../assets/images/logo/white/paseo-alcalde-title.png";
import { Box, Container, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

import LocationPattern from "../assets/images/patterns/locations.png";

const styles = {
  paperContainer: {
    background: "#202945",
    backgroundImage: `linear-gradient(180deg, rgba(32, 41, 69, 0.89) 40%, rgba(87, 119, 222, 0.82) 95%), url(${LocationPattern})`,
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
            paddingTop: 15,
            paddingBottom: 20,
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <img
            src={LogoTitle}
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
    </Paper>
  );
};

export default WelcomeScreen;
