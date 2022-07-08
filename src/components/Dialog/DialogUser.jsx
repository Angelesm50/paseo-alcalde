import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import {
  getAuth,
  updateProfile,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { logout } from "../../services/actions/authAction";
import { clean } from "../../services/actions/nominaAction";
import titleize from "underscore.string/titleize";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

export default function FormDialog({ type, text }) {
  const auth = getAuth();
  const user = auth.currentUser;

  const [datos, setDatos] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clean());
  };

  const captureData = (e) => {
    e.preventDefault();
    if (type === "name") {
      if (datos.name.trim().length > 2) {
        updateProfile(user, { displayName: titleize(datos.name) })
          .then(() => {
            toast.success("Nombre cambiado");
            handleClose();
          })
          .catch((error) => {
            toast.error(error?.message ?? "Algo salió mal");
          });
      } else {
        handleClose();
      }
    }
    if (type === "email") {
      if (datos.email.trim() !== "" || datos.email.trim().includes("@")) {
        updateEmail(user, datos.email)
          .then(() => {
            toast.success("Email cambiado");
            handleClose();
          })
          .catch((error) => {
            toast.error(error?.message ?? "Algo salió mal");
          });
      } else {
        handleClose();
      }
    }
    if (type === "password") {
      if (datos.password.trim().length >= 8) {
        updatePassword(user, datos.password)
          .then(() => {
            toast.success("Contraseña cambiada");
            handleClose();
          })
          .catch((error) => {
            toast.error(error?.message ?? "Algo salió mal");
          });
      } else {
        handleClose();
      }
    }
    if (type === "logout") {
      handleLogout();
    }
  };

  const password = () => {
    return (
      <>
        <InputLabel htmlFor="standard-adornment-password">
          Contraseña
        </InputLabel>
        <Input
          id="password"
          name="password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </>
    );
  };

  const textfield = () => {
    return (
      <TextField
        defaultValue={
          type === "email"
            ? auth.currentUser.email
            : auth.currentUser.displayName
        }
        autoFocus
        margin="dense"
        id={type}
        name={type}
        label={text}
        variant="standard"
        onChange={handleInputChange}
      />
    );
  };

  return (
    <>
      <IconButton
        sx={{ color: "#84AEC2" }}
        aria-label="comment"
        onClick={handleClickOpen}
      >
        <ArrowForwardIosRoundedIcon
          sx={{ stroke: "#84AEC2", strokeWidth: 2 }}
          fontSize="small"
        />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{text}</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ marginBottom: 8 }}>
            {type === "logout"
              ? "Esta seguro que desea salir"
              : `Escriba
            aqui para cambiar ${text.toLowerCase()} de acceso para esta
            aplicacion.`}
          </DialogContentText>
          {type === "logout" ? (
            ""
          ) : (
            <FormControl fullWidth>
              {type === "password" ? password() : textfield()}
            </FormControl>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={captureData}>Proceder</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
