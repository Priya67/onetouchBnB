import React from 'react';

class Bookings extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBookings(this.props.currentUser.id);
  }

  render() {
    return (
      <div id="bookings-show">
        <h3>My Bookings</h3>
      </div>
    )
  }
}

export default Bookings;
