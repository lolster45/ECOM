import React from "react"
import {Link} from "react-router-dom"

export default function Nav(props) {
  return ( 
    <section className={props.className}>
      <nav className="nav-bar">
        <h1>Bashar M.</h1>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/Products">PRODUCTS</Link></li>
          <li>
            <Link to="/CartPage">
            CART{props.cartSize > 0 &&
            <span className={"length"}>
                {props.cartSize ? props.cartSize : null}
            </span>}
            </Link>
          </li>
        </ul> 
      </nav>
    </section> 
  )
}