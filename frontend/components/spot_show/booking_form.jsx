import React from 'react';
import { withRouter } from 'react-router-dom';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkin_date: '',
      checkout_date: ''
    };
  }

  handleChangeStart() {
    return e => this.setState({
      checkin_date:e.currentTarget.value
    });
  }

  handleChangeEnd() {
    return e => this.setState({
      checkout_date:e.currentTarget.value
    });
  }

  confirmBooking() {
    if(this.state.checkin_date!=='' && this.state.checkout_date!==''){
      return (
        <div>
          <h4>Booking Confirmed</h4>
          <p>From: {this.state.checkin_date}</p>
          <p>To: {this.state.checkout_date}</p>
        </div>
      );
    }
  }

  check(e) {
    e.preventDefault();
    this.props.currentUser ? this.setState({booked: true}) : alert('Please log in to book this place');
  }


  render() {
    return (
      <div id="booking-window">
        <h3>Book this spot</h3>
        <form>
          <label>Check In:  </label>
          <br />
          <input
            id="checking-dates"
            type="date"
            name="startDate"
            value={this.state.startDate}
            onChange={this.handleChangeStart()}
             />
            <br />
            <br />
            <label>Check Out:  </label>
            <br />
            <input
              id="checking-dates"
              type="date"
              name="endDate"
              value={this.state.endDate}
              onChange={this.handleChangeEnd()}
              />
              <br />
              <input type="submit" id="book-button" value="Book" onClick={this.check}/>
        </form>
        <div>{this.state.booked ? this.confirmBooking() : ''}</div>
        </div>
    );
  }
}

export default withRouter(BookingForm);
