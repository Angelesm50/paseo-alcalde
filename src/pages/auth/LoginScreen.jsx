import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import GoogleIcon from "@mui/icons-material/Google";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  Divider,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";

import Logo from "../../assets/images/logo/teal/fray.png";
import {
  googleLogin,
  emailAndPasswordLogin,
} from "../../services/actions/authAction";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
    navigate("/app");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setUserData({
      ...userData,
      [e.target.name]: value,
    });
  };

  const handleEmailAndPasswordLogin = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // console.log(data.entries());
    const email = data.get("email");
    const password = data.get("password");
    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }
    if (password.trim().length < 8) {
      return;
    }
    dispatch(emailAndPasswordLogin(email, password));
    navigate.replace(location.state?.from ?? "/app");
  };

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
        <img src={Logo} alt="Logo" height="40" />
        <Typography component="h1" variant="h6">
          Bienvenido
        </Typography>
        <Box
          component="form"
          onSubmit={handleEmailAndPasswordLogin}
          noValidate
          sx={{ mt: 1 }}
        >
          <FormControl fullWidth margin="normal" variant="standard">
            <InputLabel htmlFor="email">Correo electrónico</InputLabel>
            <Input
              type="email"
              required
              id="email"
              name="email"
              autoComplete="off"
              onChange={handleChange}
              value={userData.email}
            />
          </FormControl>
          <FormControl fullWidth margin="normal" variant="standard">
            <InputLabel htmlFor="password">Contraseña</InputLabel>
            <Input
              required
              onChange={handleChange}
              value={userData.password}
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
            <Link href="forgot-password" variant="body2" color="secondary">
              <Typography
                variant="body2"
                component="span"
                sx={{ fontWeight: 500 }}
              >
                ¿Olvidaste tú contraseña?
              </Typography>
            </Link>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            color="primary"
            sx={{ mt: 5, mb: 5 }}
            disabled={!userData.email || !userData.password}
          >
            Iniciar Sesión
          </Button>
          <Divider>
            <Typography
              variant="caption"
              component="p"
              style={{ textAlign: "center" }}
            >
              O INGRESA CON
            </Typography>
          </Divider>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 2, mb: 2 }}
          >
            <Grid>
              <IconButton
                onClick={handleGoogleLogin}
                aria-label="delete"
                size="large"
                color="primary"
              >
                <GoogleIcon fontSize="inherit" />
              </IconButton>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            variant="body2"
          >
            <Typography variant="body2" component="span">
              ¿No tienes una cuenta? &nbsp;
            </Typography>
            <Link
              href="register"
              variant="body2"
              color="secondary"
              sx={{ fontWeight: 500 }}
            >
              Registrate
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginScreen;
