import React from 'react';
import { Link } from 'react-router';
import ReviewShow from './review_show';
import { DatePicker, SingleDatePicker} from 'react-dates';
import moment from 'moment';
import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert'; // Import
import merge from 'lodash/merge';

class SpotDetail extends React.Component {
  constructor(props) {
    super(props);
    this.rating = this.rating.bind(this);
    this.state={
      booking: {
        checkin_date: '',
        checkout_date: '',
        spot_id: 1,
        user_id: 1,
      },
      booked: false,
    };
    this.confirmBooking = this.confirmBooking.bind(this);
    this.check = this.check.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  componentDidMount(){
    this.props.fetchSpot(this.props.spotId);

  }

  reviewList() {
    if(this.props.spot && this.props.spot.reviews) {
      return (
        this.props.spot.reviews.map(
          review => (
            <ReviewShow
              rating={review.rating}
              body={review.body}
              key={review.id}
              author={review.author}
              />
          )));
        }
    }

    getDate() {
      var today = new Date();
      var dd = today.getDate();

      var mm = today.getMonth()+1;
      var yyyy = today.getFullYear();

      return yyyy+'-'+mm+'-'+dd;
    }

  rating(length) {
    let r = [];
    for(let i = 0; i<length; i++) {
      r.push(<span
        className="fa fa-star checked"
        key={i + new Date().getUTCMilliseconds() + Math.random() * 500}
      />);
    }
    for(let j = 0; j<5-length;j++) {
      r.push(<span
        className="fa fa-star unchecked"
        key={j + new Date().getUTCMilliseconds() + Math.random() * (500-1) + 1}
      />);
    }
    return r;
  }

  handleChangeStart() {
    return e => this.setState(
      merge(this.state,
        {
          booking: {
            checkin_date: e.currentTarget.value
          }
        }
    ));
  }

  handleChangeEnd() {
    return e => this.setState(
      merge(this.state,
        {
          booking: {
            checkout_date: e.currentTarget.value
          }
        }
    ));
  }

  confirmBooking() {
    const booking = this.state.booking;
    this.props.createBooking({ booking });
    this.props.fetchBookings(this.props.currentUser.id);
    if(this.state.checkout_date!=='' && this.state.checkin_date!==''){
      return (
        <div>
          <h4>Booking Confirmed</h4>
          <p>From: {this.state.booking.checkin_date}</p>
          <p>To: {this.state.booking.checkout_date}</p>
        </div>
      );
    }
  }

  check(e) {
    e.preventDefault();
    if(this.props.currentUser != undefined) {
      this.setState({booked: true});
      this.setState(
        merge(this.state,
          {
            booking: {
              user_id: this.props.currentUser.id,
              spot_id: this.props.spotId
            }
          }
      ));
    }
    this.props.currentUser ? this.setState({booked: true}) : alert('Please log in to book this place');
  }

  render(){
    return (
      <div>
        <img className="index-image" src={this.props.spot.img_url} />
        <div id="take-on-side">
          <div>
            <ul className="spot_list">
              <div id= "user-info-rating">
                <div id="show_page_city_rating">
                  <li id="head"><h2>{this.props.spot.headline}</h2></li>
                  <br />
                  <li>{this.props.spot.room_type} Room </li>
                  <li>{this.props.spot.city}</li>
                  <li>{this.rating(this.props.spot.rating)}</li>
                </div>

                <div id="host-info">
                  <li id="user-pic-home"><img src={this.props.user.img_url}/></li>
                  <br />
                  <li><p id="host-name">{this.props.user.fname}</p></li>
                </div>
              </div>
              <br />

              <h3><b><u>Rental Price</u>: </b></h3>
                <li>{this.props.spot.price}$ / night</li>
                <br />

              <h3><b><u>Details</u>:</b></h3>
                <li ><img id="bed" src="https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506417270/bgs/guest.png"/>  {this.props.spot.number_of_guests} guests</li>
                <li ><img id="bed" src="https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506417270/bgs/bedroom.png"/>  {this.props.spot.number_of_bedroom} bedroom</li>
                <li ><img id="bed" src="https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506245769/spots/bed.png"/>  {this.props.spot.number_of_beds} bed</li>
                <li ><img id="bed" src="https://res.cloudinary.com/dlgwlvcuy/image/upload/v1506417270/bgs/bathroom.png"/>  {this.props.spot.number_of_bathroom} bathroom</li>
                <br />

              <h3><u>Description</u></h3>
                <li>{this.props.spot.description}</li>
                <br />
                <br />

              <h3><u>House Rules</u></h3>
                <li>{this.props.spot.house_rules}</li>
                <br />
                <br />

              <h3><u>Cancellation policy</u></h3>
                <li>{this.props.spot.cancellations}</li>
                <br />
                <br />

              <div className="reviews">
                <h3><u>Reviews</u></h3>
                {this.reviewList()}
              </div>

            </ul>
          </div>

          <div id="booking-window">
            <h3>Book this spot</h3>
              <form>

                <label>Check In:  </label>
                  <br />
                  <input
                    id="checking-dates"
                    type="date"
                    name="startDate"
                    min={this.getDate()}
                    value={this.state.checkin_date}
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
                    min={this.state.booking.checkin_date}
                    value={this.state.checkout_date}
                    onChange={this.handleChangeEnd()}
                  />
                  <br />

                <input type="submit" id="book-button" value="Book" onClick={this.check}/>
              </form>

            <div>{this.state.booked ? this.confirmBooking() : ''}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SpotDetail;
