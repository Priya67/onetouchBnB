import React from 'react';
import { Link } from 'react-router';

import ReviewShow from './review_show';

class SpotDetail extends React.Component {
  constructor(props) {
    super(props);
    this.rating = this.rating.bind(this);
  }

  componentDidMount(){
    // this.props.fetchUser(this.props.spot.user_id);
    this.props.fetchSpot(this.props.spotId);
  }

  reviewList(reviews) {
    console.log("reviews", reviews);
    reviews.map(
      review => (
        <ReviewShow
          rating={review.rating}
          body={review.body}
          key={review.id}
          />
      ));
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


  render(){
    console.log("props", Object.values(this.props.spot));
    return (
      <div>
        <ul className="spot_list">
          <img className="index-image" src={this.props.spot.img_url} />
          <div id="take-on-side">
          <li id="head"><h1>{this.props.spot.headline} in {this.props.spot.city}</h1></li>
          <li><h3><u>Owner</u>:  {this.props.user.fname}, {this.props.user.lname}</h3></li>
          <br />
          <li id="user-pic-home"><img src={this.props.user.img_url}/></li>
          </div>
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
            <h3>Reviews</h3>
            // {this.reviewList(this.props.spot.reviews)}
          </div>
        </ul>
      </div>
    );
  }
}

export default SpotDetail;
