import React from "react"
import "../styles/cart.css"
import Cart from "../components/Cart"

export default function CartPage (props) {
  return (
    <section className="cart-container">
      <div className="empty-text">
        {props.data.length === 0 && "Shopping Cart is Empty"}
      </div>
      <aside className="cart-info">
        {props.data.length >= 1 && <span>Total: ${props.price} </span>}
      </aside>
      <ul>
        {props.data.map((item, index) => {
          return (
            <Cart
              key={index}
              id={item.id}
              title = {item.title}
              image = {item.image}
              description= {item.description}
              price = {item.price}
              handleDelete={props.handleDelete}
            />
          )
          })
        }
      </ul>
    </section>
  )
}

// cart.map(x => {
//         return (
//           <Cart 
//             title={x.title} 
//             image={x.image}
//           />
//         )
//        })



  // const [cart, setCart] = React.useState([]) 
  // const {id} = useParams()
  // console.log(id)
  // if (id === undefined) {
  //   console.log("its undefined")
  // }

  // if (id !== undefined) {
  //   useEffect(() => { 
  //     fetch('https://fakestoreapi.com/products?limit=20')
  //           .then(res=>res.json())
  //           .then(data=> findProduct(data))
  //     }, [id]) 
  // }

  // const findProduct = (data) => {
  //   const result = data.filter(x => x.id === Number(id))
  //   console.log(result[0])
  //   setCart(prevCart => [...prevCart, result[0]]) 
 
  // }