import {MapContainer, TileLayer} from 'react-leaflet';
import MarkerIconHooks from "./MarkerIconHooks";
import Markers from "./Makers";
import 'leaflet/dist/leaflet.css';
import MakerUser from "./MakerUser";
import Routing from "./Routing";

const MapView = (props) => {
   const icon = MarkerIconHooks(require('leaflet/dist/images/marker-icon.png'));
   const iconUser = MarkerIconHooks(require('../../assets/images/makers/marker-small.png'))

   return (
      <MapContainer style={{width: "100%", height: "300px"}} center={[20.536937821169772, -103.96649936013992]}
                    zoom={16}>
         <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
         <Markers places={props.places} icon={icon}/>
         <MakerUser position={[props.latitude, props.longitude]} icon={iconUser}/>
         {/*<Routing/>*/}
      </MapContainer>
   )

}

export default MapView;
