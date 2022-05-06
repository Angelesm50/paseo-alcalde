import {useEffect, useState} from "react";

const usePosition = () => {
    const [position, setPosition] = useState({ lng: 0, lat: 0, });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          position => setPosition({ lng: position.coords.longitude , lat: position.coords.latitude }),
          error => {},
          { enableHighAccuracy: true})
    });

    return position;
}

export default usePosition;