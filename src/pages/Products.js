//React...
import React, {useState, useEffect}from "react"

//Components...
import Card from "../components/Card"
import FbShean from "../components/Loading/FbShean"

//React icons...
import { IoFilterOutline } from "react-icons/io5";
import { CgLayoutGrid } from "react-icons/cg";

//Images...
import shopImg from '../images/shopBg.jpg'

//Styles...
import "../styles/product-page.scss"

const Products = () => {

  //Holds the data from the products API...
  const [arrayOfProd, setArrayOfProduct] = useState([]);

  //Filters on the products being displayed...
  const [category, setCategory] = useState("electronics");

  //Page number on which product page you are on...
  const [pageNumber, setPageNumber] = useState(0)

  //Loading status...
  const [loading, setLoading] = useState(true)

  const getCategoryProducts = async () => {

    if(category === '') {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setArrayOfProduct(data);
        setLoading(false)
        
      } 
      catch (error) {
        console.log(error, 'error fetching all products...')
      }
    }
    else {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        const data = await res.json();
        setArrayOfProduct(data)
        setLoading(false)
      } 
      catch (error) {
        console.log(error, 'error fetching data from api...')
      }
    }
  }


  useEffect(() => {

    setLoading(true)
    getCategoryProducts();

  }, [category, pageNumber]);


  //Navigation for pagination...
  const handleChange = (event) => {
    setPageNumber(0)
    setCategory(event.target.value)
  }
  const changePageNumber = () => {
    setPageNumber(prev => prev + 20)
  }
  const changePageNumberBack = () => {
    setPageNumber(prev => prev - 20)
  }


  const [activeCategory, setActiveCategory] = useState(false);
  const handleCategoryChange = (e) => {
    setActiveCategory(false)
    const category = e.target.getAttribute('data-val');
    setCategory(category);
  }


  return (
    <section className="products-page">
      <div className="shop-img-container">
        <div className="white-overlay">
          <h1>Products</h1>
        </div>
        <img src={shopImg} alt="shopping page background top photo"/>
      </div>
      <nav className="nav-filter">
        <div className="nav-wrap">
          <div className="left-nav">
            <div className="options">
              <div className="filter-btn">
                <IoFilterOutline/>
                Filter
              </div>
              <div className="layout-btn">
                <CgLayoutGrid/>
                Layout
              </div>
            </div>
            <div className="results-length">{arrayOfProd.length} results</div>
          </div>
          <div className="right-nav">
              <div 
                onClick={() => setActiveCategory(true)} 
                className="display-category"
              >
                {category || 'All'}
              </div>
              {
                activeCategory &&
                <div className="drop-down-menu">
                  <div onClick={handleCategoryChange} data-val={''}>All</div>
                  <div onClick={handleCategoryChange} data-val={'electronics'}>Electronics</div>
                  <div onClick={handleCategoryChange} data-val="jewelery">Jewelery</div>
                  <div onClick={handleCategoryChange} data-val="men's clothing">Men's fashion</div>
                  <div onClick={handleCategoryChange} data-val="women's clothing">Women's fashion</div>
                </div>
              }
          </div>
        </div>
      </nav> 
      <div className="loading-shean-container">
        {loading &&
          <>
            <FbShean/>
            <FbShean/>
            <FbShean/>
            <FbShean/>
            <FbShean/>
            <FbShean/>
            <FbShean/>
            <FbShean/>
            <FbShean/>
            <FbShean/>
          </>
        }
        {!loading && 
          arrayOfProd.map((item, index) => {
            return (
              <Card 
                key={index}
                id={item.id}
                price={item.price}
                title={item.title}
                image={item.image}
                category={item.category}
              />
            )
          })
        } 
      </div>
      {/* <div className="page-number-nav">
        {pageNumber > 1 && <button onClick={changePageNumberBack}>Go Back</button>}
        {arrayOfProd.length === 20 && <button onClick={changePageNumber}>Next Page</button>}
      </div> */}
    </section>
  )
}

export default Products