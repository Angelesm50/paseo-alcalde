import {Marker, Popup} from "react-leaflet";
import {useEffect} from "react";
import {getDownloadURL, getStorage, ref} from "firebase/storage";
import {toast} from "react-toastify";
import {firebaseApp} from "../../config/firebase";


const Markers = (props) => {
   const storage = getStorage(firebaseApp);

   useEffect(() => {
      props.places.map(place => getDownloadURL(ref(storage, `audios/${place.audio}`))
         .then(url => place.src = url)
         .catch(error => toast.error(error?.message ?? "Something went wrong")));
   }, [props.places, storage]);
   return props.places.map((place, i) => (
      <Marker key={i} position={place.geometry} icon={props.icon}>
         <Popup>
            <div>
               <b>{place.name}</b>
               <p style={{marginTop: -1}}>{place.autor}</p>
               <hr/>
               <div>
                  <p>{place.shortTitle}</p>
               </div>
               <div>
                  <audio
                     id={place.audio}
                     src={place.src}
                     controls
                  />
               </div>
            </div>
         </Popup>
      </Marker>
   ))
}

export default Markers;