import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Logout extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div class="ui placeholder segment" style={{background: 'linear-gradient(to top, lightgrey, wheat)'}}>
          <div class="ui two column stackable center aligned grid">
            <div class="ui vertical divider">Choose</div>
            <div class="middle aligned row">

              <div class="column">
                <div class="ui icon header">
                  <i class="sign out alternate icon"></i>
                  Log out of News Glean
                </div>

                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  onClick={this.onLogoutClick}
                  className="fluid big ui black button"
                >
                  Logout
              </button>
              </div>

              <div class="column">
                <div class="ui icon header">
                  <i class="world icon"></i>
                  Return Home to Read Articles
                </div>

                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  className="fluid big ui black button"
                >
              <a class="item" href="/home" style={{color: 'white'}}>Home</a>
              </button>

              </div>

            </div>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>


    );
  }
}

Logout.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Logout);
