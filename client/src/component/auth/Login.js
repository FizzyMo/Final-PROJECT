import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/home");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="ui raised very padded text container segment" style={{ background: 'linear-gradient(to left, white, wheat' }}>

        <h2><i class=" large address card icon"></i> Please sign in to your News Glean account. Your news awaits.</h2>
        <hr />

        <div style={{ paddingLeft: "11.250px" }}>
          <h4>LOGIN BELOW (*all fields are required)</h4>

          <form noValidate onSubmit={this.onSubmit}>
            <div className="ui form" style={{ width: '235px' }}>
              <label htmlFor="email" style={{ fontWeight: 'bold' }}>*Email </label>
              <span className="red-text">
                {errors.email}
                {errors.emailnotfound}
              </span>
              <br />
              <input
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                id="email"
                type="email"
                className={classnames("", {
                  invalid: errors.email || errors.emailnotfound
                })}
              />
            </div>

            <div className="ui form" style={{ width: '235px' }}>
              <label htmlFor="password" style={{ fontWeight: 'bold' }}>*Password </label>
              <span className="red-text">
                {errors.password}
                {errors.passwordincorrect}
              </span>
              <br />
              <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                className={classnames("", {
                  invalid: errors.password || errors.passwordincorrect
                })}
              />
            </div>

            <div className="input-field col s12">
              <button
                style={{
                  width: "235px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                type="submit"
                className="fluid blue ui button"
              >
                Sign in
                </button>
            </div>
            <hr />

            <h4 className="grey-text text-darken-1">
              Don't have an account? <Link to="/register">Register</Link>
            </h4>
          
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
