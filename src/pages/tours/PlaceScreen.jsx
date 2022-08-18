import {
  Box,
  Button,
  Container,
  CssBaseline,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

import ListView from "../../components/maps/ListView";
import { default as data } from "../../assets/images/makers/murales.json";

const PlaceScreen = () => {
  const navigate = useNavigate();
  return (
    <>
      <CssBaseline />
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
            <Typography component="h1" variant="h6">
              Lugares del recorrido
            </Typography>
            <Typography
              component="span"
              variant="subtitle2"
              sx={{ color: blueGrey[700] }}
            >
              Paseo Literario Fray Antonio Alcalde
            </Typography>
          </Box>
        </Box>
      </Toolbar>
      <br />
      <hr />
      <List>
        <ListView places={data.places} />
      </List>
      <Container>
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

export default PlaceScreen;
