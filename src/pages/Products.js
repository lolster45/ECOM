import React from "react"
import "../styles/product-page.css"
import Card from "../components/Card"

const Products = () => {
  const [arrayOfProd, setArrayOfProduct] = React.useState([])
  const [category, setCategory] = React.useState("electronics")

  React.useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}?limit=20`) 
      .then(res=>res.json())
      .then(json=> setArrayOfProduct(json)) 
  }, [category])  

  React.useEffect(() => {
    fetch(`https://fakestoreapi.com/${category}/?limit=20`) 
      .then(res=>res.json())
      .then(json=> setArrayOfProduct(json)) 
  }, [category]) 

  function handleChange(event) {
    setCategory(event.target.value)
  }

  return (
    <section>
      <nav className="nav-filter">
        <label>Category: 
          <select onChange={handleChange}>
            <option value="electronics">Electronics</option>
            <option value="products">All Products</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">women's clothing</option>
          </select>
        </label>
      </nav>
      <div className="products-page">
        {arrayOfProd.map((item, index) => {
            return (
              <Card 
                key={index}
                id={item.id}
                title = {item.title}
                image = {item.image}
                price = {item.price}
              />
            )
          })
        }
      </div>
    </section>
  )
}
export default Products