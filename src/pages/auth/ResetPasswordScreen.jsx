import {
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { resetPassword } from "../../services/actions/authAction";
import Logo from "../../assets/images/logo/teal/fray.png";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ResetPasswordScreen = () => {
  const query = useQuery();
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const [userData, setUserData] = useState({
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUserData({
      ...userData,
      [e.target.name]: value,
    });
    console.log(value);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (userData.password.trim() !== userData.passwordConfirm.trim()) {
      return;
    }
    console.log("Formulario correcto");
    dispatch(resetPassword(query.get("oobCode"), userData.password));
    navigate(state?.from ?? "/login");
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
        <img src={Logo} alt="Logo" width="30" height="30" />
        <Typography component="h1" variant="h6">
          Restablecer la contraseña
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
          autoComplete="off"
          onSubmit={handleResetPassword}
        >
          <FormGroup>
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
          >
            Restablecer la contraseña
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ResetPasswordScreen;
