import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Footer from './components/Footer'
import MainNav from './components/MainNav'
import ProductNav from './components/ProductNav'
import Home from './components/Home'
import Products from './components/Products'

function App() {
  const product = ['A','B']
  return (
    <Router>
      <MainNav />
      <ProductNav />
      <Switch>
          <Route exact path="/">
            <Home/>
            </Route> 
          <Route path='/collection'>
            <Products product={product}/>
            </Route> 
       </Switch>

    <Footer />
    </Router>
  );
}

export default App;
