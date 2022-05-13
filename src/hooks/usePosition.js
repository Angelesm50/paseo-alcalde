import {useEffect, useState} from "react";

const defaultSettings = {
    enableHighAccuracy: false,
    timeout: Infinity,
    maximumAge: 0,
};

export const usePosition = (watch = false, userSettings = {}) => {
    const [position, setPosition] = useState({lng: 0, lat: 0});
    const settings = { ...defaultSettings, ...userSettings};

    const onChange = ({coords}) =>
      setPosition({
          lng: coords.longitude,
          lat: coords.latitude
      });

    const onError = (error) => console.error(error.message);

    useEffect(() => {
        if (!navigator || !navigator.geolocation) {
            console.error('Geolocation is not supported');
            return;
        }

        if (watch) {
            const watcher = navigator.geolocation.watchPosition(onChange, onError, settings);
            return () => navigator.geolocation.clearWatch(watcher);
        }

        navigator.geolocation.getCurrentPosition(onChange, onError, settings);
    }, [
        settings.enableHighAccuracy,
        settings.timeout,
        settings.maximumAge,
    ]);

    return position;
};