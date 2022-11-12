import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import "../styles/Card.css"

const InfoCard = (props) => {
  const [product, setProduct] = useState([])
  const {id} = useParams()

  useEffect(() => { 
    fetch('https://fakestoreapi.com/products?limit=20')
          .then(res=>res.json())
          .then(data=> findProduct(data))
    }, [id]) 

  const findProduct = (data) => {
    const result = data.filter(x => x.id === Number(id))
    setProduct(result[0])
  }

  return (
    <section className="klobet">
      <img 
        className="product-des-cont"
        src={product.image} 
        height="160px"
        alt={product.title}
      />
      <aside className="product-column">
        <div className="product-details"> 
          <h1>{product.title}</h1>
        </div> 
        <span>Description: </span>
        <p className="description">{product.description}</p>
        <span className="price-semantic">For: </span>
        <p className="price-tag">${product.price}</p>
        <button onClick={props.onClick} data-id={product.id} className="cart-btn">Add to Cart</button>
      </aside>
    </section>
  )
}
export default InfoCard
