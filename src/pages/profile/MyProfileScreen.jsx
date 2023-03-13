import {
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@mui/material";
import {motion} from "framer-motion";
import {blueGrey} from "@mui/material/colors";
import {useNavigate} from "react-router-dom";

import {auth} from "../../config/firebase";
import DialogUser from "../../components/Dialog/DialogUser";
import ProfilePicture from "../../assets/images/icons/background-profile.png";

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
    {text: "Cerrar sesión", type: "logout"},
];

const MyProfile = () => {
    const navigate = useNavigate();
    const user = auth.currentUser;

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.2}}
            exit={{opacity: 0}}
        >
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
                    <Avatar
                        alt={user.displayName ? user.displayName : "Usuario"}
                        src={user.photoURL ? user.photoURL : ProfilePicture}
                        sx={{width: 150, height: 150, marginTop: 8}}
                    />
                    <Typography
                        component="h5"
                        variant="h5"
                        align="center"
                        sx={{mt: 3, color: "white"}}
                    >
                        {user.displayName ? user.displayName : "Usuario"}
                    </Typography>
                    <Typography
                        component="div"
                        variant="body1"
                        align="center"
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
                            <List>
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
                            <Button
                                fullWidth
                                variant="contained"
                                size="large"
                                color="primary"
                                sx={{mb: 3}}
                                onClick={() => navigate("app")}
                            >
                                Regresar
                            </Button>
                        </Container>
                    </Box>
                </Box>
            </Container>
        </motion.div>
    );
};

export default MyProfile;
