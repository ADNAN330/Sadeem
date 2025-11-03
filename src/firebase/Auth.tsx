//As for this, it's to handle logging in with google
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider} from "./config";

const SignIn = async() => {
    try {
    await signInWithPopup(auth, provider);
    }
    catch (error) {
        console.error("Error signing in: ", error);
        
    }
}

const SignOut = async() => {
    try {
    await signOut(auth)
    }
    catch (error) {
        console.error("Error signing out: ", error);
        
    }
}

export { SignIn, SignOut };