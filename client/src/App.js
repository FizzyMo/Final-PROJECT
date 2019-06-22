import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./componets/Footer";
import Home from "./componets/pages/Home";
import Navbar from "./componets/Navbar";

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
