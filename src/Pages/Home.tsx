import { SignOut } from '../firebase/Auth.tsx'
import CRUD from '../firebase/CRUD.tsx'
import { useEffect, useState } from 'react'
import { auth } from '../firebase/config.ts'

import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();

  const [user, setUser] = useState<any>();
  const [dataList, setDataList] = useState<any>(null)
  
  useEffect(()=>{

    const trackUser = auth.onAuthStateChanged((currentUser) => {
         setUser(currentUser);
    });


    const fetchData = async() => {
      const data = await CRUD.Read("users/adnan");
      setDataList(JSON.stringify(data));
    };
    fetchData();
        return () => trackUser();
}, [dataList])

  return (
    <>
     <h1>Hello {user?.displayName}</h1>
     <button onClick={() =>{navigate("/AddData")}}>Create data</button>
     <button onClick={() =>{CRUD.Update("users/adnan", {name: "Hal"})}}>Update data</button>
     <button onClick={() =>{CRUD.Delete("users/adnan")}}>Delete data</button>
     <button onClick={SignOut}>Log out</button>
     <div className='outer'>
      <div className="detailsDiv">
        <h3 className='name'>Name</h3>
        <h3 className='type'>Type</h3>
      </div>
      <div className="dataList">
        <div className="dataCard">Item 1</div>
        <div className="dataCard">Item 2</div>
        <div className="dataCard">{dataList}</div>
      </div>

     </div>
    </>
  )
}

export default Home
