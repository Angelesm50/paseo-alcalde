import {
  Box,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BackgroundProfile from "../../assets/images/icons/background-profile.png";

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
    backgroundImage: `linear-gradient(180deg, rgba(32, 41, 69, 0.5), rgba(32, 41, 69, 0.5)), url(${BackgroundProfile})`,
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
  {
    text: "Nombre de Usuario",
  },
  {
    text: "Correo eletrónico",
  },
  {
    text: "Contraseña",
  },
];

const MyProfile = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box component="div" style={styles.paperContainer} />
      <CssBaseline />
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
          src={BackgroundProfile}
        />
        <Typography component="h5" variant="h5" sx={{ mt: 3, color: "white" }}>
          Error
        </Typography>
        <Typography
          component="div"
          variant="body1"
          sx={{ color: "white", fontWeight: 200 }}
        >
          Página no encontrada
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
          <Grid sx={{ m: 3 }}>
            <Typography
              component="h5"
              variant="h5"
              sx={{ mt: 3, color: blueGrey[800], fontWeight: 700 }}
            >
              Ajustes de perfil
            </Typography>
            <List sx={{ width: "100%", mt: 2 }}>
              {OPTIONS.map((item, index) => (
                <Box key={index}>
                  <ListItem
                    disableGutters
                    secondaryAction={
                      <IconButton aria-label="comment">
                        <ArrowForwardIosIcon sx={{ fontSize: "15px" }} />
                      </IconButton>
                    }
                  >
                    <ListItemText primary={`${item.text}`} />
                  </ListItem>
                </Box>
              ))}
            </List>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default MyProfile;
