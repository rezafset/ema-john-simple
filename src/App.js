import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import NoMatch from './components/NoMatch/NoMatch';
import ProductInfo from './components/ProductInfo/ProductInfo';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/order">
              <Order></Order>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <ProductInfo></ProductInfo>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
