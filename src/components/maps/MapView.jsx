import { MapContainer, TileLayer } from "react-leaflet";
import MarkerIconHooks from "./MarkerIconHooks";
import Markers from "./Makers";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import usePosition from "../../hooks/usePosition";
import MakerUser from "./MakerUser";
import { default as data } from "../../assets/images/makers/data.json";
import { distance } from "../../helpers/distance";

const MapView = () => {
  const icon = MarkerIconHooks(require("leaflet/dist/images/marker-icon.png"));
  const iconUser = MarkerIconHooks(
    require("../../assets/images/makers/marker-small.png")
  );
  const position = usePosition();
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const distanceInMeter = data.places.map((place) => ({
      name: place.name,
      distance:
        distance(
          place.geometry[0],
          place.geometry[1],
          position.lat,
          position.lng,
          "K"
        ) * 1000,
    }));

    const place = distanceInMeter.find(
      (place) => place.distance >= 0 && place.distance <= 10
    );

    if (place && !play) {
      alert(`¡Estás cerca de ${place.name}!`);
      setPlay(true);
    }
  }, [position]);

  return (
    <MapContainer
      style={{ width: "100%", height: "60vh" }}
      center={[20.536937821169772, -103.96649936013992]}
      zoom={16}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers places={data.places} icon={icon} />
      <MakerUser position={[position.lat, position.lng]} icon={iconUser} />
    </MapContainer>
  );
};

export default MapView;
