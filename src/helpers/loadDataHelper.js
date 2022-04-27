import { collection, getDocs } from "firebase/firestore/lite";

import { db } from '../config/firebase';

export const loadDataHelper = async (uid) => {
  const data = [];
  const querySnapshot = await getDocs(collection(db, `${uid}/nominas/nomina`));
  querySnapshot.forEach((doc) => {
    // console.log(`${doc.id} => ${doc.data()}`);
    const nominaData = doc.data();
    data.push({
      id: doc.id,
      ...nominaData
    })
  });
  // console.log(data);
  return data;
}
