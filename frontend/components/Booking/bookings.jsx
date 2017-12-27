import React from 'react';

class Bookings extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if(this.props.currentUser != null) {
      this.props.fetchBookings(this.props.currentUser.id);
    }
    else if(this.props.currentUser == null || this.props.bookings.length ===1) {
      this.props.bookings = [];
    }
  }

  render() {
    return (
      <div id="bookings-show">
        <h3>My Bookings</h3>
        <ul>
          {this.props.bookings.map((booking,i) => (
            <li id="bookings-list">
              <img src={this.props.bookings[i].spot.img_url} />
              <p>{this.props.bookings[i].spot.headling}</p>
              <p><i>Address</i> : {this.props.bookings[i].spot.location}</p>
              <p><i>Checkin date</i> : {this.props.bookings[i].checkin_date}</p>
              <p><i>Checkout date</i> : {this.props.bookings[i].checkout_date}</p>
              <br/>
            </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Bookings;
