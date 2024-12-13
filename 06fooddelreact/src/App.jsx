import React from 'react';
import './App.css';
import Navbar from "./component/Navbar.jsx";
import Header from "./component/Header.jsx";
import FeatureProduct from "./component/FeatureProduct.jsx";
import Footer from './component/Footer.jsx';

function App() {

  return (
    <div className="App">
    <Header />
    <Navbar />
    <main>
      <div id="container1">
        <div id="row1">
          <b>Welcome to Online FoodShop</b>
          <br />
          <button className="btn">Shop Now</button>
          <div id="container3">
            <div id="row2">
              <button className="btn">Price</button>
            </div>
            <div id="row3">
              <button className="btn">Specials</button>
            </div>
          </div>
        </div>
      </div>
      <FeatureProduct />
    </main>
    <Footer />
  </div>
  )
}

export default App
