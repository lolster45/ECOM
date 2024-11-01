
//React...
import React from "react"
import {Link} from "react-router-dom"
import { useContext } from "react"
import { MyContext } from "../App"

//Styles...
import "../styles/home-cards.scss"

export default function HomeCards({id, title, image}) {

  const {handleTransition} = useContext(MyContext)



  return (
    <Link onClick={handleTransition} to={`/displayInfo/${id}`}  className="home-card">
      <img src={image} alt={`${title} image`}/>
      <div className="card-bottom">
        <h2>{title}</h2>
        <button>SHOP</button>
      </div>
    </Link >
  )
}

