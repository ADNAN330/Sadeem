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
    <div className="login_page">
      <div className="login_bg_containter"><div className="login_bg">
      </div></div>
      <div className="logo_and_name">
        <div className="logo"><img src="src\inputs\StarsEmoji.png" alt="" /></div>
        <div className="sadeem"><h1>Sadeem</h1></div>
        <div className="login_button_container">
      <button className="login_button" onClick={SignIn}>Login with google</button>
      </div>
      </div>
    </div>
  );
};

export default Login;
