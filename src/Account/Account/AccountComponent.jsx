import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import DateComponent from '../../Global/Date/DateComponent'

//Import JSX components
// import EditAccountComponent from '../EditAccount/EditAccountComponent.jsx';
// import ActivityEdit from '../../Activity/ActivityEdit.jsx';
// import TransitEdit from '../../Transit/TransitEdit.jsx';

//Redux
import { connect } from 'react-redux';
import { getUserById, getTripsByUserId, logout } from '../../actions/actions';

class Account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
      tripsByUserId: [],
      userById: []
    }
  }

  componentDidMount() {
    let userId = this.props.match.params.id;
    // console.log("Setting userId:", userId);
    console.log("\nAccountComponent Mounted Successfully");

    this.props.dispatch(getUserById(userId));
    this.props.dispatch(getTripsByUserId(userId));
  }

  dateFormatter(date) {
    if (date === undefined) {
      return
    }
    else {
      let d = new Date(date)
      let weekday = [];
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
      let month = [];
      month[0] = "JAN";
      month[1] = "FEB";
      month[2] = "MAR";
      month[3] = "APR";
      month[4] = "MAY";
      month[5] = "JUN";
      month[6] = "JUL";
      month[7] = "AUG";
      month[8] = "SEPT";
      month[9] = "OCT";
      month[10] = "NOV";
      month[11] = "DEC";

      // console.log('Date', d)
      return {
        day: weekday[d.getDay()],
        date: d.getDate(),
        month: month[d.getMonth()],
        year: d.getFullYear()

      }
    }
  }

  render() {
    console.log("\nAccountComponent - this.props:", this.props);
    let user = this.props.userById
    // console.log("\nAccountComponent -state:", this.state);
    // console.log(">>>>>>>>", localStorage.userId);
    if (localStorage.userId === undefined) {
      return (
        <div className="container col12">
          <div className="pagebanner pink-bg userdata">
            <i className="spacebottom far fa-5x fa-user-circle"></i>
            <h1>{user.first_name}<span>, {user.last_name}</span></h1>
            <p>{user.email}</p>
            <Link className="drk spaceright" to={`/users/account/edit/${user.id}`}>Edit</Link>
            <Link className="drk spaceright spacebottom" to={`/auth/users/account/edit_password/${user.id}`} >Update Password</Link>
            <form method="get" action="/">
              <button className='drk spacetop' type='submit'>Login</button>
            </form>
          </div>
          <div className="pagebody">
            <Link to={`/trips/add?${this.props.userById.id}`}>
              <button className="spacebottom spacetop" type="submit"><i className="fas fa-suitcase"></i> Create new trip</button>
            </Link>
            {this.props.tripsByUserId.map(trip => {
              return (
                <form className="triplist" method="get" action={`/users/account/${trip.user_id}/trips/${trip.id}`}>
                  <div className="triptitle">
                    <h1>{trip.city}<span>, {trip.country}</span></h1>
                  </div>
                  <div className="tripbutton">
                    <button className="drk" type="submit">View trip</button>
                  </div>
                  <div className="tripdates">
                    <DateComponent date={this.dateFormatter(trip.start_date)} />
                    <DateComponent date={this.dateFormatter(trip.end_date)} />
                  </div>
                </form>
              )
            })}
          </div>
        </div>
      )
    } else {
      return (

        <div className="container col12">
          <div className="pagebanner pink-bg userdata">
            <i className="spacebottom far fa-5x fa-user-circle"></i>
            <h1>{user.first_name}<span>, {user.last_name}</span></h1>
            <p>{user.email}</p>
            <Link className="drk spaceright" to={`/users/account/edit/${user.id}`}>Edit</Link>
            <Link className="drk spaceright spacebottom" to={`/auth/users/account/edit_password/${user.id}`} >Update Password</Link>

            <form method="get" action="/">
              <button className='drk spacetop' type='submit' onClick={logout}>Logout</button>
            </form>
          </div>
          <div className="pagebody">
            <Link to={`/trips/add?${this.props.userById.id}`}>
              <button className="spacebottom spacetop" type="submit"><i className="fas fa-suitcase"></i> Create new trip</button>
            </Link>
            {this.props.tripsByUserId.map(trip => {
              return (
                <form className="triplist" method="get" action={`/users/account/${trip.user_id}/trips/${trip.id}`}>
                  <div className="triptitle">
                    <h1>{trip.city}<span>, {trip.country}</span></h1>
                  </div>
                  <div className="tripbutton">
                    <button className="drk" type="submit">View trip</button>
                  </div>
                  <div className="tripdates">
                    <DateComponent date={this.dateFormatter(trip.start_date)} />
                    <DateComponent date={this.dateFormatter(trip.end_date)} />
                  </div>
                </form>
              )
            })}
          </div>
        </div>
      )
    }

  }
}

const mapStateToProps = state => {
  return {
    userById: state.userById,
    tripsByUserId: state.tripsByUserId
  }
  // return state
}
export default connect(mapStateToProps)(Account);

Account.defaultProps = {
  userById: {
    id: 0
  },
  tripsByUserId: [{
    id: 0
  }]
}