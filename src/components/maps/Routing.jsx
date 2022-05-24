import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';


const createRoutineMachineLayer = (props) => {
  const places = props.places.map(place => L.latLng(place.geometry[0], place.geometry[1]));
  console.log(places);

  return L.Routing.control({
    show: false,
    waypoints: places,
    routeWhileDragging: true,
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