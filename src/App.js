import React, {useEffect, useState} from 'react';
import Nav from "./components/Nav"
import MobileNav from "./components/mobile-nav"
import Home from "./pages/Home"
import Products from "./pages/Products"
import CartPage from "./pages/CartPage"
import DisplayInfo from "./components/displayInfo"
import {Routes, Route} from "react-router-dom"
import "../src/style.css"


export function App() {
  const [cart, setCart] = useState([])     
  const [price, setPrice] = useState(0)
  const [realCart, setRealCart] = useState([])

  useEffect(() => { 
    fetch('https://fakestoreapi.com/products?limit=20')
          .then(res=>res.json())
          .then(data=> setCart(data))
    }, []) 
  
  function handleClick(event) {
    const id = event.target.getAttribute("data-id")
    const result = cart.filter(x => x.id === Number(id))
    setPrice(prevPrice => prevPrice + result[0].price)
    setRealCart(prevCart => [...prevCart, result[0]]) 
  }
  function handleDelete(event) {
    let dltPrice = event.target.parentElement.getAttribute("data-price");
    let dltTitle = event.target.parentElement.getAttribute("data-title");
    setPrice(prevPrice => prevPrice - dltPrice )
    setRealCart(prevCart => prevCart.filter(x => x.title !== dltTitle))
  }

  const [hamMenu, setHamMenu] = useState(false)

  function handleClickMobile () {
    setHamMenu(!hamMenu)
  }
  
  return (
      <div className='App'>
        <div></div>
        <Nav className={"nav-container"} cartSize={realCart.length}/>
        <span className={"mobile-menu"} onClick={handleClickMobile}></span>
        <MobileNav 
          className={hamMenu ? "nav-mobile active": "nav-mobile"}
          remove={handleClickMobile}
        />
        <section className="content-section">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Products" element={<Products />}></Route>
            <Route path="/CartPage" element={<CartPage data={realCart} price={price} handleDelete={handleDelete}/>}></Route>
            <Route path={`/displayInfo/:id`} element={<DisplayInfo onClick={handleClick} />}></Route>
          </Routes> 
        </section> 
      </div>
  );
}