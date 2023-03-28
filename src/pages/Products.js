//React...
import React, {useState, useEffect}from "react"

//Components...
import Card from "../components/Card"
import FbShean from "../components/Loading/FbShean"

//Styles...
import "../styles/product-page.scss"
const Products = () => {
  const [arrayOfProd, setArrayOfProduct] = useState([])
  const [category, setCategory] = useState("electronics")
  const [pageNumber, setPageNumber] = useState(0)

  //Loading status...
  const [loading, setLoading] = useState(true)

  const getCategoryProducts = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const data = await res.json()
    setArrayOfProduct(data)
    setLoading(false)
  }

  useEffect(() => {
    try {
      setLoading(true)
      getCategoryProducts()
    } catch (error) {
      console.log(error) //we should make them navigate to 404 page if error...
    }
  }, [category, pageNumber]) 

  const handleChange = (event) => {
    setPageNumber(0)
    setCategory(event.target.value)
  }
  const changePageNumber = () => {
    setPageNumber(prev => prev + 20)
  }
  const changePageNumberBack = () => {
    setPageNumber(prev => prev - 20)
  }

  return (
    <section>
      <nav className="nav-filter">
        <label>Category: 
          <select onChange={handleChange}>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's fashion</option>
            <option value="women's clothing">Women's fashion</option>
          </select>
        </label>
      </nav> 
      <div className="products-page">
        {loading &&
          <>
            <FbShean/>
            <FbShean/>
            <FbShean/>
            <FbShean/>
            <FbShean/>
            <FbShean/>
            <FbShean/>
            <FbShean/>
            <FbShean/>
            <FbShean/>
          </>
        }
        {!loading && 
          arrayOfProd.map((item, index) => {
            return (
              <Card 
                key={index}
                id={item.id}
                price={item.price}
                title = {item.title}
                image = {item.image}
              />
            )
          })
        } 
      </div>
      <div className="page-number-nav">
        {pageNumber > 1 && <button onClick={changePageNumberBack}>Go Back</button>}
        {arrayOfProd.length === 20 && <button onClick={changePageNumber}>Next Page</button>}
      </div>
    </section>
  )
}

export default Products