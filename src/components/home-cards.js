import React from "react"
import {Link} from "react-router-dom"
import "../styles/home-cards.css"

export default function HomeCards(props) {
  return (
    <section className={props.className}>
      <aside>
        <h2>{props.title}</h2>
      </aside>
      <Link to="/Products">
        <button className={props.btnColor}>SHOP</button>
      </Link>
    </section>
  )
}