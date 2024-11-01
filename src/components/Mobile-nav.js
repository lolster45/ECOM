//React..
import {Link} from "react-router-dom"

//Firebase...
import {auth} from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"

//Styles...
import "../styles/mobile-nav.scss"
import { useContext, useState } from "react"
import { MyContext } from "../App"


export default function MobileNav({className}) {
  const [user] = useAuthState(auth)

  //MyContext...
  const {handleTransition, handleClickMobile} = useContext(MyContext);

  const handleTranstionAndMobileMenu = () => {
    handleClickMobile();
    handleTransition();
  }

  return(
    <nav className={className} onClick={handleTranstionAndMobileMenu}>
      <ul onClick={(e) => e.stopPropagation()}>
        <Link onClick={handleTranstionAndMobileMenu} to="/">Home</Link>
        <Link onClick={handleTranstionAndMobileMenu} to="/Products">Products</Link>
        <Link onClick={handleTranstionAndMobileMenu} to="/AboutUs">About Us</Link>
        <Link onClick={handleTranstionAndMobileMenu} to="/CartPage">Cart</Link>
        <Link onClick={handleTranstionAndMobileMenu} to={user ? "/Dashboard" : "/signUp" }>Dashboard</Link>
      </ul> 
    </nav>
  )
}