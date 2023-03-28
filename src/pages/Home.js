//React...
import {React}  from "react"
import {Link, Outlet, useLocation} from "react-router-dom"

//Components...
import StockGrid from "../components/StockGrid"
import HomeCards from "../components/home-cards"

//Icons...
import PinkIcon from "../images/Icon.png"
import BrownIcon from "../images/BrownIcon.png"
import Frame from "../images/Frame.png"

//Styles...
import "../styles/Home.scss"

export default function Home () {
  const location = useLocation();
  const path = location.pathname;

  return (
    <section className="section">
      <header className="home-section-first">
        <div>
          <h1>Make Shopping Easier</h1>
          <p>Over 100 Name brands from across the globe.</p>
        </div>
        <Link to="/Products">
          <button className="home-btn">Shop!</button>
        </Link>
      </header>
      <main>
        <section className="categories-homePage">
          <h2>Explore by category</h2>
          <div className="interactive-categories">
            <div className="categories-nav">
              <div className="search-bar">
                <input type="text" placeholder="Search"></input>
              </div>
              <nav>
                <Link to="/electronics">Electronics</Link>
                <Link to="/jewelery">Jewelery</Link>
                <Link to="/men's">Men's</Link>
                <Link to="/women's">Women's</Link>
              </nav>
            </div>
            <div className="categories-grid">
              {/* Shows the categories and images that come with that category. */}
              {path === "/" ? <StockGrid/> : <Outlet/>}
            </div>
          </div>
        </section>
        <section className="benefits-section">
          <h2>Benefits for your expediency</h2>
          <div className="benefits-info">
            <div>
              <img src={PinkIcon} alt="benefit picture"/>
              <h3>Payment Method</h3>
              <p>We offer flexible payment options, to make easier.</p>
            </div>
            <div>
              <img src={BrownIcon} alt="benefit picture"/>
              <h3>Return Policy</h3>
              <p>You can return a product within 30 days.</p>
            </div>
            <div>
              <img src={Frame} alt="benefit picture"/>
              <h3>Custumor Support</h3>
              <p>Our custumor support is 24/7.</p>
            </div>
          </div>
        </section>
        <section className="featured-products">
          <div className="bigBlock">
              <h2>Our</h2>
              <h2>Featured Products</h2>
              <p>Stolen of some free API</p>
          </div>
          <div>
            <HomeCards 
              id={7}
              title="White Gold Plated Princess"
              image="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
            />
            <HomeCards 
              id={9}
              title="Fjallraven - Foldsack"
              image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            />
            <HomeCards 
              id={17}
              title={"Rain Jacket Windbreaker "}
              image="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
            />
          </div>
        </section> 
        <section id="newsletter" className="newsletter-join-section">
          <div className="img"></div>
          <div className="newsletter-info">
            <form className="sign-up-box">
              <h2>Join Our</h2>
              <h2>Newsletter</h2>
              <p>Receive exclusive deals, discounts and many offers.</p>
              <input placeholder="Enter your email"/>
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </section>
      </main>
      <footer>
        Copyright @Bashar M.
      </footer>
    </section>
  )
}