import L from "leaflet";
import {createControlComponent} from "@react-leaflet/core";
import "leaflet-routing-machine";
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';


const createRoutineMachineLayer = (props) => {
   const places = props.places.map(place => L.latLng(place.geometry[0], place.geometry[1]));

   return L.Routing.control({
      router: L.Routing.mapbox('pk.eyJ1IjoicGFzZW9saSIsImEiOiJjbDNqdG85ZWgwNW51M2NyczFydnBxcTM2In0.xa0eSLCzShN4-fd4M2-mtQ'),
      show: false,
      waypoints: places,
      routeWhileDragging: false,
      lineOptions: {
         styles: [
            {
               color: 'blue',
               weight: 4,
               opacity: 0.6
            },
         ],
      },
      createMarker: () => null
   });
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;