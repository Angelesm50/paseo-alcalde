import {
  Box,
  Button,
  Chip,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import List from "@mui/material/List";
import { blueGrey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

import MapView from "../components/maps/MapView";
import ListView from "../components/maps/ListView";
import { default as data } from "../assets/images/makers/murales.json";

const MapScreen = () => {
  const navigate = useNavigate();
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          m: 0,
          p: 0,
          width: "100%",
          height: "60vh",
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
          color: "white",
        }}
      >
        <MapView places={data.places} />
      </Box>
      <Toolbar>
        <Box
          sx={{
            height: 30,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              component="h1"
              variant="h6"
              sx={{ color: blueGrey[800], fontWeight: 500 }}
            >
              Lugares del recorrido
            </Typography>
          </Box>
          <Box>
            <Chip label="Editar ruta" variant="outlined" color="secondary" />
          </Box>
        </Box>
      </Toolbar>
      <hr />
      <Box>
        <List>
          <ListView places={data.places} />
        </List>
      </Box>
      <Container sx={{}}>
        <Button
          fullWidth
          variant="contained"
          size="large"
          color="primary"
          sx={{ my: 3 }}
          onClick={() => navigate("app")}
        >
          Regresar
        </Button>
      </Container>
    </>
  );
};

export default MapScreen;
