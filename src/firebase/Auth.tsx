//As for this, it's to handle logging in with google
import { signInWithRedirect, signOut } from "firebase/auth";
import { auth, provider} from "./config";

const SignIn = async() => {
    try {
    await signInWithRedirect(auth, provider);
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