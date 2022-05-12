import {Marker, Popup} from "react-leaflet";
const Markers = (props) => {
    const markers = props.places.map((place, i) => (
        <Marker key={i} position={place.geometry} icon={props.icon}>
            <Popup>
                <div>
                    <h4>{place.name}</h4>
                    <hr/>
                    <div><p>{place.description}</p>
                    </div>
                    <div>
                        <audio
                            type
                            controls
                            autoPlay
                            src={''}>
                            Your browser does not support the
                            <code>audio</code> element.
                        </audio>
                    </div>
                </div>
            </Popup>
        </Marker>
    ))

    return (markers)
}

export default Markers;