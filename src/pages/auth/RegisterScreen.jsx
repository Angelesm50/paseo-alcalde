import {
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  Link,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import titleize from "underscore.string/titleize";

import { register } from "../../services/actions/authAction";
import Logo from "../../assets/images/logo/alcalde-navyblue.png";

const RegisterScreen = () => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUserData({
      ...userData,
      [e.target.name]: value,
    });
    // console.log(value);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (userData.email.trim() === "" || !userData.email.trim().includes("@")) {
      return;
    }
    if (userData.fullname.trim().length < 2) {
      return;
    }
    if (userData.password.trim().length < 8) {
      return;
    } else {
      if (userData.password.trim() !== userData.passwordConfirm.trim()) {
        return;
      }
    }
    const fullname = titleize(userData.fullname);
    dispatch(register(fullname, userData.email, userData.password));
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={Logo} alt="Logo Alcalde" height="60" />
        <Typography component="h1" variant="h6" sx={{ fontWeight: 700 }}>
          Registro
        </Typography>
        <Box
          component="form"
          onSubmit={handleRegister}
          noValidate
          autoComplete="off"
        >
          <FormGroup>
            <FormControl fullWidth margin="normal" variant="standard">
              <InputLabel htmlFor="fullname">Nombre</InputLabel>
              <Input
                onChange={handleChange}
                value={userData.fullname}
                required
                id="fullname"
                name="fullname"
              />
            </FormControl>
            <FormControl fullWidth margin="normal" variant="standard">
              <InputLabel htmlFor="email">Correo electrónico</InputLabel>
              <Input
                onChange={handleChange}
                value={userData.email}
                required
                id="email"
                name="email"
              />
            </FormControl>
            <FormControl fullWidth margin="normal" variant="standard">
              <InputLabel htmlFor="password">Contraseña</InputLabel>
              <Input
                onChange={handleChange}
                value={userData.password}
                required
                id="password"
                type={checked ? "text" : "password"}
                name="password"
                inputProps={{
                  "aria-label": "contraseña",
                }}
              />
              <FormHelperText id="password-helper-text">
                Usa 8 o más caracteres en combinación de letras, números y
                símbolos
              </FormHelperText>
            </FormControl>
            <FormControl fullWidth margin="normal" variant="standard">
              <InputLabel htmlFor="passwordConfirm">Confirmación</InputLabel>
              <Input
                onChange={handleChange}
                value={userData.passwordConfirm}
                required
                id="passwordConfirm"
                type={checked ? "text" : "password"}
                name="passwordConfirm"
              />
              <FormHelperText id="password-helper-text">
                Las contraseñas no coinciden
              </FormHelperText>
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  color="primary"
                  inputProps={{ "aria-label": "mostrar contraseña" }}
                />
              }
              label="Mostrar contraseña"
            />
          </FormGroup>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            color="primary"
            sx={{ mt: 3, mb: 4 }}
            disabled={
              !userData.fullname ||
              !userData.email ||
              !userData.password ||
              !userData.passwordConfirm
            }
          >
            Registrarme
          </Button>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            variant="body2"
          >
            <Typography variant="body2" component="span">
              ¿Tienes una cuenta? &nbsp;
            </Typography>
            <Link
              href="login"
              variant="body2"
              color="secondary"
              sx={{ fontWeight: 600 }}
            >
              Iniciar sesión
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterScreen;
