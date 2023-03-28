//React...
import React from "react"
import {Link} from "react-router-dom"

//Styles...
import "../styles/cart.scss"

export default function Cart({id, title, price, image, description, deleteCartItem, quantity}) {
  return (
    <li className="cart-list" data-price={price} data-title={title}>
      <Link className="image-holder" to={`/displayInfo/${id}`}>
        <img src={image} />
      </Link>
      <div className="cart-product-details">
        <h2>{title}</h2>
        <p>{description.substring(0, 204)}...</p>
        <span className="qnty-cart">
          Qty: {quantity}
          <button 
            onClick={deleteCartItem}
            data-id={id}
            data-price={price}
            data-title={title}
            data-qty={quantity}
          >
              Delete
          </button>
        </span>
      </div>
      <div className="single-price-cart">${price}</div>
    </li>
  )
}
