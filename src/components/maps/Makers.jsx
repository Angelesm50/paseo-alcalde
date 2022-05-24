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

const src = [
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.wav",
];
import { Marker, Popup } from "react-leaflet";
import { useEffect } from "react";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { toast } from "react-toastify";
import { firebaseApp } from "../../config/firebase";

import Logo from "../../assets/images/logo/fray-teal.png";

const Markers = (props) => {
   const storage = getStorage(firebaseApp);

   useEffect(() => {
      props.places.map(place => getDownloadURL(ref(storage, `audios/${place.audio}`))
         .then(url => place.src = url)
         .catch(error => toast.error(error?.message ?? "Something went wrong")));
   }, [props.places, storage]);
   return props.places.map((place, i) => (
      <Marker key={i} position={place.geometry} icon={props.icon}>
      <Popup>
        <Box sx={{ m: 0, width: 200, maxWidth: 250, maxHeight: 300 }}>
          <CardMedia
            component="img"
            height="100px"
            image={Logo}
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
              src={src}
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
      {/* <Popup>
        <div>
          <h4>{place.name}</h4>
          <hr />
          <div>
            <p>{place.description}</p>
          </div>
          <div>
            <img
              width={"100%"}
              height={"100%"}
              src="https://static.vecteezy.com/system/resources/previews/004/615/716/large_2x/play-pause-media-icon-round-buttons-free-vector.jpg"
              alt="Iglesia"
            />
          </div>
        </div>
      </Popup> */}
    </Marker>
   ))
}

export default Markers;
