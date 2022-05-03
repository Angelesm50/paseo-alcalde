import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Link,
  Typography,
} from "@mui/material";

import Logo from "../assets/images/logo/blue/paseo-alcalde.png";

const NotFoundScreen = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={Logo} alt="Logo" width="150" height="150" />
        <Typography component="div" variant="h5" sx={{ mt: 3 }}>
          Error
        </Typography>
        <Typography component="div" variant="caption">
          Página no encontrada
        </Typography>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 2, mb: 2 }}
        >
          <Link href="/" variant="body2" color="secondary">
            Inicio
          </Link>
        </Grid>
      </Box>
    </Container>
  );
};

export default NotFoundScreen;
