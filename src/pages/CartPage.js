//React...
import React from "react"

//Components...
import Cart from "../components/Cart"

//Styles...
import "../styles/cart.scss"

export default function CartPage ({data, price, deleteCartItem}) {
  return (
    <section className="cart-container">
      <div className="empty-text">
        {data.length === 0 && "Shopping Cart is Empty"}
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
            {data.length > 0 && 
              <span>Subtotal({data.length} items): ${price} </span>
            }
            <form>
              <button>Checkout</button>
            </form>
          </aside>
        } 
      </div>
    </section>
  )
}