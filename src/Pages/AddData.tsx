import { useNavigate } from 'react-router-dom';
import CRUD from '../firebase/CRUD.tsx'
import { useState } from 'react';
import { auth } from '../firebase/config.ts';

const AddData = () => {
  const navigate = useNavigate();
   const userId = auth.currentUser?.uid;
   const [dataName, setDataName] = useState<string>("");
  const [text, setText] = useState<string>("");
  function AddDataBtn() {
   
    CRUD.Create(`users/${userId}/data`, { [dataName]: text , "CreatedAt" : new Date().toLocaleTimeString()})
      navigate("/");
  }
 return <>
 <button onClick={() => navigate("/")}>Back</button>
 <h1>Add Data </h1>
<input value={dataName} onChange={(e) => setDataName(e.target.value)} type="text" placeholder='Enter the name of the file' /><br />
 <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder='Enter the data of the file' /><br />
 <button onClick={() => AddDataBtn()}>Upload</button>
 </>
}

export default AddData;