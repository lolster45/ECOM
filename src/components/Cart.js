import React from "react"
import {Link} from "react-router-dom"
import "../styles/cart.css"

export default function Cart(props) {
  return (
    <li className="cart-list" data-price={props.price} data-title={props.title}>
      <Link className="image-holder" to={`/displayInfo/${props.id}`}>
        <img src={props.image} />
      </Link>
      <aside>
        <h2>{props.title}</h2>
        <p>{props.description.substring(0, 204)}...</p>
      </aside>
      <button onClick={props.handleDelete} className="dlt-btn">X</button>
    </li>
  )
}
