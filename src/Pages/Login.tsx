import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { SignIn } from "../firebase/Auth";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/"); 
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
      <button onClick={SignIn}>Login</button>
    </div>
  );
};

export default Login;
