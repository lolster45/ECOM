//React...
import React, {useState} from 'react';
import {Routes, Route, Link} from "react-router-dom"

//Components...
import CatGrids from './components/Home-Grid/cat-grids';
import Nav from "./components/Nav"
import MobileNav from './components/Mobile-nav';
import DisplayInfo from "./components/displayInfo"

//Firebase...
import {auth} from "./firebase"
import { useAuthState } from 'react-firebase-hooks/auth';

//Pages...
import Home from "./pages/Home"
import Products from "./pages/Products"
import CartPage from "./pages/CartPage"
import AboutPage from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UserDashBoard from './pages/UserDashBoard';

//React icons...
import {GiHamburgerMenu} from "react-icons/gi"
import {CgProfile} from "react-icons/cg"

//Styles...
import "../src/style.scss"

export function App() {
  const [user] = useAuthState(auth)
  //CartItems state...
  const [cartItems, setCartItems] = useState([])
  //CartItem details state...
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(1);

  
  const addCartItem = async (event) => {
    const id = event.target.getAttribute("data-id");
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();

    setPrice(prevPrice => prevPrice + (data.price * quantity))
    setCartItems(prevCart => [{
      ...data,
      quantity: quantity
    },...prevCart]) 
    setQuantity(1)
  }

  const deleteCartItem = (event) => {
    let productID = event.target.getAttribute("data-id");
    let itemPrice = event.target.getAttribute("data-price");
    let qty = event.target.getAttribute("data-qty");

    setCartItems(prevCart => prevCart.filter(x => x.id !== +productID))
    setPrice(prevPrice => prevPrice - (itemPrice * qty ))
  }

  const [hamMenu, setHamMenu] = useState(false)

  const handleClickMobile = () => {
    setHamMenu(!hamMenu)
  }
  
  return (
      <div className='App'>
        <Nav className={"nav-container"} cartSize={cartItems.length}/>
        <span className={"mobile-menu"} >
          <Link to={user ? "/Dashboard" : "/signUp" }>
            {!user && <CgProfile/>}
            {user && user?.photoURL &&
              <img src={user.photoURL} alt="user profile picture"/> 
            }
            {user && !user?.photoURL &&
              <img src={new URL("https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max")} alt="anonymous profile picture"/>
            }
          </Link>
          <GiHamburgerMenu onClick={handleClickMobile}/>
        </span>
        <MobileNav 
          className={hamMenu ? "nav-mobile active": "nav-mobile"}
          remove={handleClickMobile}
        />
        <section className="content-section">
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path='Electronics' element={
                <CatGrids gridImg="gridOne"/>
              }/>
              <Route path='jewelery' element={
                <CatGrids gridImg="gridTwo"/>
              }/>
              <Route path="men's" element={
                <CatGrids gridImg="gridThree"/>
              }/>
              <Route path="women's" element={
                <CatGrids gridImg="gridFour"/>
              }/>
            </Route>
            <Route path="/AboutUs" element={<AboutPage />}></Route>
            <Route path="/Products" element={<Products />}></Route>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Dashboard" element={<UserDashBoard data={cartItems} />}></Route>
            <Route 
              path="/CartPage" 
              element={
                <CartPage 
                  data={cartItems}
                  price={price} 
                  deleteCartItem={deleteCartItem}
                />
              }>
            </Route>
            <Route 
              path={`/displayInfo/:id`} 
              element={
                <DisplayInfo 
                  cartItems={cartItems}
                  addCartItem={addCartItem} 
                  setQuantity={setQuantity}
                />
              }>
            </Route>
          </Routes> 
        </section> 
      </div>
  );
}