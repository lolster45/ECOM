import React from "react"
import {Link} from "react-router-dom"
import "../styles/mobile-nav.css"

export default function mobileNav(props) {
  return(
    <nav onClick={props.onClick} >
      <ul className={props.className}>
        <li><Link onClick={props.remove} to="/">Home</Link></li>
        <li><Link onClick={props.remove} to="/Products">Products</Link></li>
        <li><Link onClick={props.remove} to="/CartPage">Cart</Link></li>
      </ul> 
    </nav>
  )
}