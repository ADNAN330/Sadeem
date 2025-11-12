import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { auth } from '../firebase/config.ts'

import CRUD from '../firebase/CRUD.tsx'
import { SignOut } from '../firebase/Auth.tsx'

import DataCard from '../components/DataCard'


function Home() {
  const userId = auth.currentUser?.uid;
  const navigate = useNavigate();

  const [user, setUser] = useState<any>();
  const [dataList, setDataList] = useState<any[]>([])

  

    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
         setUser(currentUser);
    });


    const fetchData = async () => {
      const data = await CRUD.ReadAll(`users/${userId}/data`);
      if (data) {
        const formatted = data.map((doc: any) => {
        const key = Object.keys(doc.data)[0];
        const value = doc.data[key];
        return {id: doc.id, field: key, value };
      });
      setDataList(formatted);
    }
  };
  useEffect(()=>{
  fetchData();

  return () => unsubscribe();
}, []);

  return (
    <>
     <h1>Hello {user?.displayName}</h1>
     <button onClick={() =>{navigate("/AddData")}}>Create data</button>
     <button onClick={() =>{CRUD.Update(`users/${userId}/data`, {name: "Hal"})}}>Update data</button>
     <button onClick={() =>{CRUD.Delete(`users/${userId}/data`)}}>Delete data</button>
     <button onClick={SignOut}>Log out</button>
     <div className='outer'>
      <div className="detailsDiv">
        <h3 className='name'>Name</h3>
        <h3 className='type'>Type</h3>
      </div>
      <div className="dataList">

     {dataList.map((item, i) => (
       <DataCard key={i} field={item.field} value={item.value} cardId={item.id} onDeleted={fetchData} />
    ))}
      </div>

     </div>
    </>
  )
}

export default Home



/*
Trash can
 let f = (x:number) =>{

    const result = (x^5-x) / (1+x^2);

    console.log(result % 2 ? "Odd at x = " + x : "Even at x = " + x)
    
  }
 for(let i = 0; i<100; i++)
    f(i);
*/ 