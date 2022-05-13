import {getDownloadURL, getStorage, ref} from "firebase/storage";
import {firebaseApp} from "../config/firebase";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";

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

         // Or inserted into an <img> element
         var img = document.getElementById('myimg');
         img.setAttribute('src', url);
      })
      .catch((error) => {
         // Handle any errors
      });


   let img;
   return img
}