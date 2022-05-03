import { addDoc, collection, deleteDoc, doc } from "firebase/firestore/lite";
import { db } from "../../config/firebase";
import { types } from "../../types/types";

export const createNomina = (totalAmount) => {
  return async (dispatch, getState) => {
    const {uid} = getState().auth;

    const data = {
      date: new Date().toLocaleDateString(),
      payment: totalAmount
    }

    const colRef = collection(db, `${uid}/nominas`, 'nomina');
    const snapshotRef = await addDoc(colRef, {
      ...data
    });

    const id = snapshotRef.id;
    const newElement = {
      ...data,
      id
    }
    // console.log(snapshotRef.id);
    dispatch(create(newElement));
  }
}

export const deleteNominaOnDB = (id) => {
  return async (dispatch, getState) => {
    const {uid} = getState().auth;

    await deleteDoc(doc(db, `${uid}/nominas`, `nomina/${id}`));
    dispatch(deleteNomina(id));
  }
}

export const readNominaData = (data) => {
  return {
    type: types.nominaRead,
    payload: data
  }
}

export const create = (data) => {
  return {
    type: types.nominaAdd,
    payload: data
  }
}

export const deleteNomina = (id) => {
  return {
    type: types.nominaDelete,
    payload: id
  }
}

export const clean = () => {
  return {
    type: types.nominaClean,
  }
}