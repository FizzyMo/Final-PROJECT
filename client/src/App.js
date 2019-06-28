import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./component/Footer/index";
import Home from "./component/Pages/Home";
// import Navbar from "./component/Navbar";
import AboutLogin from "./component/Pages/AboutLogin";
import About from "./component/Pages/About";
import Login from "./component/Login/index";
import Logout from "./component/Logout/index";
import Profile from "./component/Pages/Profile";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
            <i className="home icon">
            <Link to="/Home">Home</Link>
            </i>
            <i className="question circle icon">
          <Link to= "/about">About</Link>
            </i>
         
          <Link to= "/Login">Login</Link>
          
          <Link to= "/Logout">Logout</Link>
          
          <Link to= "/Profile">Profile</Link>
          
          <Route exact path="/" component={AboutLogin} />
          <Route exact path="/aboutlogin" component={AboutLogin} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Logout" component={Logout} />
          <Route exact path="/Profile" component={Profile} />
      </div>
      <Footer>
      </Footer>
    </Router>
  );
}

export default App;
