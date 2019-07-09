import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router'
import { Link } from "react-router-dom";
import image from "./images/background.jpeg"

import axios from 'axios';

class redirect extends React.Component {
  state = {
    redirect: false
  }

  handleSubmit() {
    axios.post(/**/)
      .then(() => this.setState({ redirect: true }));
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/login' />;
    }

    return (
      <div className='ui container segment' style={{ background: 'linear-gradient(to left, white, wheat' }}>

        <div className='ui fluid card' 
        style={{ 
          backgroundImage: `url(${image})`, 
          width: '100%',
          margin: '0'
          }}
        >

          <div className='content'>
            <br/>
            <br/>
            <br/>
            
            <h1 
            style={{
              color:'white', 
              backgroundColor: 'black', 
              opacity: '0.8', 
              fontWeight: 'bold',
              padding: '20px'
              }}
            >Welcome to News Glean...<em> "Dynamic news filtering for today's world!"</em></h1>

          </div>

        </div>

        <div className='content'>
          <br/>
          <h2>You can filter news content by the keywords of your choice!</h2>
          <h3>It will literally change how you consume the news...</h3>
          <br/>
        </div>
        <hr />
        <div>
          <div className='ui light gray bottom attached button'>
            <Link to="/login"><h3>Click here to login</h3></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default redirect;