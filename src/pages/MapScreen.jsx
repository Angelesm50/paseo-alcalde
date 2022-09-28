import {Box, Button, Container, CssBaseline, Link, Toolbar, Typography,} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import MapView from "../components/maps/MapView";
import {default as data} from "../assets/images/makers/murales.json";
import ListView from "../components/maps/ListView";
import List from "@mui/material/List";
import DialogEditRute from "../components/Dialog/DialogEditRute";

const MapPage = () => {
    let places = JSON.parse(localStorage.getItem("places"));
    if (!places) {
      localStorage.setItem("places", JSON.stringify(data.places));
    }

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
                <MapView places={places}/>
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
                            <DialogEditRute places={places}/>
                        </Box>
                    </Box>
                </Toolbar>
                <hr/>
                <Box>
                    <List>
                        <ListView places={places}/>
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
