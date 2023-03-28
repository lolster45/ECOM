//React...
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

//Firebase...
import {auth, googleProvider} from "../firebase"
import {createUserWithEmailAndPassword, signInWithPopup} from "firebase/auth"

//React icons...
import {FcGoogle} from "react-icons/fc"

//Styles...
import "../styles/userAccountInfo.scss"


const SignUp = () => {
    const [email, setEmail] = useState("")    
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
   
    
    const [showError, setShowError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("")
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


    const signUp = async () => {
        if(regEx.test(email)) {
            try {
                await createUserWithEmailAndPassword(auth, email, password)
                setEmail("")
                setPassword("")
                navigate("/")
                throw new Error()
            } catch (error) {
                setShowError(true)
                setErrorMsg("Email already taken...")
            }
        } else {
            setShowError(true)
            setErrorMsg("Invalid Email...")
        }
    }

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
            navigate("/")
        } catch (error) {
            console.log9("error signing in with google...")
        }
    }

    return (
        <section className="SL-page">
            <div className="SL-image-wrap"></div>
            <div className="SL-form">
                <h2>Sign Up</h2>
                <FcGoogle onClick={signInWithGoogle} className="google-icon"/>
                {showError && <span className="sign-up-error">{errorMsg}</span>}
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
                <button onClick={signUp}>Sign Up</button>
                <p className="login-user-link">Already have an account? Click <Link to="/Login">Here</Link></p>
            </div>
        </section>
    )
}

export default SignUp