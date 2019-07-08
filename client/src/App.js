import React, { Component } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//window.location.reload();

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import redirect from "./utils/redirect";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";


import Footer from "./component/Footer/index";
import Home from "./component/Pages/Home";
import About from "./component/Pages/About";
import Profile from "./component/Pages/Profile";

//Authentication Code

//import React, { Component } from "react";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Navbar from "./component/layout/Navbar";
import Landing from "./component/layout/Landing";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import PrivateRoute from "./component/private-route/PrivateRoute";
import Logout from "./component/Logout/Logout";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}




//end of authentication code

class App extends Component {
  render () {
    return(
      <Provider store={store}>
   <Router>
      <div className='ui inverted vertical masthead left aligned segment' >
        <div className="ui compact menu" style={{ backgroundColor: 'wheat' }}>

          <div className="header item">
            <Link to="/home"><i class="home icon" ></i>Home</Link>
          </div>

          <a className="item">
            <Link to="/home"><i class="refresh icon" onClick= {this._refreshPage}></i>Refresh Page</Link>
          </a>

          <a className="item">
            <Link to="/login"><i class="sign-in icon"></i>Login</Link>
          </a>

          <a className="item">
            <Link to="/logout"><i class="sign-out icon"></i>Logout</Link>
          </a>

        </div>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={redirect} />
        <Route exact path="/about" component={About} />
        <Route exact path="/profile" component={Profile} />
        {/* <Route exact path="/" component={Landing} /> */}
        <Route exact path="/register" component={Register} />
      
         <Switch>
              <PrivateRoute exact path="/logout" component={Logout} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/home" component={Home} />
            </Switch>
      </div>
      <div className='ui inverted vertical masthead left aligned segment' >
        <a className="item">
          <Link to="/about"><i class="question circle icon"></i>Learn About News Glean</Link>
        </a>
      </div>
      <Footer>
      </Footer>

    </Router>
    </Provider>
  );
}
_refreshPage() {

  //ADD IF STATEMENT TO MAKE SURE USER IS LOGGED IN!!!
  console.log("refreshed!!!")
  window.location.reload();
}


}
export default App;
