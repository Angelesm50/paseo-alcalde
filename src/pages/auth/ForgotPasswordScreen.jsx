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
import {motion} from "framer-motion";
import {useState} from "react";
import {useDispatch} from "react-redux";

import {forgotPassword} from "../../services/actions/authAction";
import ForgotPasswordIcon from "../../assets/images/icons/forgot-password.png";

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
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.2}}
        >
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={ForgotPasswordIcon}
                        alt="Logo Alcalde"
                        height="320"
                        width="320"
                        loading="lazy"
                    />
                    <Typography component="div" variant="h5" sx={{fontWeight: 600}}>
                        ¿Olvidaste tú contraseña?
                    </Typography>
                    <Typography component="div" variant="caption">
                        No te preocupes, puedes recuperarla
                    </Typography>
                    <Box component="form" noValidate onSubmit={sendEmailResetPassword}>
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
                            sx={{mt: 4, mb: 1}}
                            disabled={!userData.email}
                        >
                            <Typography
                                component="span"
                                variant="body1"
                                sx={{fontWeight: 600}}
                            >
                                Recuperar contraseña
                            </Typography>
                        </Button>
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                            sx={{mt: 2, mb: 2}}
                        >
                            <Link
                                href="login"
                                variant="body1"
                                color="secondary"
                                sx={{fontWeight: 600}}
                            >
                                Olvídalo, ya la recordé
                            </Link>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </motion.div>
    );
};

export default ForgotPasswordScreen;
