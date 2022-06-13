import DirectionsWalkRoundedIcon from "@mui/icons-material/DirectionsWalkRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Chip } from "@mui/material";

import AudioPlayer from "material-ui-audio-player";

import { Marker, Popup } from "react-leaflet";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
// import { toast } from "react-toastify";
import { firebaseApp } from "../../config/firebase";
import { useMap } from "react-leaflet/hooks";

const Markers = forwardRef(({ icon, iconMoney, places }, forwardedRef) => {
  const storage = getStorage(firebaseApp);
  const map = useMap();
  const makersRef = useRef({});

  useEffect(() => {
    (async () => {
      try {
        await places.map(
          async (place) =>
            (place.src = await getDownloadURL(
              ref(storage, `audios/${place.audio}`)
            ))
        );
      } catch (error) {
        // toast.error(error?.message ?? "Something went wrong");
      }
    })();
  }, [places]);

  useImperativeHandle(forwardedRef, () => ({
    flyTo(lat, lng, placeId) {
      map.flyTo([lat + 0.00734, lng], 15);
      makersRef.current[placeId].openPopup();
    },
  }));

  return places.map((place, i) => (
    <Marker
      key={i}
      position={place.geometry}
      icon={place.type === "gastronomica" ? iconMoney : icon}
      id={place.id}
      ref={(el) => (makersRef.current[place.id] = el)}
      eventHandlers={{ click: (e) => map.flyTo(e.latlng + 0.00534, 16) }}
    >
      <Popup>
        <Box sx={{ m: 0, width: 200, maxWidth: 250, maxHeight: 300 }}>
          <CardMedia
            component="img"
            height="100px"
            image={place.url}
            alt={place.name}
          />
          <CardContent sx={{ p: 0, mb: 1, alignSelf: "center" }}>
            <Typography gutterBottom component="h6" sx={{ fontWeight: 500 }}>
              {place.name}
            </Typography>
            <AudioPlayer
              width="200px"
              elevation={0}
              variation="primary"
              spacing={1}
              preload="auto"
              time="single"
              timePosition="end"
              src={place.src}
            />
          </CardContent>
          <CardActions sx={{ p: 0, justifyContent: "space-between" }}>
            <Chip
              color="primary"
              label="2 min"
              variant="outlined"
              sx={{ height: 24, pl: 0.3, mr: 1 }}
              icon={
                <DirectionsWalkRoundedIcon
                  sx={{ fontSize: "small", py: 0.4 }}
                />
              }
            />
            <Button
              variant="contained"
              size="small"
              sx={{
                fontSize: "small",
                p: 0.1,
                px: 1,
                "& .MuiButton-startIcon": { marginRight: "4px" },
              }}
              startIcon={
                <PlayArrowRoundedIcon
                  style={{ marginRight: 0 }}
                  sx={{ fontSize: "small", transform: "rotate(270deg)" }}
                />
              }
            >
              iniciar
            </Button>
          </CardActions>
        </Box>
      </Popup>
    </Marker>
  ));
});

export default Markers;
