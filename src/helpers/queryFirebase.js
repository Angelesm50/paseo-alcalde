import {firebaseApp} from "../config/firebase";

export const queryFirebase = (name) => {
   const storageRef = firebaseApp.storage().ref();
   storageRef.child(`audios/${name}.mpeg`).getDownloadURL()
      .then((url) => {
         // `url` is the download URL for 'images/stars.jpg'

         // This can be downloaded directly:
         var xhr = new XMLHttpRequest();
         xhr.responseType = 'blob';
         xhr.onload = (event) => {
            var blob = xhr.response;
         };
         xhr.open('GET', url);
         xhr.send();

      })
      .catch((error) => {
      });


   return storageRef
}