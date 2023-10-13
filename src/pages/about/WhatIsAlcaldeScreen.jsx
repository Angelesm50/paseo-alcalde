import {
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { useNavigate } from "react-router-dom";

const WhatIsAlcaldeScreen = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0 }}
    >
      <Container component="main" sx={{ mt: 3 }}>
        <CssBaseline />
        <Typography
          variant="h2"
          gutterBottom
          component="div"
          sx={{ fontWeight: 600, textAlign: "center" }}
        >
          ¿Qué es el{" "}
          <Typography
            variant="h2"
            gutterBottom
            component="span"
            color="primary"
            sx={{ fontWeight: 500 }}
          >
            Paseo Literario Alcalde
          </Typography>
          ?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Divider
            sx={{
              width: "7rem",
              borderTopWidth: "thick",
              borderTopColor: "#6197B2",
              borderBottomWidth: "inherit",
              borderRadius: 6,
              my: 2.2,
            }}
          />
          <AssignmentTurnedInIcon
            fontSize="large"
            sx={{ mx: 1, color: "#6197B2" }}
          />
          <Divider
            sx={{
              width: "7rem",
              borderTopWidth: "thick",
              borderTopColor: "#6197B2",
              borderBottomWidth: "inherit",
              borderRadius: 6,
              my: 2.2,
            }}
          />
        </Box>
        <Typography
          variant="body2"
          sx={{ fontSize: "1.2rem", ml: 1, fontWeight: 500, color: "#212529" }}
        >
          El Paseo Literario Fray Antonio Alcalde forma parte de un Plan de
          Rescate y preservación del patrimonio histórico y cultural del Centro
          Histórico mediante la urbaliteracidad, concepto que une lo urbano con
          la lectura, por ello se promueven formas diversas de leer la ciudad,
          escribir, expresarse críticamente, comprender y resignificar los
          espacios públicos.
        </Typography>
        <Button
          fullWidth
          variant="contained"
          size="large"
          color="primary"
          sx={{ my: 5 }}
          onClick={() => navigate("app")}
        >
          Regresar
        </Button>
      </Container>
    </motion.div>
  );
};

export default WhatIsAlcaldeScreen;
