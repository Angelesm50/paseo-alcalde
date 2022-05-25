import {
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Link,
  Typography,
} from "@mui/material";

import { useDispatch } from "react-redux";
import { forgotPassword } from "../../services/actions/authAction";

import IconLock from "../../assets/images/icons/lock.png";
import { useState } from "react";

const ForgotPasswordScreen = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUserData({
      ...userData,
      [e.target.name]: value,
    });
  };

  const sendEmailResetPassword = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }
    dispatch(forgotPassword(email));
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
        <img src={IconLock} alt="Logo" width="150" height="150" />
        <Typography
          component="div"
          variant="h5"
          sx={{ mt: 3, fontWeight: 600 }}
        >
          ¿Olvidaste tú contraseña?
        </Typography>
        <Typography component="div" variant="caption">
          No te preocupes, puedes recuperarla
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 5 }}
          onSubmit={sendEmailResetPassword}
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            color="primary"
            sx={{ mt: 3, mb: 5 }}
            disabled={!userData.email}
          >
            Recuperar contraseña
          </Button>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 2, mb: 2 }}
          >
            <Link
              href="login"
              variant="body2"
              color="secondary"
              sx={{ fontWeight: 500 }}
            >
              Olvídalo, ya la recordé
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPasswordScreen;
