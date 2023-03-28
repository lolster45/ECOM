//React...
import {Link} from "react-router-dom"

export default function Card({id, title, price, image, description}) {
  return (
    <Link to={`/displayInfo/${id}`} className="products-container">
      <span className='product-price'>${price}</span>
        {image && <img src={image} height="160px" alt={title}/>}
      <div> 
        <h1>{title.substring(0, 20)}</h1> 
        <p>{description}</p> 
      </div> 
    </Link>
  )
}