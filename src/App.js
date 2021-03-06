import React from 'react';
import './app.css';
import 'antd/dist/antd.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/about';
import Contactus from './components/contact us/contact_us';
import History from './utils/history';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import Navbar from './components/navbar/navbar';
import Shop from './components/shop/shop';
import Sale from './components/sale/sale';
import ProductList from './components/ProductListing/productList';
import Cart from './components/Cart/Cart';

const App = () => (
  <div>
    <Router history={History}>
      <Navbar />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contactus} />
        <Route path='/shop' exact component={Shop} />
        <Route path='/sale' component={Sale} />
        <Route path='/shop/:id' component={ProductList} />
        <Route path='/cart' component={Cart} />
      </Switch>
    </Router>
  </div>
);
export default App;
