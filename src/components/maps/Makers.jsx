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
                    <div><img width={'100%'}
                              height={'100%'}
                              src="https://static.vecteezy.com/system/resources/previews/004/615/716/large_2x/play-pause-media-icon-round-buttons-free-vector.jpg"
                              alt="Iglesia"/>
                    </div>
                </div>
            </Popup>
        </Marker>
    ))

    return (markers)
}

export default Markers;