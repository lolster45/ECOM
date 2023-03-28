import React from "react"
import {Link} from "react-router-dom"

import "../styles/home-cards.scss"

export default function HomeCards({id, title, image}) {
  return (
    <Link to={`/displayInfo/${id}`}  className="home-card">
      <img src={image} alt={`${title} image`}/>
      <h2>{title}</h2>
      <Link to="/Products">
        <button>SHOP</button>
      </Link>
    </Link >
  )
}

