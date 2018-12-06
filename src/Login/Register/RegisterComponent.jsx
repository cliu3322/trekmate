import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './styles.css';

//Redux Setup
import { connect } from 'react-redux';

//Import actions
import { addUser } from '../../actions/actions.js';


class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      first_name: null,
      last_name: null,
      email: null,
      password: null
    }
  }

  //Lifecycle Methods
  componentDidMount() { }

  //Helper functions
  handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleRegister = (e) => {
    e.preventDefault();
    console.log("Register - handleSubmit this.props:", this.props);
    console.log("New user has been registered!", this.state);

    this.props.dispatch(addUser(this.state));
  }

  render() {
    return (
      <div className="register-container">
        {/* <div className="rmaponegrad">
        </div>
        <div className="rmapone">
        </div>
        <div className="rmaptwograd">
        </div>
        <div className="rmaptwo">
        </div> */}
        <div className="rmapthreeform">
          <h1>Register</h1>
          <form className="registerform" onSubmit={this.handleRegister}>
            <div class="form-group">
              <input type="text" id="firstname" name="first_name" onChange={this.handleChange}  className="form-control" required></input>
              <label class="form-control-placeholder" for="firstname">First Name</label>
            </div>
            <div class="form-group">
              <input type="text" id="lastname" name="last_name" onChange={this.handleChange}  className="form-control" required></input>
              <label class="form-control-placeholder" for="lastname">Last Name</label>
            </div>
            <div class="form-group">
              <input type="text" id="email" name="email" onChange={this.handleChange}  className="form-control" required></input>
              <label class="form-control-placeholder" for="email">Email</label>
            </div>
            <div class="form-group">
              <input type="password" id="password" name="password" onChange={this.handleChange}  className="form-control" required></input>
              <label class="form-control-placeholder" for="password">Password</label>
            </div>
            <div class="form-group">
              <input type="password" id="confirmpassword" name="confirmpassword" onChange={this.handleChange}  className="form-control" required></input>
              <label class="form-control-placeholder" for="confirmpassword">Confirm Password</label>
            </div>

            <button type="submit">Register</button>
            
          </form>
          <Link to="/login">
            <a type="button">Cancel</a>
          </Link>
        </div>
        {/* <div className="rmapthree">
        </div> */}
      </div>
    )
  }
}

//Gives access to state, returns an object. This is store state. You already have data in store, want it to be available as props so create a mapping. Redux provides API to do that
const mapStateToProps = state => {
  return {
    users: state
  }
}


export default connect(mapStateToProps)(Register);
// export default Register;