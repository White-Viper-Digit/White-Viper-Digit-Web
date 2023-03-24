import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./Home/Home";
import Products from "./Products/Products";
import data from './Products/data';
import Orders from './Orders/Orders'
import OrderDetail from './Orders/OrderDetail';
import Payment from './Payment/Payment';
import CheckoutSteps from './Payment/CheckoutSteps';

function App() {
    const openMenu = () => {
      document.querySelector(".sidebar")?.classList.add("open");
    }
    const closeMenu = () => {
      document.querySelector(".sidebar")?.classList.remove("open");
    }

  return (
    <Router>
    <div className = "grid-container">
       <link rel="stylesheet" href="style.css" />
       <title>White Viper</title>

       <body>
          <div>
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>&#9776;</button>
                <a href="index.html">White Viper</a>
            </div>
            <div className="header-links">
                <Link to="/">Home</Link>
                <Link to="/catalog">Catalog</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/payment">Payment</Link>
            </div>
        </header>
    <head> 
    <link rel ="stylesheet" href="style.css"></link>
        <title>White Viper</title>
    </head>
    <body>
        <div>
            <header>
                White Viper
            </header>
            <aside className="sidebar">
                <h3>Shopping Categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>
                  x
                  </button>
                <ul className="products">
                  {data.products.map((product) => (
                    <li>
                        <div className="product">
                          <img
                          className="product-image"
                          src={product.imageUrl}
                          alt="product"
                          />
                          <div className="product-name">
                            <a href="product.html">{product.name}</a>
                            </div>
                            <div className="product-brand">{product.brand}</div>
                            <div className="product-price">{product.price}</div>
                            <div className="product-rating">
                              {product.rating} Stars ({product.numberOfReviews} reviews)
                            </div>
                          </div>
                         </li>
                  ))}
                  ;
                  </ul>
            </aside>
            <main className="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Products />} />
                <Route path="orders" element={<Orders />}></Route>
                <Route path="/order/:id" element= {<OrderDetail />}></Route>
                <Route path="payment" element={<Payment />}></Route>
                <Route path="/payment:id" element= {<CheckoutSteps />}></Route>
              </Routes>
            </main>
            <footer>
                &copy; 2023 White Viper
            </footer>
        </div>
    </body>
</div>
</body>
</div>
 </Router>
  );
}

export default App;