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
   <div className="card_name_div"> 
    <h3 className="card_name">{field}</h3>
    </div>
    <h3 className="card_details">{value}</h3>
    <div className="card_functions">
   <button className="func_buttons" onClick={() => handleDelete()}>Delete</button>
   <button className="func_buttons" onClick={() => handleUpdate()}>Update</button>
   <button className="func_buttons" onClick={() => handleCopy(value)}>Copy</button>
   </div>
   <div className="date_part">{new Date().toLocaleTimeString()}</div>
    </div>
}

export default DataCard; 