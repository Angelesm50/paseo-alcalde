import {
   Box, Button, Container, CssBaseline, Grid, Link, List, ListItem, ListItemText, Typography,
} from "@mui/material";
import {blueGrey} from "@mui/material/colors";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ProfilePicture from "../../assets/images/icons/background-profile.png";
import {auth} from "../../config/firebase";
import DialogUser from "../../components/Dialog/DialogUser"

const MyProfile = () => {
   const styles = {
      paperContainer: {
         left: 0,
         right: 0,
         zIndex: -1,
         position: "fixed",
         width: "100%",
         height: "70vh",
         borderRadius: 0,
         filter: "blur(3px)",
         background: "rgba(32, 41, 69, 0.2)",
         backgroundImage: `linear-gradient(180deg, rgba(32, 41, 69, 0.5), rgba(32, 41, 69, 0.5)), url(${ProfilePicture})`,
         backgroundSize: "cover",
         backgroundRepeat: "no-repeat",
         backgroundColor: "#cccccc",
         backgroundPosition: "center",
      },
   };

   const sectionStyle = {
      left: 0,
      right: 0,
      zIndex: 0,
      position: "fixed",
   };

   const OPTIONS = [
      {text: "Nombre de Usuario", type: "name"},
      {text: "Correo eletrónico", type: "email"},
      {text: "Contraseña", type: "password"},
   ];

   const user = auth.currentUser;

   return (
      <Container component="main" maxWidth="xs">
         <Box component="div" style={styles.paperContainer}/>
         <CssBaseline/>
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
            }}
            style={sectionStyle}
         >
            <Box
               sx={{
                  marginTop: 8,
                  height: 150,
                  width: 150,
                  borderRadius: "50%",
               }}
               component="img"
               alt="Foto de perfil"
               src={user.photoURL ? user.photoURL : ProfilePicture}
            />
            <Typography component="h5" variant="h5" sx={{mt: 3, color: "white"}}>
               {user.displayName ? user.displayName : 'Usuario'}
            </Typography>
            <Typography
               component="div"
               variant="body1"
               sx={{color: "white", fontWeight: 200}}
            >
               {user.email ? user.email : "Correo"}
            </Typography>
            <Box
               sx={{
                  mt: 5,
                  p: 0,
                  width: "100%",
                  height: "70vh",
                  backgroundColor: "#f4f4f8",
                  borderStartStartRadius: "30px",
                  borderStartEndRadius: "30px",
               }}
            >
               <Grid sx={{m: 3}}>
                  <Typography
                     component="h5"
                     variant="h5"
                     sx={{mt: 3, color: blueGrey[800], fontWeight: 700}}
                  >
                     Ajustes de perfil
                  </Typography>
                  <List sx={{width: "100%", mt: 2}}>
                     {OPTIONS.map((item, index) => (
                        <Box key={index}>
                           <ListItem
                              disableGutters
                              secondaryAction={
                                 <DialogUser type={item.type} text={item.text}/>
                              }
                           >
                              <ListItemText primary={`${item.text}`}/>
                           </ListItem>
                        </Box>
                     ))}
                  </List>
               </Grid>
               <Container sx={{}}>
                  <Link href={'app'}>
                     <Button
                        fullWidth
                        variant="contained"
                        size="large"
                        color="primary"
                        style={{marginTop: "25vh"}}
                        sx={{mb: 3}}
                     >
                        Regresar
                     </Button>
                  </Link>
               </Container>
            </Box>
         </Box>
      </Container>
   );
};

export default MyProfile;
