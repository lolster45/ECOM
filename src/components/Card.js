//React...
import {Link} from "react-router-dom"

export default function Card({id, title, price, image, description, category}) {
  return (
    <Link to={`/displayInfo/${id}`} className="product-card">
      <span className='product-price'>${price}</span>
      {image && <img src={image} alt={title}/>}
      <div> 
        <span className="category">{category}</span>
        <h1 className="title">{title.substring(0, 20)}</h1> 
        <p className="description">{description}</p> 
      </div> 
    </Link>
  )
}