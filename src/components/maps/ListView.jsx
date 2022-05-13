import { firebaseApp } from "../../config/firebase";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

import { useEffect } from "react";
import { toast } from "react-toastify";


const ListView = ({ places }) => {
  const storage = getStorage(firebaseApp);

  useEffect(() => {
    places.map(place => getDownloadURL(ref(storage, `audios/${ place.audio }.mpeg`))
      .then(url => place.src = url)
      .catch(error =>  toast.error(error?.message ?? "Something went wrong")));
  }, []);

  return places.map((place, i) => (
    <ul key={ i }>
      <li>
        <h4>{ place.name }</h4>
        <div><p>{ place.description }</p>
        </div>
        <div>
          <audio
            id={ place.audio }
            src={ place.src }
            controls
          />
        </div>
      </li>
      <hr/>
    </ul>
  ))
}


export default ListView;