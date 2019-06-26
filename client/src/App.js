import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
// import Footer from "./component/Footer";
import Home from "./component/Pages/Home";
// import Navbar from "./component/Navbar";
import AboutLogin from "./component/Pages/AboutLogin";
import About from "./component/Pages/About";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to= "/about">About</Link>
          </li>
        </ul>  
          <Route exact path="/" component={AboutLogin} />
          <Route exact path="/aboutlogin" component={AboutLogin} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
