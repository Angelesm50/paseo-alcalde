import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuOpenIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import {FormControl, Input, InputAdornment, InputLabel} from "@mui/material";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import { getAuth, updateProfile, updateEmail, updatePassword} from "firebase/auth";
import {useState} from "react";


export default function FormDialog({type, text}) {
   const auth = getAuth();
   const user = auth.currentUser;

   const [datos, setDatos] = useState({
      name: '',
      email: '',
      password: ''
   })
   const [open, setOpen] = React.useState(false);
   const [values, setValues] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
   });

   const handleChange = (prop) => (event) => {
      setValues({...values, [prop]: event.target.value});
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
      setDatos({
         ...datos,
         [e.target.name]: e.target.value
      })
   }

   const captureData = (e) => {
      e.preventDefault();
      if(type === "name"){
         updateProfile(user, {displayName: datos.name})
            .then(() => {
            // Profile updated!
            alert("Nombre cambiado")
            window.location.reload(false);
         }).catch((error) => {
            // An error occurred
            // ...
         });
      }
      if(type === "email"){
         updateEmail(user, datos.email).then(() => {
            // Email updated!
            alert("Email Cambiado")
            window.location.reload(false);
         }).catch((error) => {
            // An error occurred
            // ...
         });
      }
      if(type === "email"){
         updatePassword(user, datos.password).then(() => {
            // Update successful.
            alert("Contraseña Cambiado")
            window.location.reload(false);
         }).catch((error) => {
            // An error ocurred
            // ...
         });
      }
   }

   const password = () => {
      return (
         <>
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
               id="password"
               name="password"
               type={values.showPassword ? 'text' : 'password'}
               value={values.password}
               onChange={handleChange('password')}
               endAdornment={
                  <InputAdornment position="end">
                     <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                     >
                        {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                     </IconButton>
                  </InputAdornment>
               }
            />
         </>

      )
   }

   const textfield = () => {
      return (
         <TextField
            defaultValue={(type === "email") ? auth.currentUser.email : auth.currentUser.displayName}
            autoFocus
            margin="dense"
            id={type}
            name={type}
            label={text}
            variant="standard"
            onChange={handleInputChange}
         />
      )
   }

   return (
      <div>
         <IconButton aria-label="comment" onClick={handleClickOpen}>
            <MenuOpenIcon/>
         </IconButton>
         <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{"Cambiar " + text.toLowerCase()}</DialogTitle>
            <DialogContent>
               <DialogContentText style={{marginBottom: 8}}>
                  Escribe aqui para cambiar {text.toLowerCase()} de acceso para esta aplicacion.
               </DialogContentText>
               <FormControl fullWidth>
                  {(type === "password") ? password() : textfield()}
               </FormControl>
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose}>Cancel</Button>
               <Button onClick={captureData}>Cambiar</Button>
            </DialogActions>
         </Dialog>
      </div>
   );
}
