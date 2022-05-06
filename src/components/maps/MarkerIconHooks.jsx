import L from "leaflet";

const MarkerIconHooks = (IconUrl) =>{
    return L.icon({
        iconUrl: IconUrl,
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        // iconSize: [35, 35]
    });
}

export default MarkerIconHooks;