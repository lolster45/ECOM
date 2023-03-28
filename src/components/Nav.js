//React...
import React from "react"
import {Link} from "react-router-dom"

//Firebase...
import { auth } from "../firebase"
import {useAuthState} from "react-firebase-hooks/auth"

//Icons...
import {BiSearch} from "react-icons/bi"
import {BsFillCartFill} from "react-icons/bs"
import {CgProfile} from "react-icons/cg"

export default function Nav(props) {

  const [user] = useAuthState(auth)

  return ( 
    <nav className={props.className}>
      <div className="logo">Logo</div>
      <ul className="links-to-page">
        <Link to="/">Home</Link>
        <Link to="/Products">Products</Link>
        <Link to="/AboutUs">About</Link>
      </ul>
      <div className="icons-wrap">
        <Link to="">
          <BiSearch/>
        </Link>
        <Link to="/CartPage" className="cart-icon">
          <BsFillCartFill/>
          {props.cartSize > 0 && 
            <div>
              <span>{props.cartSize}</span>
            </div>
          }
        </Link>
        <Link to={user ? "/Dashboard" : "/signUp" } className="user-profile-picture">
          {!user &&
            <CgProfile/>
          }
          {user && user?.photoURL &&
            <img src={user.photoURL} alt="user profile picture"/> 
          }
          {user && !user?.photoURL &&
            <img src={new URL("https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max")} alt="anonymous profile picture"/>
          }
        </Link>
      </div>
    </nav> 
  )
}