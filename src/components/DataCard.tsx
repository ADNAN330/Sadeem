import { useNavigate } from "react-router-dom";
import CRUD from "../firebase/CRUD";
import { auth } from '../firebase/config.ts'

const DataCard = ({ field, value, cardId, onDeleted }: { field: string; value: string; cardId: string, onDeleted: Function }) => {
    
    const userId = auth.currentUser?.uid;
    const navigate = useNavigate();

    const handleDelete = async () => {
        await CRUD.Delete(`users/${userId}/data/${cardId}`);
        onDeleted();
    }
     const handleUpdate = async () => {
       navigate(`/UpdateData/${cardId}`);
    }
    const handleCopy = (value:string) => {
       window.navigator.clipboard.writeText(value);
    }
    
    return <div className={'dataCard'}>
    <h3>{field}</h3>
    <h3>: {value}</h3>
   <button onClick={() => handleDelete()}>Delete</button>
   <button onClick={() => handleUpdate()}>Update</button>
   <button onClick={() => handleCopy(value)}>Copy</button>
    </div>
}

export default DataCard; 