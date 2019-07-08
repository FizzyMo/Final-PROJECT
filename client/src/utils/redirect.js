import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router'
import { Link } from "react-router-dom";

import axios from 'axios';

class redirect extends React.Component {
    state = {
      redirect: false
    }
  
    handleSubmit () {
      axios.post(/**/)
        .then(() => this.setState({ redirect: true }));
    }
  
    render () {
      const { redirect } = this.state;
  
       if (redirect) {
         return <Redirect to='/login'/>;
       }
  
       return (<div>
           <h1>Welcome to the News App</h1>

        <Link to="/login">Click here to login</Link>
       </div>);
  }
}

export default redirect;