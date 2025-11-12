//I'll try my best here to make some functions to Create, Read, Update, And Delete, make it easy for my future.
import{doc, addDoc, getDoc, updateDoc, deleteDoc, collection, getDocs} from "firebase/firestore"
import {db} from "./config.ts";

// 1 Create
const Create = async(path:string, data:object) => {
    await addDoc(collection(db, ...path.split("/") as [string, string, ...string[]]), data); 
     //setDoc(doc(db, ...path.split("/")), data);

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
// 5 Read All
const ReadAll = async (path: string) => {
  const colRef = collection(db, ...path.split("/") as [string, string, ...string[]]);
  const snapshot = await getDocs(colRef);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    data: doc.data(),
  }));
};




const CRUD = {
  Create,
  Read,
  Update,
  Delete,
  ReadAll
};

export default CRUD;

