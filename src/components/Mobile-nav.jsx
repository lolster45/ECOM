//React..
import {Link} from "react-router-dom"

//Firebase...
import {auth} from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"

//Styles...
import "../styles/mobile-nav.scss"


export default function MobileNav(props) {
  const [user] = useAuthState(auth)

  return(
    <nav onClick={props.onClick} >
      <ul className={props.className}>
        <Link onClick={props.remove} to="/">Home</Link>
        <Link onClick={props.remove} to="/Products">Products</Link>
        <Link onClick={props.remove} to="/AboutUs">About Us</Link>
        <Link onClick={props.remove} to="/CartPage">Cart</Link>
        <Link onClick={props.remove} to={user ? "/Dashboard" : "/signUp" }>Dashboard</Link>
      </ul> 
    </nav>
  )
}