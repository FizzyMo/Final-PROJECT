import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      emotion: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      emotion: this.state.emotion
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="ui raised very padded text container segment" style={{ background: 'linear-gradient(to left, white, wheat' }}>

        <h2><i class="large users icon"></i> Please regsiter for a News Glean account and login.</h2>
        <hr />

        <div style={{ paddingLeft: '11.250px' }}>
          <h4>REGISTRATION FORM (*all fields are required)</h4>

          <form noValidate onSubmit={this.onSubmit}>
            <div className="ui form" style={{ width: '235px'}}>
              <label htmlFor="name" style={{ fontWeight: 'bold' }}>*Name </label>
              <span className="red-text">{errors.name}</span>
              <br />
              <input
                onChange={this.onChange}
                value={this.state.name}
                error={errors.name}
                id="name"
                type="text"
                className={classnames("", {
                  invalid: errors.name
                })}
              />
            </div>

            <div className="ui form" style={{ width: '235px'}}>
              <label htmlFor="email" style={{ fontWeight: 'bold' }}>*Email </label>
              <span className="red-text">{errors.email}</span>
              <br />
              <input
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                id="email"
                type="email"
                className={classnames("", {
                  invalid: errors.email
                })}
              />
            </div>

            <div className="ui form" style={{ width: '235px'}}>
              <label htmlFor="password" style={{ fontWeight: 'bold' }}>*Password </label>
              <span className="red-text">{errors.password}</span>
              <br />
              <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                className={classnames("", {
                  invalid: errors.password
                })}
              />
            </div>

            <div className="ui form" style={{ width: '235px'}}>
              <label htmlFor="password2" style={{ fontWeight: 'bold' }}>*Confirm Password </label>
              <span className="red-text">{errors.password2}</span>
              <br />
              <input
                onChange={this.onChange}
                value={this.state.password2}
                error={errors.password2}
                id="password2"
                type="password"
                className={classnames("", {
                  invalid: errors.password2
                })}
              />
            </div>

            <div className="ui form" style={{ width: '235px'}}>
              <label htmlFor="emotion" style={{ fontWeight: 'bold' }}>*What kind of news do you like to read about? </label>
              <span className="red-text">{errors.emotion}</span>
              <select 
              onChange={this.onChange}
              value={this.state.emotion}
              error={errors.emotion}
              id="emotion"
              >
                <option value="random">(select one)</option>
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="exciting">Exciting</option>
                <option value="angry">Angry</option>
              </select>
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
                Sign up
                </button>
            </div>
            <hr />

            <h4>Already have an account? <Link to="/login">Log in</Link></h4>
          
          </form>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));