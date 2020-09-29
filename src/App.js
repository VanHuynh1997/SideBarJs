import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';

function App(){
  return(
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/reports" component={Reports}/>
          <Route path="/products" component={Products}/>
        </Switch>
      </Router>
    </div>
  )
}
export default App;