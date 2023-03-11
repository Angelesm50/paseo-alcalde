import React from "react";
import Button from "@mui/material/Button";
import {motion} from "framer-motion";

import LogoApp from "../assets/images/logo/white/paseo-literario.png";
import {Box, Container, Paper} from "@mui/material";
import {useNavigate} from "react-router-dom";

import LocationPattern from "../assets/images/patterns/locations-teal-blue.png";

const styles = {
    paperContainer: {
        background: "#202945",
        backgroundImage: `linear-gradient(180deg, rgba(97, 151, 178, 1) 35%, rgba(187, 219, 208, 0.82) 95%), url(${LocationPattern})`,
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
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.2}}
        >
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
                        sx={{mt: 2}}
                        onClick={() => navigate("register")}
                    >
                        Registrarse
                    </Button>
                </Container>
            </Paper>
        </motion.div>
    );
};

export default WelcomeScreen;
