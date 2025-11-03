import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }: any) => {
  const [user, setUser] = useState<any>(undefined);

  useEffect(() => {
   
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });


    return unsubscribe;
  }, []);


  if (user === undefined) return <div>Loading...</div>;


  if (!user) return <Navigate to="/login" replace />;


  return children;
};

export default ProtectedRoute;
