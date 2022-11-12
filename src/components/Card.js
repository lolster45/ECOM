import React from 'react'
import {Link} from "react-router-dom"

export default function Card(props) {
  return (
    <article className={"products-container"}>
      <img src={props.image} height="160px" alt={props.title}/>
      <div> 
        <h1>{props.title && props.title.substring(0, 20)}...</h1> 
        <p>{props.description && props.description.substring(0, 34)}</p>
        <Link className="card-btn" to={`/displayInfo/${props.id}`}>Check Out!</Link>
      </div> 
    </article>
  )
}
//Added conditional rendering to not affect other uses of this comp
