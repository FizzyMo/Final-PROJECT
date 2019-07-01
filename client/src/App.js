import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./component/Footer/index";
import Home from "./component/Pages/Home";
import AboutLogin from "./component/Pages/AboutLogin";
import About from "./component/Pages/About";
import Login from "./component/Login/index";
import Logout from "./component/Logout/index";
import Profile from "./component/Pages/Profile";

function App() {
  return (
    <Router>
      <div>
        <div className="ui menu">

          <div className="header item">
            <Link to="/Home"><i class="home icon"></i> Home</Link>
          </div>

          <a className="item">
            <Link to="/Profile"><i class="user icon"></i> Profile</Link>
          </a>

          <a className="item">
            <Link to="/Login"><i class="sign-in icon"></i> Sign In</Link>
          </a>

          <a className="item">
            <Link to="/Logout"><i class="sign-out icon"></i> Sign Out</Link>
          </a>

          <a className="item">
            <Link to="/about"><i class="question circle icon"></i> About</Link>
          </a>
        </div>

        <div className="menu item">
          <div class="ui action input">
            <input type="text" placeholder="Keyword Search"></input>
            <div class="ui button">Go</div>
          </div>
        </div>
        

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
