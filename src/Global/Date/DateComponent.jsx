import React, { Component } from 'react';
import './styles.css';

class DateComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      day: null,
      date: null,
      month: null,
      year: null
    }
  }
  componentDidMount() {
    console.log('CDM', this.props)
    if (this.props.date === undefined) {
      return
    } else {
      this.setState({
        day: this.props.date.day,
        date: this.props.date.date,
        month: this.props.date.month,
        year: this.props.date.year
      })
    }
  }


  render() {
    // console.log('DateComp', this.props)
    // console.log("DateCompState", this.state)

    return (
      <div className="datecont">
        <h3>{this.state.month}<span> {this.state.year}</span></h3>
        <h1>{this.state.date}</h1>
        <p>{this.state.day}</p>
      </div>
    );
  }
}
// const mapStateToProps = state => {
//   // return state;
//   console.log('DateComponent - This is state:', state, this.props)
//   return state;
// }



export default DateComponent;


