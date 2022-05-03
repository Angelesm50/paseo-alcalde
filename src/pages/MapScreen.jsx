import { useState } from "react";
import {
  Box,
  Chip,
  Container,
  CssBaseline,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const MapScreen = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          m: 0,
          p: 0,
          width: "100%",
          height: 300,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
          color: "white",
        }}
      >
        Aqui va el mapa xd
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
            <Typography component="h1" variant="h6">
              Mi primera ruta
            </Typography>
            <Typography
              component="span"
              variant="subtitle2"
              sx={{ color: blueGrey[500] }}
            >
              Mi primera ruta
            </Typography>
          </Box>
          <Box>
            <Chip label="Editar ruta" variant="outlined" />
            <IconButton
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
            </Menu>
          </Box>
        </Box>
      </Toolbar>
      <Container sx={{ mt: 20 }}>
        <Link href="app" variant="body2" color="secondary">
          Atras
        </Link>
      </Container>
    </>
  );
};

export default MapScreen;
