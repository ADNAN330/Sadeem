//I'll try my best here to make some functions to Create, Read, Update, And Delete, make it easy for my future.
import{doc, setDoc, getDoc, updateDoc, deleteDoc} from "firebase/firestore"
import { db } from "./config.ts";

// 1 Create
const Create = async(path:string, data:object) => {
    await setDoc(doc(db, ...path.split("/")), data);
}

// 2 Read
const Read = async(path:string) => {
   const snapshot = await getDoc(doc(db, ...path.split("/")));
   return snapshot.exists() ? snapshot.data() : null;
}

// 3 Update
const Update = async(path:string, data:object) => {
    await updateDoc(doc(db, ...path.split("/")), data);
}

// 4 Delete
const Delete = async(path:string) => {
    await deleteDoc(doc(db, ...path.split("/")));
}

const CRUD = {
  Create,
  Read,
  Update,
  Delete
};

export default CRUD;

