//React...
import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

//Components...
import "../components/Loading/loading.scss"
import Rating from "react-rating"

//React icons...
import {FaStar, FaRegStar} from "react-icons/fa"

//Styles...
import "../styles/Card.scss"


const InfoCard = ({setQuantity, addCartItem, cartItems}) => {
  const [product, setProduct] = useState([])
  const {id} = useParams()

  //Loading animation confirmation state...
  const [loading, setLoading] = useState(true)

  useEffect(() => { 
    try {
      getUserProducts();
    } catch (error) {
      console.log(error)
    }
  }, [id]) 
  
  const getUserProducts = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await res.json()
    setProduct(data)
    setLoading(false)
  }

  const presentInCart = () => {
    return cartItems.filter(item => item.id === +id).length ? true : false
  }

  return (
    <section className="single-product-details">
      {loading &&
      <section className="single-prod-loading">
        <div className="loading-image linear-background"></div>
        <div className="loading-details">
          <div className="ld-title linear-background"></div>
          <div className="ld-title second linear-background"></div>
          
          <div className="ld-para linear-background"></div>
          <div className="ld-para second linear-background"></div>
          <div className="ld-para third linear-background"></div>
          <div className="ld-para fourth linear-background"></div>
        </div>
      </section>
      }
      {!loading &&
      <div className="single-wrap">
        <img 
          className="product-image"
          src={product.image} 
          height="160px"
          alt={product.title}
        />
        <article className="product-column">
          <h1 className="product-title">{product.title}</h1>
          <span className="product-rating-wrap">
            <div>Rating:</div> 
            <Rating
              emptySymbol={<FaRegStar />}
              fullSymbol={<FaStar />}
              initialRating={product.rating?.rate || 0}
              fractions={2}
              readonly={true}
            />    
            <div>({product.rating?.count})</div>
          </span> 
          <p className="price-tag">$<strong>{product.price}</strong></p>
          <label>
            Quantity: 
            <input 
              onChange={(e) => setQuantity(e.target.value)}
              className="quantity" 
              type="number" min='1' 
              max="10" placeholder="1"
            />
          </label>
          <p className="description">
            <span>Description: </span>
            {product.description}
          </p>
          {presentInCart() ?
            <button  
              className="cart-btn"
            >
                Added
            </button>
            :
            <button 
              onClick={addCartItem} 
              data-id={product.id} 
              className="cart-btn"
            >
              Add to Cart
            </button>
          }
        </article> 
      </div>
      }
    </section>
  )
}
export default InfoCard