import {React, useEffect}  from "react"
import "../styles/Home.css"
import {Link} from "react-router-dom"
import HomeCards from "../components/home-cards"
import Card from "../components/Card"
 

export default function Home () {
  return (
    <section className="section">
      <section className="home-section-first">
        <div>
          <h1>Make Shopying Easier</h1>
          <p>Over 100 Name brands from across the globe.</p>
        </div>
        <Link to="/Products">
          <button className="home-btn">Shop!</button>
        </Link>
      </section>
      <main>
        <HomeCards 
          title={"ELECTRONICS"}
          btnColor={"home-btn electronics"}
          className={"sub-column first"} 
        />
        <HomeCards 
          title={"EXPLORE"}
          btnColor={"home-btn allProducts"}
          className={"sub-column second"} 
        />
        <HomeCards 
          title={"WOMEN'S"}
          btnColor={"home-btn womenBtn"}
          className={"sub-column third"} 
        />
      </main>
      <section className={"featured-products"}>
        <h2>FEATURED PRODUCTS</h2>
        <div>
          <Card 
            id={16}
            title = {"Lock and Love Women's R"}
            image = {"https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"}
          />
          <Card 
            id={14}
            title = {"Samsung 49-Inch – Super Ultrawide Screen QLED"}
            image = {"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"}
          />
          <Card 
            id={6}
            title = {"Solid Gold Petite Micropave"}
            image = {"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"}
          />
        </div>
      </section>
      <footer>
        Copyright @Bashar M.
      </footer>
    </section>
  )
}

