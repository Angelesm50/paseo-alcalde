import {
   Box,
   Chip,
   Container,
   CssBaseline,
   IconButton,
   Link,
   Menu,
   MenuItem,
   Toolbar,
   Typography,
} from "@mui/material";
import {blueGrey} from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MapView from "../components/maps/MapView";
import usePosition from "../hooks/usePosition";
import {useEffect, useState} from "react";
import {default as data} from "../assets/images/makers/data.json";
import {distance} from "../helpers/distance";
import ListView from "../components/maps/ListView";

const MapScreen = () => {
   const position = usePosition();
   const [play, setPlay] = useState(false);

   useEffect(() => {
      const distanceInMeter = data.places.map(place => ({
         name: place.name,
         audio: place.audio,
         distance: distance(place.geometry[0], place.geometry[1], position.lat, position.lng, "K") * 1000
      }));

      const place = distanceInMeter.find(place => place.distance >= 0 && place.distance <= 5);

      if (place && !play) {
         alert(`¡Estás cerca de ${ place.name }!`);
         setPlay(true);
      }
      if (!place && play) {
         setPlay(false);
      }

   }, [play, position])

   const [anchorEl, setAnchorEl] = useState(null);
   const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <>

         <CssBaseline/>
         <Box
            sx={{
               m: 0,
               p: 0,
               width: "100%",
               height: 300,
               backgroundColor: "primary.dark", "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
               },
               color: "white",
            }}
         >
            <MapView places={data.places} latitude={position.lat} longitude={position.lng}/>
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
                     Mi primera ruta
                  </Typography>
                  <Typography
                     component="span"
                     variant="subtitle2"
                     sx={{color: blueGrey[500]}}
                  >
                     Mi primera ruta
                  </Typography>
               </Box>
               <Box>
                  <Chip label="Editar ruta" variant="outlined"/>
                  <IconButton
                     size="large"
                     aria-label="account of current user"
                     aria-controls="menu-appbar"
                     aria-haspopup="true"
                     color="inherit"
                     onClick={handleMenu}
                  >
                     <MoreVertIcon sx={{color: blueGrey[900]}}/>
                  </IconButton>
                  <Menu
                     id="menu-appbar"
                     anchorEl={anchorEl}
                     anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                     }}
                     open={Boolean(anchorEl)}
                     onClose={handleClose}
                  >
                     <MenuItem>Opciones</MenuItem>
                     <MenuItem>Opciones</MenuItem>
                     <MenuItem>Opciones</MenuItem>
                     <MenuItem>Opciones</MenuItem>
                  </Menu>
               </Box>
            </Box>
         </Toolbar>
         <br/>
         <hr/>
         <Box sx={{
            // marginTop: 4,
            // p: 0,
            // width: "100%",
            // height: 300,

         }}>
            <ListView places={data.places}/>
         </Box>
         <Container sx={{}}>
            <Link href={"app"} variant="body2" color="secondary">
               Atras
            </Link>
         </Container>
      </>
   );
};

export default MapScreen;
