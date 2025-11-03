import { SignIn } from "../firebase/Auth"

const Login = () => {

    return (
        <div>
            <button onClick={SignIn}>Login</button>


        </div>
    )
}

export default Login