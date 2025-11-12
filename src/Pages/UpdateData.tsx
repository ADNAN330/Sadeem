import { useNavigate, useParams } from "react-router-dom";
import { auth } from "../firebase/config";
import CRUD from "../firebase/CRUD";
import { useEffect, useState } from "react";


const UpdateData = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [dataName, setDataName] = useState<string>('');
    const [dataDetails, setDataDetails] = useState<string>('');

    const fetchCardByID = async (cardId : string) => {
        const User = auth.currentUser;
        if(!User) return;
        const importedData: any = await CRUD.Read(`users/${User.uid}/data/${cardId}`);
        if (!importedData) return;
        const key = Object.keys(importedData)[0];
        const value = importedData[key];
        setDataName(key);
        setDataDetails(value);
    }
    const handleUpdate = async () => {
         const User = auth.currentUser;
        if(!User) return;
       await CRUD.Update(`users/${User.uid}/data/${id}`, { [dataName]: dataDetails })
       navigate("/");

    }

    useEffect(() => {
        fetchCardByID(id!);
    }, []);

    return <div>
        <h1>Update Data Page</h1>
        <h4>Name:</h4><br />
        <input type="text" value={dataName} onChange={(e) => setDataName(e.target.value)} />
        <h4>Details:</h4><br />
        <input type="text" value={dataDetails} onChange={(e) => setDataDetails(e.target.value)} /> <br />
        <button onClick={handleUpdate}>Update</button>
    </div>
}

export default UpdateData