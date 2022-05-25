import {
  Box,
  Button,
  Container,
  CssBaseline,
  Link,
  Toolbar,
  Typography,
  List,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";

import MapView from "../components/maps/MapView";
import ListView from "../components/maps/ListView";
import { useEffect, useState } from "react";
import { distance } from "../helpers/distance";
import { usePosition } from "../hooks/usePosition";

import { default as data } from "../assets/images/makers/murales.json";

const MapScreen = () => {
  const [play, setPlay] = useState(false);
  const position = usePosition(true, { enableHighAccuracy: true });

  useEffect(() => {
    const distanceInMeter = data.places.map((place) => ({
      name: place.name,
      audio: place.audio,
      distance:
        distance(
          place.geometry[0],
          place.geometry[1],
          position.lat,
          position.lng,
          "K"
        ) * 1000,
    }));
    const place = distanceInMeter.find(
      (place) => place.distance >= 0 && place.distance <= 5
    );

    if (place && !play) {
      alert(`¡Estás cerca de ${place.name}!`);
      setPlay(true);
    }
    if (!place && play) {
      setPlay(false);
    }
  }, [play, position]);

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          m: 0,
          p: 0,
          width: "100%",
          height: "60vh",
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
          color: "white",
        }}
      >
        <MapView
          places={data.places}
          latitude={position.lat}
          longitude={position.lng}
        />
      </Box>
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
            <Typography component="h1" variant="h6">
              Lugares del recorrido
            </Typography>
            <Typography
              component="span"
              variant="subtitle2"
              sx={{ color: blueGrey[700] }}
            >
              Paseo Literario Fray Antonio Alcalde
            </Typography>
          </Box>
        </Box>
      </Toolbar>
      <br />
      <hr />
      <List>
        <ListView places={data.places} />
      </List>
      <Container sx={{}}>
        <Link href={"app"}>
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
    </>
  );
};

export default MapScreen;
