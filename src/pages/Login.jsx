//React...
import { useState } from "react"
import { useNavigate } from "react-router-dom"

//Firebase...
import {auth} from "../firebase"
import {signInWithEmailAndPassword} from "firebase/auth"

//Styles...
import "../styles/userAccountInfo.scss"


const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")    
    const [password, setPassword] = useState("")
    const [error, SetError] = useState(false)

    const LoginUser = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            setEmail("")
            setPassword("")
            navigate("/")
        } catch (error) {
            SetError(true)
        }
    }

    return (
        <section className="SL-page">
            <div className="SL-form login">
                <h2>Log In</h2>
                {error && <p className="error-msg">Invalid Email or Password!</p>}
                <input 
                    placeholder="Email..."
                    value={email}
                    name={password}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    placeholder="Password..."
                    value={password}
                    name={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={LoginUser}>Sign in</button>
            </div>
        </section>
    )
}

export default Login