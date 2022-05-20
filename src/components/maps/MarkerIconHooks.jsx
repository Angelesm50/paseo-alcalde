import L from "leaflet";

const MarkerIconHooks = (IconUrl) =>{
    return L.icon({
        iconUrl: IconUrl,
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        iconSize: ['auto', 'auto'],
        iconAnchor: [17, 46]
    });
}

export default MarkerIconHooks;