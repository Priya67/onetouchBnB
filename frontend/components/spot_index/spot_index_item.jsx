import React from 'react';
import { withRouter } from 'react-router-dom';

import SpotIndexContainer from './spot_index_container';

class SpotIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    console.log("Cutie");
    this.props.fetchSpots;
  }

  handleClick() {
    const spotId = this.props.spot.it;
    this.props.history.push(`/spots/${spotId}`);
  }

  render() {
    return (
      <li>
        <img src={this.props.spot.img_url} id="spots_img"/>
        <p>{this.props.spot.headline}</p>
        <p>Price:{this.props.spot.price}$ Rating: {this.props.spot.rating}</p>
      </li>
    );
  }
}

export default withRouter(SpotIndexItem);
