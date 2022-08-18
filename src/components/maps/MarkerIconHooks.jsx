import L from "leaflet";

/**
 * @param {string} IconUrl
 * @param {[]} iconanchor
 * @param {[]} popupanchor
 */
const MarkerIconHooks = (IconUrl, iconanchor, popupanchor, shadowSize) => {
   return L.icon({
      iconUrl: IconUrl,
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
      shadowSize: shadowSize,
      iconSize: ['auto', 'auto'],
      iconAnchor: iconanchor,
      popupAnchor: popupanchor
   });
}

export default MarkerIconHooks;