import {Box, Button, Chip, Container, CssBaseline, Link, Toolbar, Typography,} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import MapView from "../components/maps/MapView";
import {useState} from "react";
import {default as data} from "../assets/images/makers/murales.json";
import ListView from "../components/maps/ListView";
import List from "@mui/material/List";
import {auth} from "../config/firebase";

const MapPage = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const user = auth.currentUser;

    const handleMenu = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    const toTitleCase = (phrase) =>
        phrase
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

    return (
        <>
            <CssBaseline/>
            <Box
                sx={{
                    m: 0,
                    p: 0,
                    width: "100%",
                    height: "60vh",
                    backgroundColor: "primary.dark", "&:hover": {
                        backgroundColor: "primary.main",
                        opacity: [0.9, 0.8, 0.7],
                    },
                    color: "white",
                }}
            >
                <MapView places={data.places}/>
            </Box>
            <Box sx={{height: "40vh", overflow: "hidden", overflowY: "scroll"}}>
                <Toolbar>
                    <Box
                        sx={{
                            height: 30,
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box>
                            <Typography
                                component="h1"
                                variant="h6"
                                sx={{ color: blueGrey[800], fontWeight: 500 }}>
                                Lugares del recorrido
                            </Typography>
                        </Box>
                        <Box>
                            <Chip label="Editar ruta" variant="outlined" color="secondary"/>
                        </Box>
                    </Box>
                </Toolbar>
                <hr/>
                <Box>
                    <List>
                        <ListView places={data.places}/>
                    </List>
                </Box>
                <Container sx={{}}>
                    <Link href={'app'}>
                        <Button
                            fullWidth
                            variant="contained"
                            size="large"
                            color="primary"
                            sx={{ my: 3 }}
                        >
                            Regresar
                        </Button>
                    </Link>
                </Container>
            </Box>
        </>
    );
};

export default MapPage;
