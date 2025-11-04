import { useNavigate } from 'react-router-dom';
import CRUD from '../firebase/CRUD.tsx'

const AddData = () => {
  const navigate = useNavigate();
  function AddDataBtn() {
      CRUD.Create("users/adnan", {name: "Adnan Is Added"})
      console.log("Data Added");
      navigate("/");
  }
 return <>
 <button onClick={() => navigate("/")}>Back</button>
 <h1>Add Data </h1>
 <button onClick={() => AddDataBtn()}>Something Important or that what it seems like</button>
 </>
}

export default AddData;