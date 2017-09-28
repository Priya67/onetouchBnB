import React from 'react';
import { Link } from 'react-router';
import ReviewShow from './review_show';
import { DatePicker, SingleDatePicker} from 'react-dates';
import moment from 'moment';

class SpotDetail extends React.Component {
  constructor(props) {
    super(props);
    this.rating = this.rating.bind(this);
    this.state={
      startDate: moment(),
      endDate: moment()
    };
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
              />
          )));
        }
    }

  rating(length) {
    let r = [];
    for(let i = 0; i<length; i++) {
      r.push(<b key={i}>{String.fromCharCode(9733)}</b>);
    }
    for(let j = 0; j<5-length;j++) {
      r.push(<b key={5-j}>{String.fromCharCode(9734)}</b>);
    }
    return r;
  }

  handleChangeEnd(date) {
    console.log("date1");
    this.setState({
      startDate: date
    });
  }

  handleChangeStart(date) {
    console.log("date2", date);
    this.setState({
      endDate: date
    });
  }


  render(){
    console.log("props", Object.values(this.props.spot));
    return (
      <div>
        <img className="index-image" src={this.props.spot.img_url} />
            <ul className="spot_list">
                <li id="head"><h1>{this.props.spot.headline} in {this.props.spot.city}</h1></li>
                <div id="take-on-side">
                  <div>
                    <li><h3><u>Owner</u>:  {this.props.user.fname}, {this.props.user.lname}</h3></li>
                    <br />
                    <li id="user-pic-home"><img src={this.props.user.img_url}/></li>
                    <br />
                    <br />
                    <li>{this.props.spot.room_type} Room </li>
                    <li>{this.rating(this.props.spot.rating)}</li>
                    <br/>
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
                    <div className="reviews">
                      <h3><u>Reviews</u></h3>
                      {this.reviewList()}
                    </div>
                  </div>
                  <div id="booking-window">
                    <h3>Booking Details</h3>
                    <form>
                      <label for="cat_rental_request_start_date">Check In</label>
                      <input
                        type="date"
                        name="cat_rental_request[start_date]"
                        value="<%= @rental_request.start_date %>"
                        id="cat_rental_request_start_date" />
                      <br />

                          <label for="cat_rental_request_end_date">Check Out</label>
                          <input
                            type="date"
                            name="cat_rental_request[end_date]"
                            value="<%= @rental_request.end_date %>"
                            id="cat_rental_request_end_date" />
                          <br />
                          <input type="submit" />
                    </form>
                  </div>
            </div>

            </ul>

      </div>
    );
  }
}

export default SpotDetail;
