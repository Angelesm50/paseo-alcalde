import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { default as data } from "../../assets/images/makers/murales.json";


const createRoutineMachineLayer = () => {
  const places = data.places.map(place => L.latLng(place.geometry[0], place.geometry[1]));
  return L.Routing.control({
    show: false,
    waypoints: places,
    lineOptions: {
      styles: [
        {
          color: '#757de8',
        },
      ],
    },
    createMarker: () => null
  });
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;