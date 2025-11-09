import CRUD from "../firebase/CRUD";
import { auth } from '../firebase/config.ts'

const DataCard = ({ field, value, cardId }: { field: string; value: string; cardId: string }) => {
    
    const userId = auth.currentUser?.uid;

    return <div className={'dataCard'}>
    <h3>{field}</h3>
    <h3>: {value}</h3>
   <button onClick={() =>{CRUD.Delete(`users/${userId}/data/${cardId}`)}}>Delete data</button>
    </div>
}

export default DataCard; 