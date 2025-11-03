import {Routes, Route } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./Pages/Home.tsx"
import Login from "./Pages/Login.tsx"
function App() {

  return (
   <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
   </Routes>
  )
}

export default App
