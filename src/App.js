import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SingleProduct from './components/Product/SingleProduct'
import Footer from './components/Footer/Footer'
import MainNav from './components/MainNav'
import ProductNav from './components/ProductNav'
import Home from './components/Home'
// import Product from './components/Product/Product'

function App() {
  return (
    <Router>
      <MainNav />
      <ProductNav />
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route> 
          
          <Route path='/product/'>
            <SingleProduct/>
          </Route> 
       </Switch>

    <Footer />
    </Router>
  );
}

export default App;
