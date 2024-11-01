//React...
import React from "react"

//Components...
import Cart from "../components/Cart"

//Images...
import shopImg from '../images/shopBg.jpg'

//Styles...
import "../styles/cart.scss"


export default function CartPage ({data, price, deleteCartItem}) {
  return (
    <section className="cart-container">
      <div className="shop-img-container">
        <div className="white-overlay">
          <h1>Cart</h1>
        </div>
        <img src={shopImg} alt="shopping page background top photo"/>
      </div>
      <div className="empty-text">
        {data.length === 0 && "Empty..."}
      </div>
      <div className="cart-items-container">
        <ul>
          {data.map((item, index) => {
            return (
              <Cart
                key={index}
                id={item.id}
                title = {item.title}  
                image = {item.image}
                description= {item.description}
                price = {item.price}
                quantity = {item.quantity}
                deleteCartItem={deleteCartItem}
              />
            )
            })
          } 
        </ul>
        {data.length > 0 &&
          <aside className="cart-order-block">
            <h2>Cart Total</h2>
            {data.length > 0 && 
              <span>Subtotal({data.length} items): ${price} </span>
            }
            <button>Continue</button> 
          </aside>
        } 
      </div>
    </section>
  )
}