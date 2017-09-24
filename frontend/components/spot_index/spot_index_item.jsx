import React from 'react';
import { withRouter } from 'react-router-dom';

import SpotIndexContainer from './spot_index_container';

class SpotIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.rating = this.rating.bind(this);
  }

  handleClick() {
    // console.log(this.);
    const spotId = this.props.spot.id;
    this.props.history.push(`/spots/${spotId}`);
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

  render() {
    return (
      <li>
        <div
          className="spot-index-item"
          onClick={this.handleClick}
        >
          <img src={this.props.spot.img_url} id="spots_img"/>
          <p><b>${this.props.spot.price} </b>{this.props.spot.headline}<br />
          {this.rating(this.props.spot.rating)}</p>
          <br />
          <br />
        </div>
      </li>

    );
  }
}

export default withRouter(SpotIndexItem);
