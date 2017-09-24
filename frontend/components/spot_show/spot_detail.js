import React from 'react';
import { Link } from 'react-router';

class SpotDetail extends React.Component {
  constructor(props) {
    super(props);
    this.rating = this.rating.bind(this);
  }

  rating(length) {
    let r = [];
    for(let i = 0; i<length; i++) {
      r.push(<b>{String.fromCharCode(9733)}</b>);
    }
    for(let j = 0; j<5-length;j++) {
      r.push(<b>{String.fromCharCode(9734)}</b>);
    }
    return r;
  }


render(){
  return (
    <div>
      <ul className="spot_list">
        <img className="index-image" src={this.props.spot.img_url} />
        <li id="head"><h1>{this.props.spot.headline}</h1></li>
        <br />
        <li>{this.props.spot.room_type} Room </li>
        <li>{this.rating(this.props.spot.rating)}</li>
        <br/>
        <li><h3><b><u>Rental Price</u>:  {this.props.spot.price}$ </b></h3> </li>
        <br />
        <li ><img id="bed" src="http://res.cloudinary.com/dlgwlvcuy/image/upload/v1506245769/spots/bed.png"/>  {this.props.spot.number_of_beds}</li>
        <br />
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
      </ul>
    </div>
  );
}
}

export default SpotDetail;
