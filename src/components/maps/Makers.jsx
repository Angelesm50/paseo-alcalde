import {Marker, Popup} from "react-leaflet";
const Markers = (props) => {
    const markers = props.places.map((place, i) => (
        <Marker key={i} position={place.geometry} icon={props.icon}>
            <Popup>
                <div>
                    <b>{place.name}</b>
                    <p style={{marginTop: -1}}>{place.autor}</p>
                    <hr/>
                    <div><p>{place.shortTitle}</p>
                    </div>
                </div>
            </Popup>
        </Marker>
    ))

    return (markers)
}

export default Markers;