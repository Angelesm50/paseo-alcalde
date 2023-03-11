import DirectionsWalkRoundedIcon from "@mui/icons-material/DirectionsWalkRounded";

import {Chip, Box, Typography, CardMedia, CardContent, CardActions, Button} from "@mui/material";
import {PlayArrowRounded} from "@mui/icons-material";



import AudioPlayer from "material-ui-audio-player";

import {Marker, Popup} from "react-leaflet";
import React, {forwardRef, useEffect, useImperativeHandle, useRef} from "react";
import {getDownloadURL, getStorage, ref} from "firebase/storage";
import {firebaseApp} from "../../config/firebase";
import {useMap} from "react-leaflet/hooks";
import leaflet from 'leaflet';
import MarkerIconHooks from "./MarkerIconHooks";


const Markers = forwardRef(({icon, places, position}, forwardedRef) => {
    const storage = getStorage(firebaseApp)
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
    }, [places, storage, position]);

    useImperativeHandle(forwardedRef, () => ({
        flyTo(lat, lng, placeId) {
            map.flyTo([lat + 0.00734, lng], 15);
            makersRef.current[placeId].openPopup();
        },
    }));
    return places.map((place, i) => {
        const icon = MarkerIconHooks(require('../../assets/images/makers/'+ place.type +'.png'), [25, 50], [-7, -48], [60,53]);
        let distance = leaflet.latLng(position).distanceTo(leaflet.latLng(place.geometry));
        let time = distance / 30;
        if (place.active) {
            return (
                <>
                    <Marker
                        key={i}
                        position={place.geometry}
                        icon={icon}
                        id={place.id}
                        ref={(el) => (makersRef.current[place.id] = el)}
                        eventHandlers={{click: (e) => map.flyTo(e.latlng + 0.00534, 16)}}
                    >
                        <Popup closeOnClick={false}>
                            <Box sx={{m: 0, width: 200, maxWidth: 250, maxHeight: 300}}>
                                <CardMedia
                                    component="img"
                                    height="100px"
                                    image={place.url}
                                    alt={place.name}
                                />
                                <CardContent sx={{p: 0, mb: 1, alignSelf: "center"}}>
                                    <Typography gutterBottom component="h6" sx={{fontWeight: 500}}>
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
                                <CardActions sx={{p: 0, justifyContent: "center"}}>
                                    <Chip
                                        color="primary"
                                        label={~~time + " min"}
                                        variant="outlined"
                                        sx={{height: 24, pl: 0.3, mr: 1}}
                                        icon={
                                            <DirectionsWalkRoundedIcon
                                                sx={{fontSize: "small", py: 0.4}}
                                            />
                                        }
                                    />
                                    {/*<Button*/}
                                    {/*    variant="contained"*/}
                                    {/*    size="small"*/}
                                    {/*    sx={{*/}
                                    {/*        fontSize: "small",*/}
                                    {/*        p: 0.1,*/}
                                    {/*        px: 1,*/}
                                    {/*        "& .MuiButton-startIcon": {marginRight: "4px"},*/}
                                    {/*    }}*/}
                                    {/*    startIcon={*/}
                                    {/*        <PlayArrowRounded*/}
                                    {/*            style={{marginRight: 0}}*/}
                                    {/*            sx={{fontSize: "small", transform: "rotate(270deg)"}}*/}
                                    {/*        />*/}
                                    {/*    }*/}
                                    {/*>*/}
                                    {/*    iniciar*/}
                                    {/*</Button>*/}
                                </CardActions>
                            </Box>
                        </Popup>
                    </Marker>
                </>
            )
        }
        return null;
    });
});

export default Markers;
