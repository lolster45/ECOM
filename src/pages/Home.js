//React...
import { React }  from "react"
import { Link } from "react-router-dom"

//Framer motion...
import { motion } from 'framer-motion';

//Components...
import HomeCards from "../components/home-cards"

//React Icons/Icons...
import PinkIcon from "../images/Icon.png"
import BrownIcon from "../images/BrownIcon.png"
import Frame from "../images/Frame.png"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

//Images...
import Woman from '../images/womens.jpg'
import VivoFold from '../images/vivo(fold).jpg'
import Mens from '../images/mensCloth.jpg'
import Furniture from '../images/main(furniture).jpg'
import Jewerly from '../images/jewelry.jpg'
import FurnitureTwo from '../images/furnitureBgTwo.jpg'

//Styles...
import "../styles/Home.scss"


export default function Home () {

  return (
    <section className="section">
      <header className="home-section-first">
        <div>
          <h1>Discover The Ease of Buying</h1>
          <p>Over 100 Name brands from across the globe, go and explore our quality selection of handcrafted goods. Happy Halloween!</p>
          <Link to="/Products">
            <button className="home-btn">Shop!</button>
          </Link>
        </div>
      </header>
      <main>
        <section className="categories-section">
          <header className="category-header">
            <h2>Browse Our Selection</h2>
            <p>Top of the line High Quality Items Only Available Here</p>
          </header>


          <div>

            <Link to='/'>

              <div className="category-overlay">

                <div>
                  <span>Womans</span>
                  <MdKeyboardDoubleArrowRight/>
                </div>

              </div>

              <img src={Woman} alt=''/>

            </Link>



            <Link to='/'>
              <div className="category-overlay">
                <div>
                  <span>Tech</span>
                  <MdKeyboardDoubleArrowRight/>
                </div>
              </div>
              <img src={VivoFold} alt=''/>
            </Link>
            <Link to='/'>
              <div className="category-overlay">
                <div>
                  <span>Furniture</span>
                  <MdKeyboardDoubleArrowRight/>
                </div>
              </div>
              <img src={Furniture} alt=''/>
            </Link>
            <Link to='/'>
              <div className="category-overlay">
                <div>
                  <span>Mens</span>
                  <MdKeyboardDoubleArrowRight/>
                </div>
              </div>
              <img src={Mens} alt=''/>
            </Link>
            <Link to='/'>
              <div className="category-overlay">
                <div>
                  <span>Jewerly</span>
                  <MdKeyboardDoubleArrowRight/>
                </div>
              </div>
              <img src={Jewerly} alt=''/>
            </Link>
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
        <motion.section 
          initial={{opacity: 0, y: 150}}
          whileInView={{opacity: 1, y: 0}}
          transition={{ duration: 0.5, ease: "easeInOut"}}
          viewport={{once: true, amount: 0.5}}
          className="featured-products"
        >
          <div className="featured-left">
              <h2>Our Featured Products</h2>
              <p>Stolen of some free API</p>
              <Link>
                <button>Exlore More</button>
              </Link>
          </div>
          <div className="featured-right">
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
        </motion.section> 
        <motion.section 
          viewport={{once: true, amount: 0.6}}
          id="newsletter" 
          className="newsletter-join-section"
        >
          <motion.img 
            src={FurnitureTwo} 
            initial={{x: -100, opacity: 0}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.3}}
            viewport={{once: true, amount: 0.6}}

            className="img" 
            alt="Image of furniture in a cool design"
          />
          <motion.div 
            initial={{x: 100, opacity: 0}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.3}}
            viewport={{once: true, amount: 0.6}}
            className="newsletter-info"
          >
            <form className="sign-up-box">
              <h2>Join Our</h2>
              <h2>Newsletter</h2>
              <p>Receive exclusive deals, discounts and many offers.</p>
              <input placeholder="Enter your email"/>
              <button type="submit">Subscribe</button>
            </form>
          </motion.div>
        </motion.section>
      </main>
    </section>
  )
}