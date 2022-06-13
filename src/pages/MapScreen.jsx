import {
  Box,
  Button,
  Chip,
  Container,
  CssBaseline,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import MapView from "../components/maps/MapView";
import { default as data } from "../assets/images/makers/murales.json";
import ListView from "../components/maps/ListView";
import List from "@mui/material/List";

const MapScreen = () => {
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
              {/* {toTitleCase(user.displayName)} */}
              Lugares del recorrido
            </Typography>
            {/* <Typography
              component="span"
              variant="subtitle2"
              sx={{ color: blueGrey[500] }}
            >
              Lugares del recorrido
            </Typography> */}
          </Box>
          <Box>
            <Chip label="Editar ruta" variant="outlined" color="secondary" />
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleMenu}
            >
              <MoreVertIcon sx={{ color: blueGrey[900] }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>Opciones</MenuItem>
              <MenuItem>Opciones</MenuItem>
              <MenuItem>Opciones</MenuItem>
              <MenuItem>Opciones</MenuItem>
            </Menu> */}
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
        <Link href={"app"}>
          <Button
            fullWidth
            variant="contained"
            size="large"
            color="primary"
            sx={{ my: 3 }}
          >
            Regresar
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default MapScreen;
