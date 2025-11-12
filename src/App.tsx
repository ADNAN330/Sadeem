import {Routes, Route } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./Pages/Home.tsx"
import Login from "./Pages/Login.tsx"
import AddData from "./Pages/AddData.tsx";
import UpdateData from "./Pages/UpdateData.tsx";
function App() {

  return (
   <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
    <Route path="/AddData" element={<AddData/>}/>
    <Route path="/UpdateData/:id" element={<UpdateData/>}/>
   </Routes>
  )
}

export default App
