import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Home from "./component/Pages/Home";
import Navbar from "./component/Navbar";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
