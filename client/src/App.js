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
      <div className='ui inverted vertical masthead left aligned segment' >
        <div className="ui compact menu" style={{ backgroundColor: 'wheat' }}>

          <div className="header item">
            <Link to="/Home"><i class="home icon"></i>Home</Link>
          </div>

          <a className="item">
            <Link to="/Profile"><i class="user icon"></i>Account</Link>
          </a>

          <a className="item">
            <Link to="/Login"><i class="sign-in icon"></i>Login</Link>
          </a>

          <a className="item">
            <Link to="/Logout"><i class="sign-out icon"></i>Logout</Link>
          </a>

        </div>

        <Route exact path="/" component={Home} />
        <Route exact path="/aboutlogin" component={AboutLogin} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Logout" component={Logout} />
        <Route exact path="/Profile" component={Profile} />
      </div>
      <div className='ui inverted vertical masthead left aligned segment' >
        <a className="item">
          <Link to="/about"><i class="question circle icon"></i>Learn About News Glean</Link>
        </a>
      </div>
      <Footer>
      </Footer>

    </Router>
  );
}

export default App;
