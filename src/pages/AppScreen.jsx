import {
  Button,
  Container,
  CssBaseline,
  Divider,
  Paper,
  Typography,
} from "@mui/material";

import MenuAppBar from "../components/MenuAppBar";

import Jalisco from "../assets/images/places/jalisco-a-sus-hijos-esclarecidos.jpg";
import { blueGrey } from "@mui/material/colors";
import GutterlessList from "../components/GutterlessList";
import { useNavigate } from "react-router-dom";

const styles = {
  paperContainer: {
    backgroundImage: `linear-gradient(to bottom, rgba(97, 151, 178, 1) 0%, rgba(244, 244, 248, 0.2) 35%, rgba(244, 245, 248, 1) 100%), url(${Jalisco})`,
    width: "100%",
    height: "50vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: 0,
    backgroundColor: "#cccccc",
    backgroundPosition: "center",
  },
};

const AppScreen = () => {
  const navigate = useNavigate();

  return (
    <>
      <Paper elevation={0} style={styles.paperContainer}>
        <CssBaseline />
        <MenuAppBar />
        <Container>
          <Container maxWidth="xs">
            <Button
              fullWidth
              variant="contained"
              size="large"
              color="primary"
              style={{ marginTop: "25vh" }}
              sx={{ mb: 3 }}
              onClick={() => navigate("/map")}
            >
              Iniciar recorrido
            </Button>
          </Container>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            mt={4}
            sx={{ color: blueGrey[600], fontWeight: 500 }}
          >
            Acerca de
          </Typography>
          <Divider />
          <GutterlessList />
        </Container>
      </Paper>
    </>
  );
};

export default AppScreen;
