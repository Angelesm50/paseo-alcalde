import {MapContainer, TileLayer, ZoomControl, LayersControl} from 'react-leaflet';
import MarkerIconHooks from "./MarkerIconHooks";
import Markers from "./Makers";
import 'leaflet/dist/leaflet.css';
import MakerUser from "./MakerUser";
import Routing from "./Routing";
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';
import { useEffect, useRef, useState } from "react";
import {distance} from "../../helpers/distance";
import {usePosition} from "../../hooks/usePosition";

const {BaseLayer} = LayersControl;

const MapView = ({ places }) => {
   const childMarkersRef = useRef();
   const icon = MarkerIconHooks(require('../../assets/images/makers/mural.png'), [25, 50], [0, -50]);
   const iconUser = MarkerIconHooks(require('../../assets/images/makers/marker-small.png'), [25, 50], [0, -50]);
   const iconMoney = MarkerIconHooks(require('../../assets/images/makers/money.png'), [24, 49], [0, -49]);
   const [play, setPlay] = useState(false);
   const position = usePosition(true, {enableHighAccuracy: true});

   useEffect(() => {
      const distanceInMeter = places.map(place => ({
         name: place.name,
         geometry: place.geometry,
         id: place.id,
         distance: distance(place.geometry[0], place.geometry[1], position.lat, position.lng, "K") * 1000
      }));
      const place = distanceInMeter.find(place => place.distance >= 0 && place.distance <= 5);

      if (place && !play) {
         childMarkersRef.current.flyTo(position.lat, position.lng, place.id);
         setPlay(true);
      }
      if (!place && play) {
         setPlay(false);
      }
   }, [play, position, places])

   return (
      <MapContainer style={{width: "100%", height: "60vh", position: 'absolute', zIndex: 0, color: "black"}}
                    center={[20.658293344005582, -103.43989978205852]}
                    fullscreenControl={true}
                    zoomControl={false}
                    zoom={16}>
         <LayersControl>
            <BaseLayer name="Satelite">
               <ReactLeafletGoogleLayer type={'satellite'} />
            </BaseLayer>
            <BaseLayer checked name="Mapa">
               <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
            </BaseLayer>
         </LayersControl>
         <ZoomControl position="bottomright"/>
         <Markers ref={childMarkersRef} places={places} icon={icon} iconMoney={iconMoney} />
         <MakerUser position={position} icon={iconUser}/>
         <Routing places={places} user={position}/>
      </MapContainer>
   )
}

export default MapView;
